import React from 'react'

function MapSideBar({handleToggleInfo, selectedTitle, selectedMunicipality}) {
  // console.log('MapSide: ', selectedMunicipality);

  return (
    <div className={`w-full h-full bg-[#fff] rounded-2xl shadow relative p-3`}>
      {selectedMunicipality && (
        <div>
          {/* <p>Okrug: {selectedTitle}</p> <br /> */}
          <p onClick={handleToggleInfo}>
            {selectedMunicipality
              .filter((item) => item.district === selectedTitle)
              .map((item) => (
                <span key={item._id} className="flex p-3 ">
                  <button className="w-full border border-1 border-main px-5 py-2 rounded-xl text-main hover:bg-main hover:text-[#fff]">
                    {item.municipality}
                  </button>
                </span>
              ))}
          </p>
        </div>
      )}
    </div>
  )
}

export default MapSideBar
