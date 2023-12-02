import React from 'react';
import { RxCross1 } from "react-icons/rx";

function MapSideBar({ selectedPathId, onClose, setIsVisible, isVisible }) {
    const handleClickInside = (event) => {
      event.stopPropagation();
    };

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }
  
    return (
      <div className='w-full h-full bg-[#fff] rounded-2xl shadow relative' onClick={handleClickInside}>

        <div className='absolute top-5 right-5'>
          <div className='border border-2 p-1 rounded-2xl text-spanGray hover:text-main' onClick={onClose}>
            <RxCross1 />
          </div>
        </div>

        <div><p onClick={handleVisibility}>{selectedPathId}</p></div>
        
      </div>
    );
  }
  
  export default MapSideBar;