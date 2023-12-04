import React from 'react'

function MapSideBar({handleToggleInfo, selectedTitle, selectedMunicipality}) {
  return (
    <div className={`w-full h-full bg-[#fff] rounded-2xl shadow relative p-3`}>
      {selectedMunicipality && (
        <div>
          {/* <p>Okrug: {selectedTitle}</p> <br /> */}
          <p>
            {selectedMunicipality
              .filter((item) => item.district === selectedTitle)
              .map((item) => (
                <span key={item._id} className="flex w-full p-3 ">
                  <button
                    onClick={() => handleToggleInfo(item.municipality)}
                    className=" w-full border border-1 border-main px-5 py-2 rounded-xl text-main hover:bg-main hover:text-[#fff]">
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
