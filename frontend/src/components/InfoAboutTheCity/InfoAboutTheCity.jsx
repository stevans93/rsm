import React from 'react';
import img from '../../assets/Dragan_Markovic_Palma.jpg'
import { RxCross1 } from "react-icons/rx";

function InfoAboutTheCity({onClose}) {
  return (
    <div className='bg-[#fff] w-[720px] h-[320px] rounded-2xl shadow p-[30px]'>

        <div className='flex flex-col h-[100%] justify-between'>

            <div className='flex relative'>
                <div>
                    <h2 className='text-main text-[35px] font-bold'>Jagodina</h2>
                    <p className='text-[12px] text-spanGray'>Okrug: Pomoravski Okrug</p>
                </div>
                <div className='absolute top-5 right-5'>
                    <div className='border border-2 p-1 rounded-2xl text-spanGray hover:text-main' onClick={onClose}>
                        <RxCross1 />
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>

                <div>
                    <img src={img} alt="img" className='w-[140px] h-[140px] rounded-2xl shadow' />
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-[14px]'>Predsednik: <span className='text-spanGray'>Dragan Marinkovic Palma</span> </p>
                    <p className='text-[14px]'>Datum Rođenja: <span className='text-spanGray'>02.05.1960.</span> </p>
                    <p className='text-[14px]'>Email: <span className='text-spanGray'>jedinstvenasbijabg@gmail.com</span> </p>
                    <p className='text-[14px]'>Telefon: <span className='text-spanGray'>011/334-43-13</span> </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <button className='border border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]'>Preuzmi PDF Fajl</button>
                    <button className='border border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]'>Više O Predsednik</button>
                    <button className='border border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]'>Sajt Opštine</button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default InfoAboutTheCity;