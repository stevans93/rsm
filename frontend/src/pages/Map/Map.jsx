import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useRef, useState} from 'react'

import InfoAboutTheCity from '../../components/InfoAboutTheCity/InfoAboutTheCity'
import {MapData} from './MapData'
import MapSideBar from '../../components/MapSideBar/MapSideBar'
import MunicipalityService from '../../services/municipalityService'
import {storeAllMunicipalities} from '../../store/municipalitySlice'

function Map() {
  const [hoveredPath, setHoveredPath] = useState(null)
  const [hoveredTitle, setHoveredTitle] = useState(null)
  const [activePaths, setActivePaths] = useState({})
  const [selectedPathId, setSelectedPathId] = useState(null)
  const [selectedTitle, setSelectedTitle] = useState(null)
  const [selectedMunicipality, setSelectedMunicipality] = useState([])
  const [selectedMunicipalityInfo, setSelectedMunicipalityInfo] = useState(null)
  const [isInfoVisible, setIsInfoVisible] = useState(false)
  const mapContainerRef = useRef(null)
  const dispatch = useDispatch()
  const {municipalities} = useSelector((state) => state.municipalityStore)
  const [sidebar, setSidebar] = useState(false)

  const sidebarRef = useRef()

  const handlePathClick = (event, pathId, title) => {
    const clickedMunicipality = municipalities?.filter((municipality) => municipality.district === title)

    setActivePaths((prevActivePaths) => {
      const newActivePaths = {...prevActivePaths}

      if (newActivePaths[pathId]) {
        setSelectedPathId(null)
        setSelectedTitle(null)
        setSelectedMunicipality(null)

        newActivePaths[pathId] = false
      } else {
        Object.keys(newActivePaths).forEach((key) => {
          newActivePaths[key] = false
        })

        newActivePaths[pathId] = true
        setSelectedPathId(pathId)
        setSelectedTitle(title)

        if (clickedMunicipality.length > 0) {
          setSelectedMunicipality(clickedMunicipality)
        }
      }

      // console.log('newActivePaths', newActivePaths);
      // console.log('selectedMunicipality', selectedMunicipality);

      return newActivePaths
    })
  }

  const handlePathHover = (pathId, pathTitle) => {
    setHoveredPath(pathId)
    setHoveredTitle(pathTitle)
  }

  const handlePathLeave = () => {
    setHoveredPath(null)
  }

  const handleToggleInfo = (_id) => {
    const clickedMunicipality = municipalities?.find((municipality) => municipality._id === _id) ?? null

    setSelectedMunicipalityInfo(clickedMunicipality)
    setIsInfoVisible(true)
  }

  const closeModal = () => {
    setIsInfoVisible(false)
  }

  useEffect(() => {
    MunicipalityService.allMunicipalities(1, 10000)
      .then((res) => {
        dispatch(storeAllMunicipalities(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const listener = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false)
      }
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [])

  return (
    <div>
      <div className="flex overflow-x-scroll relative w-full px-[20px] mt-[20px]">
        <div className="flex items-center md:pt-0 pt-[70px] justify-center md:w-[80%]">
          <svg xmlns="http://www.w3.org/2000/svg" width="544.1554" height="792.53302" fill="#fff" ref={mapContainerRef}>
            {MapData.map((path) => (
              <g key={path.id}>
                <title>{path.title}</title>
                <path
                  d={path.d}
                  title={path.title}
                  id={path.id}
                  stroke={path.stroke}
                  fill={hoveredPath === path.id || selectedPathId === path.id ? '#A3C8DB' : '#fff'}
                  onClick={(event) => {
                    handlePathClick(event, path.id, path.title)
                    setSidebar(true)
                  }}
                  onMouseOver={() => handlePathHover(path.id, path.title)}
                  onMouseOut={handlePathLeave}
                />
              </g>
            ))}
          </svg>

          {hoveredTitle && (
            <div className="fixed md:absolute md:left-[36%] mx-auto top-[100px] text-sm md:text-base md:top-[1px] md:w-[40%] text-center lg:w-[300px] lg:left-[45%] text-2xl w-[60%] left-[20%] font-bold text-main shadow right-[450px] bg-[#fff] p-4 rounded-2xl">
              {hoveredTitle}
            </div>
          )}
        </div>

        <div
          ref={sidebarRef}
          className={`w-[70%] md:block fixed left-[15%] md:w-[20%] md:static top-[25%] ${!sidebar ? 'hidden' : ''}`}>
          <MapSideBar
            handleToggleInfo={handleToggleInfo}
            selectedTitle={selectedTitle}
            selectedMunicipality={selectedMunicipality}
          />
        </div>
      </div>

      {isInfoVisible && (
        <div className={`absolute top-[60%] left-[50%] translate-y-[-50%] translate-x-[-50%] `}>
          <InfoAboutTheCity
            handleToggleInfo={handleToggleInfo}
            cityInfo={selectedMunicipalityInfo}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  )
}

export default Map
