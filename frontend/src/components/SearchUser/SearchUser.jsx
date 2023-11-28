import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { TfiExport } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";

function SearchUser() {
  return (
    <div className='w-[100%] bg-[#fff] rounded-lg shadowBorder'>
      <div className='flex items-center justify-between text-[13px] p-4'>
        <div className='flex items-center gap-3'>
            <h3>Lista Korisnika</h3>
            <button className='flex items-center gap-2 border border-main px-3 py-1 rounded-md bg-main text-[#fff]'><FaPlus /> Dodaj Novog Korisnika</button>

            <span className='text-[13px]'>Show</span>
            <select className='border border-1 rounded-full text-center bg-[#fff] px-3 py-1'>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
        </div>

        <div className='flex gap-3'>
          <div className='relative flex'>
            <input type="text" className='border border-1 rounded-full px-2' placeholder='Ime...' />
            <IoSearch className='absolute top-[6px] right-3'/>
          </div>
          <button className='flex items-center gap-2 border border-main px-3 py-1 rounded-md bg-main text-[#fff]'><TfiExport /> Izvezi</button>
        </div>
      </div>
    </div>
  )
}

export default SearchUser;