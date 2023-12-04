import React from 'react';

function MapSideBar({ handleToggleInfo, selectedTitle, selectedMunicipality }) {
  console.log('MapSide: ', selectedMunicipality);

  return (
    <div className={`w-full h-full bg-[#fff] rounded-2xl shadow relative p-3`}>
      {selectedMunicipality && (
        <div>
          <p>Okrug: {selectedTitle}</p> <br />
          <p onClick={handleToggleInfo}>
            {selectedMunicipality
              .filter(item => item.district === selectedTitle)
              .map((item) => (
                <span key={item._id}>
                  <p>Opstine: {item.municipality}</p>
                  <p>Grad: {item.city}</p> <br />
                </span>
              ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default MapSideBar;
