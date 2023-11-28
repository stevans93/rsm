import React from 'react';

function DashboardSettingsPassword() {
  return (
    <div className='bg-[#fff] p-5 rounded-3xl shadowBorder w-[310px] lg:w-[500px] mx-auto dashboard'>

      <div className='w-[50%]'>
        <h2 className='text-[22px] text-main'>Lozinka</h2>
        <p className='text-[10px] text-spanGray'>Podešavanja vaseg profila možete uraditi ovde ovo je vidljivo samo vama.</p>
      </div>

      <form className='flex flex-col items-center mt-[30px]'>

          <div className='flex flex-col items-start gap-5 w-[100%]'>
            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Stara Lozinka</label>
              <input type="password" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Stara Lozinka...'/>
            </div>

            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Nova Lozinka</label>
              <input type="password" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Nova Lozinka...'/>
            </div>

            <div className='flex flex-col lg:flex-row items-center w-[100%] justify-between'>
              <label>Ponovi Novu Lozinku</label>
              <input type="password" className='border border-1 border-main rounded-xl px-3 py-2' placeholder='Ponovi Novu Lozinku...'/>
            </div>

          </div>

          <button className='mt-[30px] border border-1 border-main px-5 py-2 rounded-xl text-main hover:bg-main hover:text-[#fff]'>Promeni Lozinku</button>

      </form>
    </div>
  )
}

export default DashboardSettingsPassword;