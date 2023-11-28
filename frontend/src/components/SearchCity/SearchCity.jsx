import React from 'react';
import { IoSearch } from "react-icons/io5";

function SearchCity() {
  return (
    <div className='relative'>
        <input type="text" className='w-[500px] pl-[45px] pr-[20px] py-3 rounded-lg shadowBorder' placeholder='Pretražite Opštinu...'/>
        <IoSearch className='absolute text-main text-3xl top-[10px] left-2'/>
    </div>
  )
}

export default SearchCity;