import React, { useEffect, useRef, useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import logo from '../../../assets/Logo.png';
import {TfiMenu} from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import {FaCity, FaUserCircle} from "react-icons/fa";

function DashboardSidebar() {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef(null);

    const handleDropDown = () => {
        setDropDown(!dropDown);
    }

    useEffect(() => {
        if(dropDownRef.current) {
            dropDownRef.current.style.maxHeight = dropDown ? `${dropDownRef.current.scrollHeight}px` : 0;
        }
    }, [dropDown]);

    return (
        <div className="bg-[#F0F0F0] md:bg-[#fff] md:w-[50%] lg:w[30%] xl:w-[30%] 2xl:w-[20%]">
            <div className="h-[100svh] px-5 py-10 hidden md:flex md:flex-col items-center md:justify-between">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-[60px]">
                        <span className="flex items-center bg-[#F0F0F0] hover:bg-[#A8A8A8] rounded-full px-5 py-1 text-center"><IoIosArrowBack /> <Link to='/map'>Mapa</Link></span>
                        <img src={logo} alt="logo" className="w-[70px]" />
                    </div>
                    <div>
                        <p className="text-main text-center text-2xl font-bold">KONTROLNA TABLA</p>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <NavLink to="/dashboard/" className="flex justify-center items-center text-main gap-3 text-[23px] border border-2 rounded-full w-[100%] py-2 border-main text-main hover:bg-main hover:text-[#fff]"><IoSettingsOutline /> Podešavanja</NavLink>
                        <NavLink to="/dashboard/userList" className="flex justify-center items-center text-main gap-3 text-[23px] border border-2 rounded-full w-[100%] py-2 border-main text-main hover:bg-main hover:text-[#fff]"><PiUsersThree /> Lista Korisnika</NavLink>
                        <NavLink to="/dashboard/cityList" className="flex justify-center items-center text-main gap-3 text-[23px] border border-2 rounded-full w-[100%] py-2 border-main text-main hover:bg-main hover:text-[#fff]"><FaCity /> Lista Opština</NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-3">
                        <FaUserCircle className="text-main text-[50px] mx-auto" />
                        <div className="flex flex-col">
                            <p className="text-main font-bold">Stevan Stevanovic</p>
                            <span className="text-[12px] text-grey">Admin</span>
                        </div>
                    </div>
                    <div className='flex text-center'>
                        <NavLink to="/login" className="border border-2 w-[100%] rounded-2xl py-[2px] text-red hover:bg-red hover:text-[#fff]">Odjavi se</NavLink>
                    </div>
                </div>
            </div>

            <div onClick={handleDropDown} className="md:hidden flex flex-col text-center rounded-2xl shadow bg-[#fff] px-[20px] py-[10px] mx-[20px] mt-[20px] gap-5">
                <div className="flex justify-center md:hidden mt-4">
                    <TfiMenu className="text-3xl cursor-pointer"/>
                </div>
                <div ref={dropDownRef} className="flex flex-col gap-3 overflow-hidden transition-max-h duration-300 ease-in md:hidden">
                    <span className="flex justify-center items-center bg-[#F0F0F0] hover:bg-[#A8A8A8] rounded-full px-5 py-[5px] text-center"><IoIosArrowBack /> <Link to='/map'>Mapa</Link></span>
                    <NavLink to="/dashboard/" className="border border-2 rounded-2xl px-[30px] py-[5px] border-main text-main hover:bg-main hover:text-[#fff]">Podešavanja</NavLink>
                    <NavLink to="/dashboard/userList" className="border border-2 rounded-2xl px-[30px] py-[5px] border-main text-main hover:bg-main hover:text-[#fff]">Lista Korisnika</NavLink>
                    <NavLink to="/dashboard/cityList" className="border border-2 rounded-2xl px-[30px] py-[5px] border-main text-main hover:bg-main hover:text-[#fff]">Lista Opština</NavLink>
                    <NavLink to="/login" className="border border-2 rounded-2xl px-[30px] py-[5px] border-red text-red hover:bg-red hover:text-[#fff]">Odjavi se</NavLink>
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebar;