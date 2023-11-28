import React from 'react';
import { FaUpload } from "react-icons/fa";

function DashboardSettingsUser() {
  return (
    <div className='bg-[#fff] p-5 rounded-3xl shadowBorder w-[310px] lg:w-[500px] mx-auto dashboard'>

      <div className='w-[40%]'>
        <h2 className='text-[22px] text-main'>Dodaj Korisnika</h2>
        <p className='text-[10px] text-spanGray'>Podešavanja vaseg profila možete uraditi ovde ovo je vidljivo samo vama.</p>
      </div>

      <form className='flex flex-col mt-[30px]'>
          <div className='flex mb-[30px] gap-5'>

            <label className="relative cursor-pointer bg-white border border-spanGray px-8 py-12 rounded-xl">
              <span className="flex flex-col items-center text-gray-400 mb-2 text-[11px]"><FaUpload /> Otpremi Sliku</span>
              <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
            </label>

            <div>
              <h3 className='text-[16px]'>Profilna Slika</h3>
              <span className='text-[10px] text-spanGray'>Profilna slika maksimalna veličina do 10MB</span>
            </div>

          </div>

          <div className='flex flex-col items-center'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 w-[100%]'>
              <div className='flex  flex-col gap-4 w-[50%]'>
                <div className='flex flex-col items-center xl:items-start justify-between'>
                  <label>Ime</label>
                  <input type="text" className='border border-1 border-main rounded-xl px-3 py-2 w-auto lg:w-[200px]'/>
                </div>

                <div className='flex flex-col items-center xl:items-start  justify-between'>
                  <label>Prezime</label>
                  <input type="text" className='border border-1 border-main rounded-xl px-3 py-2 w-auto lg:w-[200px]'/>
                </div>

                <div className='flex flex-col items-center xl:items-start  justify-between'>
                  <label>Email</label>
                  <input type="email" className='border border-1 border-main rounded-xl px-3 py-2 w-auto lg:w-[200px]'/>
                </div>
              </div>

              <div className='flex flex-col gap-4 w-[50%]'>
                <div className='flex flex-col items-center xl:items-start  justify-between'>
                  <label>Pozicija</label>
                  <input type="text" className='border border-1 border-main rounded-xl px-3 py-2 w-auto lg:w-[200px]'/>
                </div>

                <div className='flex flex-col items-center xl:items-start  justify-between'>
                  <label>Lozinka</label>
                  <input type="password" className='border border-1 border-main rounded-xl px-3 py-2 w-auto lg:w-[200px]'/>
                </div>

                <div className='flex flex-col items-center xl:items-start  justify-between'>
                  <label>Telefon</label>
                  <input type="text" className='border border-1 border-main rounded-xl px-3 py-2 w-auto lg:w-[200px]'/>
                </div>
              </div>
            </div>

            <button className='mt-[30px] border border-1 border-main px-5 py-2 rounded-xl text-main hover:bg-main hover:text-[#fff]'>Dodaj Korisnika</button>
          </div>

      </form>
    </div>
  )
}

export default DashboardSettingsUser;