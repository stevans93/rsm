import {RxCross1} from 'react-icons/rx'
import img from '../../assets/Dragan_Markovic_Palma.jpg'

function InfoAboutTheCity({closeModal, cityInfo}) {
  return (
    <div>
      <div className="fixed inset-0 bg-secondary opacity-50 z-50"></div>
      <div className="bg-[#fff] w-[980px] h-[380px] rounded-2xl shadow p-[30px] relative mx-auto z-50 ">
        <div className="flex flex-col h-[100%] justify-between">
          <div className="flex ">
            <div className="flex flex-col gap-1">
              <h2 className="text-main text-[35px] font-bold">{cityInfo?.municipality}</h2>
              <p className="text-[12px] text-spanGray">Okrug: {cityInfo?.district}</p>
            </div>
            <div className="absolute top-5 right-5">
              <div className="border border-2 p-1 rounded-2xl text-spanGray hover:text-main" onClick={closeModal}>
                <RxCross1 />
              </div>
            </div>
          </div>

          <div className="flex gap-10 pt-6">
            <div>
              <img
                src={import.meta.env.VITE_IMAGE_URL + cityInfo.image}
                alt="img"
                className="w-[140px] h-[140px] rounded-2xl shadow"
              />
            </div>

            <div className="flex flex-col gap-3 mr-14">
              <p className="text-[14px]">
                Predsednik: <span className="text-spanGray">{cityInfo?.fullNameOfThePresident}</span>{' '}
              </p>
              <p className="text-[14px]">
                Datum Rođenja: <span className="text-spanGray">{cityInfo?.dateOfBirth}</span>{' '}
              </p>
              <p className="text-[14px]">
                Email: <span className="text-spanGray">{cityInfo?.email}</span>{' '}
              </p>
              <p className="text-[14px]">
                Telefon: <span className="text-spanGray">{cityInfo?.phone}</span>{' '}
              </p>
              <p className="text-[14px]">
                Ukupan broj Gradskih/opstinskih funkcionera:{' '}
                <span className="text-spanGray">{cityInfo?.fullNumberOfOfficials}</span>{' '}
              </p>
              <p className="text-[14px]">
                Ukupan broj predstavki gradjana:{' '}
                <span className="text-spanGray">{cityInfo?.fullNumberOfApplications}</span>{' '}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-center">
              <a
                target="_blank"
                href={`${import.meta.env.VITE_IMAGE_URL}${cityInfo?.numberOfOfficials}`}
                className=" border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]"
                rel="noreferrer">
                Broj Gradskih/opstinskih funkcionera
              </a>
              <a
                target="_blank"
                href={`${import.meta.env.VITE_IMAGE_URL}${cityInfo?.numberOfOfficials}`}
                rel="noreferrer"
                className=" border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]">
                Broj predstavki gradjana
              </a>
              <a
                target="_blank"
                href={cityInfo.website}
                className=" border-2 border-main px-[30px] py-[10px] text-main text-[14px] rounded-2xl hover:bg-main hover:border-main hover:text-[#fff]"
                rel="noreferrer">
                Sajt Opštine
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoAboutTheCity
