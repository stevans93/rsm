import React, { useState } from 'react';
import { TbUserSquareRounded } from "react-icons/tb";
import { MdArrowForward } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { PiUsersThree } from "react-icons/pi";
import DashboardSettingsProfile from '../../../../components/DashboardComponents/DashboardSettingsComponents/DashboardSettingsProfile/DashboardSettingsProfile';
import { NavLink } from 'react-router-dom';
import DashboardSettingsPassword from '../../../../components/DashboardComponents/DashboardSettingsComponents/DashboardSettingsPassword/DashboardSettingsPassword';
import DashboardSettingsUser from '../../../../components/DashboardComponents/DashboardSettingsComponents/DashboardSettingsUser/DashboardSettingsUser';

function DashboardSettingsDesktop() {
    const user = JSON.parse(localStorage.getItem('rsm_user'));
    const [showProfile, setShowProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleProfileClick = () => {
        setShowProfile(true);
        setShowPassword(false);
        setShowUser(false);
    }

    const handlePasswordClick = () => {
        setShowPassword(true);
        setShowProfile(false);
        setShowUser(false);
    }

    const handleUserClick = () => {
        setShowUser(true);
        setShowPassword(false);
        setShowProfile(false);
    }

    const handleItemClick = (item) => {
        setActiveItem(item);
      }

  return (
    <div className='desktop'>
        <h2 className='text-[40px] font-bold mb-[50px]'>Podešavanja</h2>
        <div className='flex gap-10'>
            <div className='flex flex-col gap-10'>
                <div className='border border-1 border-main w-[350px] items-center p-4 rounded-2xl bg-main shadowBorder'>
                    <p className='text-[#fff] text-[22px]'>{user.firstName && user.firstName} {user.lastName && user.lastName}</p>
                    <span className='text-[#fff] text-[16px]'>{user.title ? user.title : "Korisnik"}</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className={`flex w-[350px] justify-between border border-1 border-[#D6D9D9] items-center p-3 rounded-3xl divHover ${activeItem === 'profile' ? 'bg-main' : ''}`} onClick={() => { handleItemClick('profile'); handleProfileClick() }}>
                        <div className='flex items-center gap-5'>
                            <TbUserSquareRounded className='text-5xl text-main bg-[#fff] rounded-xl' />
                            <div className='flex flex-col'>
                                <p className={`text-[24px] ${activeItem === 'profile' ? 'text-[#fff]' : 'text-main'}`}>Profil</p>
                                <span className={`text-[12px] ${activeItem === 'profile' ? 'text-[#fff]' : 'text-spanGray'}`}>Slika, Ime, Prezime, Email, Pozicija</span>
                            </div>
                        </div>
                        <MdArrowForward className={`text-3xl arrow ${activeItem === 'profile' ? 'text-[#fff]' : 'text-main'}`}/>
                    </div>
                    <div className={`flex w-[350px] justify-between border border-1 border-[#D6D9D9] items-center p-3 rounded-3xl divHover ${activeItem === 'password' ? 'bg-main' : ''}`} onClick={() => { handleItemClick('password'); handlePasswordClick() }}>
                        <div className='flex items-center gap-5'>
                            <VscKey className='text-5xl text-main bg-[#fff] rounded-xl' />
                            <div>
                                <p className={`text-[24px] ${activeItem === 'password' ? 'text-[#fff]' : 'text-main'}`} >Lozinka</p>
                                <span className={`text-[12px] ${activeItem === 'password' ? 'text-[#fff]' : 'text-spanGray'}`} >Zamena Lozinke</span>
                            </div>
                        </div>
                        <MdArrowForward className={`text-3xl arrow ${activeItem === 'password' ? 'text-[#fff]' : 'text-main'}`} />
                    </div>
                    <div className={`flex w-[350px] justify-between border border-1 border-[#D6D9D9] items-center p-3 rounded-3xl divHover ${activeItem === 'user' ? 'bg-main' : ''}`} onClick={() => { handleItemClick('user'); handleUserClick() }}>
                        <div className='flex items-center gap-5'>
                            <PiUsersThree className='text-5xl text-main bg-[#fff] rounded-xl' />
                            <div>
                                <p className={`text-[24px] ${activeItem === 'user' ? 'text-[#fff]' : 'text-main'}`} >Korisnici</p>
                                <span className={`text-[12px] ${activeItem === 'user' ? 'text-[#fff]' : 'text-spanGray'}`} >Dodavanje Korisnika Platforme</span>
                            </div>
                        </div>
                        <MdArrowForward className={`text-3xl arrow ${activeItem === 'user' ? 'text-[#fff]' : 'text-main'}`} />
                    </div>
                </div>
            </div>

            <div>
                {showProfile && <DashboardSettingsProfile />}
                {showPassword && <DashboardSettingsPassword />}
                {showUser && <DashboardSettingsUser />}
            </div>
        </div>
    </div>
  )
}

export default DashboardSettingsDesktop;