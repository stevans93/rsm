import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import React, {useEffect, useState} from 'react'

import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'
import MunicipalityService from '../../../../services/municipalityService'
import SearchCity from '../../../../components/SearchCity/SearchCity'
import {storeAllMunicipalities} from '../../../../store/municipalitySlice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

function DashboardCityListDesktop({municipalities}) {
  const dispatch = useDispatch()
  const {totalPages} = useSelector((state) => state.municipalityStore)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 3

  useEffect(() => {
    MunicipalityService.allMunicipalities(currentPage, perPage)
      .then((res) => {
        dispatch(storeAllMunicipalities(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [dispatch, currentPage, perPage])

  return (
    <div className="desktop">
      <div className="table-responsive">
        <div className="flex justify-between items-center mb-[50px]">
          <h2 className="text-[40px] font-bold">Lista Opština</h2>
          <SearchCity />
        </div>
        <div>
          <div>
            <table className="text-start shadowBorder w-[100%] text-[14px]">
              <thead>
                <tr className="text-left bg-[#F0F5F7] p-[50px] border-b-2 border-main">
                  <th className="px-6 py-6">Region</th>
                  <th className="px-6 py-6">Opština</th>
                  <th className="px-6 py-6">Grad</th>
                  <th className="px-6 py-6">Predsednik</th>
                  <th className="px-6 py-6">Slika</th>
                  <th className="px-6 py-6">Akcija</th>
                </tr>
              </thead>
              <tbody>
                {municipalities.map((municipality) => {
                  return (
                    <tr key={municipality._id} className="bg-[#fff] border-b-2 border-main p-[50px]">
                      <td className="px-6 py-3">{municipality.district}</td>
                      <td className="px-6 py-3">{municipality.municipality}</td>
                      <td className="px-6 py-3">{municipality.city}</td>
                      <td className="px-6 py-3">{municipality.fullNameOfThePresident}</td>
                      <td className="px-6 py-3">
                        {municipality.image ? (
                          <img
                            src={`${import.meta.env.VITE_IMAGE_URL}${municipality.image}`}
                            alt={municipality.fullNameOfThePresident}
                            className="w-[40px] h-[40px]"
                          />
                        ) : (
                          <FaRegUserCircle size={32} />
                        )}
                      </td>
                      <td className="text-main px-6 py-3">
                        <BsThreeDotsVertical />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className="align-middle">
                  <td className="px-6 py-6">Rows per page: {perPage}</td>
                  <td className="px-6 py-6 text-center" colSpan="4">
                    {municipalities.length === 0 ? `0 of 0` : `${currentPage} of ${totalPages}`}
                  </td>
                  <td className="flex it px-6 py-6 align-middle">
                    <IoIosArrowBack
                      className="text-[22px]"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    />
                    <IoIosArrowForward className="text-[22px]" onClick={() => setCurrentPage((prev) => prev + 1)} />
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

export default DashboardCityListDesktop
