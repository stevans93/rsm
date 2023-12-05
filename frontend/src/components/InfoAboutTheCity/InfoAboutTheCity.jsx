import React from 'react'
import {RxCross1} from 'react-icons/rx'
import img from '../../assets/Dragan_Markovic_Palma.jpg'

function InfoAboutTheCity({closeModal, cityInfo}) {
  return (
    <div className="bg-[#fff] w-[720px] h-[320px] rounded-2xl shadow p-[30px]">
      <div className="flex flex-col h-[100%] justify-between">
        <div className="flex relative">
          <div>
            <h2 className="text-main text-[35px] font-bold">{cityInfo?.municipality}</h2>
            <p className="text-[12px] text-spanGray">Okrug: {cityInfo?.district}</p>
          </div>
          <div className="absolute top-5 right-5">
            <div className="border border-2 p-1 rounded-2xl text-spanGray hover:text-main" onClick={closeModal}>
              <RxCross1 />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <img
              src={import.meta.env.VITE_IMAGE_URL + cityInfo.image}
              alt="img"
              className="w-[140px] h-[140px] rounded-2xl shadow"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[14px]">
              Predsednik: <span className="text-spanGray">{cityInfo?.fullNameOfThePresident}</span>{' '}
            </p>
            <p className="text-[14px]">
              Datum Rođenja: <span className="text-spanGray">{cityInfo?.dateOfBirth}</span>{' '}
            </p>
            <p className="text-[14px]">
              Email: <span className="text-spanGray">{cityInfo?.email}</span>{' '}
            </p>
            <p className="text-[14px]">
              Telefon: <span className="text-spanGray">{cityInfo?.phone}</span>{' '}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button className="border border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]">
              Preuzmi PDF Fajl
            </button>
            <button className="border border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]">
              Više O Predsednik
            </button>
            <button className="border border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]">
              Sajt Opštine
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoAboutTheCity
