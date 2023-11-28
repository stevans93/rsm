import React, { useEffect, useState } from 'react';
import testImg from '../../../../assets/stevan.jpeg';

function DashboardSettingsProfile() {

  return (
    <div className={`!bg-[#fff] p-5 rounded-3xl shadowBorder w-[310px] lg:w-[500px] mx-auto dashboard`} >

      <div className='w-[50%]'>
        <h2 className='text-[22px] text-main'>Profil</h2>
        <p className='text-[10px] text-spanGray'>Podešavanja vaseg profila možete uraditi ovde ovo je vidljivo samo vama.</p>
      </div>

      <form className='mt-[30px]'>

        <div className='flex flex-col items-center'>

          <div className='flex mb-[30px] gap-5'>
            <img src={testImg} className='w-[30%] rounded-2xl' />
            <div>
              <h3 className='text-[16px]'>Profilna Slika</h3>
              <span className='text-[10px] text-spanGray'>Profilna slika maksimalna veličina do 10MB</span>
            </div>
          </div>

          <div className='flex flex-col items-start gap-5 w-[60%] lg:w-[80%] mx-auto mx-0'>
            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Ime</label>
              <input type="text" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Ime...'/>
            </div>

            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Prezime</label>
              <input type="text" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Prezime...'/>
            </div>

            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Email</label>
              <input type="email" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Email...'/>
            </div>

            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Pozicija</label>
              <input type="text" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Pozicija...'/>
            </div>

          </div>
          
          <button className='mt-[30px] border border-1 border-main px-10 py-2 rounded-xl text-main hover:bg-main hover:text-[#fff]'>Sačuvaj</button>
        </div>

      </form>
    </div>
  )
}

export default DashboardSettingsProfile;