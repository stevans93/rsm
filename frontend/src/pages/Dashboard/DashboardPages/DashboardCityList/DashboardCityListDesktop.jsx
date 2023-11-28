import React from 'react';
import SearchCity from '../../../../components/SearchCity/SearchCity';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

function DashboardCityListDesktop() {
  return (
    <div className='desktop'>
        <div className='table-responsive'>
            <div className='flex justify-between items-center mb-[50px]'>
                <h2 className='text-[40px] font-bold'>Lista Opština</h2>
                <SearchCity />
            </div>
            <div>
                <div>
                    <table className='text-start shadowBorder w-[100%] text-[14px]'>
                        <thead>
                            <tr className='text-left bg-[#F0F5F7] p-[50px] border-b-2 border-main' >
                                <th className='px-6 py-6'>Region</th>
                                <th className='px-6 py-6'>Opština</th>
                                <th className='px-6 py-6'>Predsednik</th>
                                <th className='px-6 py-6'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-[#fff] border-b-2 border-main p-[50px]'>
                                <td className='px-6 py-6'>Šumadijski Okrug</td>
                                <td className='px-6 py-6'>Lapovo</td>
                                <td className='px-6 py-6'>Boban Mikičić</td>
                                <td className='text-main px-6 py-6'><BsThreeDotsVertical /></td>
                            </tr>
                            <tr className='bg-[#fff] border-b-2 border-main'>
                                <td className='px-6 py-6'>Šumadijski Okrug</td>
                                <td className='px-6 py-6'>Lapovo</td>
                                <td className='px-6 py-6'>Boban Mikičić</td>
                                <td className='text-main px-6 py-6'><BsThreeDotsVertical /></td>
                            </tr>
                            <tr className='bg-[#fff] border-b-2 border-main'>
                                <td className='px-6 py-6'>Šumadijski Okrug</td>
                                <td className='px-6 py-6'>Lapovo</td>
                                <td className='px-6 py-6'>Boban Mikičić</td>
                                <td className='text-main px-6 py-6'><BsThreeDotsVertical /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='align-middle'>
                                <td className='px-6 py-6'>Rows per page: 10</td>
                                <td className='px-6 py-6'></td>
                                <td className='px-6 py-6'>1-10 of 198</td>
                                <td className='flex it px-6 py-6 align-middle'>
                                    <IoIosArrowBack className='text-[22px]'/>
                                    <IoIosArrowForward className='text-[22px]'/>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardCityListDesktop;