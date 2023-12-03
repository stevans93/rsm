import React, { useEffect, useRef, useState} from 'react';
import { MapData } from './MapData';
import MapSideBar from '../../components/MapSideBar/MapSideBar';
import InfoAboutTheCity from '../../components/InfoAboutTheCity/InfoAboutTheCity';

function Map() {
  const [hoveredPath, setHoveredPath] = useState(null);
  const [activePaths, setActivePaths] = useState({});
  const [selectedPathId, setSelectedPathId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const mapContainerRef = useRef(null);

  const handlePathClick = (event, pathId, title) => {
    setActivePaths((prevActivePaths) => {
      const newActivePaths = {};

      Object.keys(prevActivePaths).forEach((key) => {
        newActivePaths[key] = false;
      });

      newActivePaths[pathId] = !prevActivePaths[pathId];
      setSelectedPathId(newActivePaths[pathId] ? pathId : null);

      setSelectedTitle(title);

      return newActivePaths;
    });
  };

  const handlePathHover = (pathId) => {
    setHoveredPath(pathId);
  };

  const handlePathLeave = () => {
    setHoveredPath(null);
  };

  const handleDocumentClick = (event) => {
    if (mapContainerRef.current && !mapContainerRef.current.contains(event.target) && !event.target.classList.contains('MapSideBar')) {
      setSelectedPathId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <div className="flex relative w-full px-[20px] mt-[20px]">

        <div className='flex items-center justify-center w-[80%]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="544.1554" height="792.53302" fill="#fff" ref={mapContainerRef}>
            {MapData.map((path) => (
              <g key={path.id}>
                <path
                  d={path.d}
                  title={path.title}
                  id={path.id}
                  stroke={path.stroke}
                  fill={hoveredPath === path.id || selectedPathId === path.id ? '#A3C8DB' : '#fff'}
                  onClick={(event) => handlePathClick(event, path.id, path.title)}
                  onMouseOver={() => handlePathHover(path.id)}
                  onMouseOut={handlePathLeave}
                />
              </g>
            ))}
          </svg>
        </div>
  
        <div className='w-[20%]'>
          {selectedPathId && <MapSideBar selectedTitle={selectedTitle} setIsVisible={setIsVisible} isVisible={isVisible} selectedPathId={selectedPathId} onClose={() => setSelectedPathId(null)} />}
        </div>
  
      </div>
  
      <div className={`absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ${isVisible ? 'block' : 'hidden'} `}>
        {selectedPathId && <InfoAboutTheCity selectedPathId={selectedPathId} onClose={() => setSelectedPathId(null)} />}
      </div>
      
    </div>
  );
}

export default Map;