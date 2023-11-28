import React from 'react';
import SearchUser from '../../../../components/SearchUser/SearchUser';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

function DashboardUserListDesktop() {
  return (
    <div className='desktop'>
        <div>
            <div className='flex flex-col'>
                <h2 className='text-[40px] font-bold mb-[50px]'>Lista Korisnika</h2>
            </div>
            <div>
                <SearchUser />
            </div>

            <div>
                <div className='mt-[30px] w-[100%] rounded-xl !Sbg-[#fff] p-2 shadowBorder'>
                    <table className=' text-start w-[100%] text-[14px]'>
                        <thead>
                            <tr className='text-left p-[50px]'>
                                <th className='px-6 py-3 border-r border-b border-[#00000029]'>SI</th>
                                <th className='px-6 py-3 border-r border-b border-[#00000029]'>Ime</th>
                                <th className='px-6 py-3 border-r border-b border-[#00000029]'>Prezime</th>
                                <th className='px-6 py-3 border-r border-b border-[#00000029]'>Email</th>
                                <th className='px-6 py-3 border-r border-b border-[#00000029]'>Broj Telefona</th>
                                <th className='px-6 py-3 border-r border-b border-[#00000029]'>Pozicija</th>
                                <th className='px-6 py-3 border-b border-[#00000029]'>Akcija</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>1</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>Stevan</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>Stevanovic</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>stevans93@gmail.com</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>011/234-422</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>Korisnik</td>
                                <td className='px-6 py-3 border-b border-[#00000029]'>Akcija</td>
                            </tr>
                            <tr className=''>
                              <td className='px-6 py-3 border-r border-b border-[#00000029]'>2</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>Stevan</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>Stevanovic</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>stevans93@gmail.com</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>011/234-422</td>
                                <td className='px-6 py-3 border-r border-b border-[#00000029]'>Korisnik</td>
                                <td className='px-6 py-3 border-b border-[#00000029]'>Akcija</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardUserListDesktop;