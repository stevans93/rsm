import React, { useState} from 'react';
import { MapData } from './MapData';

function Map() {
    const [hoveredPath, setHoveredPath] = useState(null);
    const [activePaths, setActivePaths] = useState({});
  
    const handlePathClick = (event, pathId) => {
        console.log(`Clicked on path ${pathId}`);
        setActivePaths((prevActivePaths) => {
          const newActivePaths = {};

          Object.keys(prevActivePaths).forEach((key) => {
            newActivePaths[key] = false;
          });

          newActivePaths[pathId] = !prevActivePaths[pathId];

          return newActivePaths;
        });
      };
  
    const handlePathHover = (pathId) => {
      setHoveredPath(pathId);
    };
  
    const handlePathLeave = () => {
      setHoveredPath(null);
    };
  
    return (
      <div className="m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="544.1554" height="792.53302" fill="#fff">
          {MapData.map((path) => (
            <g key={path.id}>
              <path
                d={path.d}
                title={path.title}
                id={path.id}
                stroke={path.stroke}
                fill={hoveredPath === path.id || activePaths[path.id] ? '#A3C8DB' : '#fff'}
                onClick={(event) => handlePathClick(event, path.id)}
                onMouseOver={() => handlePathHover(path.id)}
                onMouseOut={handlePathLeave}
              />
            </g>
          ))}
        </svg>
      </div>
    );
  }
  
  export default Map;