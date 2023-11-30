import React, { useEffect } from 'react';
import SearchCity from '../../../../components/SearchCity/SearchCity';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import MunicipalityService from '../../../../services/municipalityService';
import { storeAllMunicipalities } from '../../../../store/municipalitySlice';
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';

function DashboardCityListDesktop() {
    const dispatch = useDispatch();
    const { municipalities } = useSelector((state) => state.municipalityStore)

    useEffect(() => {
        MunicipalityService.allMunicipalities()
            .then((res) => {
                dispatch(storeAllMunicipalities(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }, [dispatch])
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
                                <th className='px-6 py-6'>Grad</th>
                                <th className='px-6 py-6'>Predsednik</th>
                                <th className='px-6 py-6'>Slika</th>
                                <th className='px-6 py-6'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {municipalities.map((municipality) => {
                                console.log(municipality);
                                return (
                            <tr key={municipality._id} className='bg-[#fff] border-b-2 border-main p-[50px]'>
                                <td className='px-6 py-6'>{municipality.district}</td>
                                <td className='px-6 py-6'>{municipality.municipality}</td>
                                <td className='px-6 py-6'>{municipality.city}</td>
                                <td className='px-6 py-6'>{municipality.fullNameOfThePresident}</td>
                                <td className='px-6 py-6'>
                                    {municipality.pictureOfThePresident ? (
                                        <img src={`${municipality.pictureOfThePresident}`} alt={municipality.fullNameOfThePresident} />
                                        ) : (
                                        <FaRegUserCircle size={32} />
                                    )}
                                </td>
                                <td className='text-main px-6 py-6'><BsThreeDotsVertical /></td>
                            </tr>
                                )
                            })}
                            
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