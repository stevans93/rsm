import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/Logo.png';
import mapa from '../../assets/map icon.png';
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import {BounceLoader} from "react-spinners";

function Login() {
    const [isVisible, setSsVisible] = useState(true);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);


    const handleVisibility = () => {
        setSsVisible(!isVisible);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().required('Polje je obavezno...'),
            password: Yup.string().required('Polje je obavezno...'),
            rememberMe: Yup.string().required('Polje je obavezno...'),
        }),

        onSubmit: (values) => {
            console.log(values);

            formik.resetForm();
        }
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];

    return (

        <>
            {isLoading ? (
                <div className="w-full h-[100vh]">
                    <BounceLoader color="#A3C8DB" className="spin" />
                </div>
            ) : (
                <div className="flex flex-col md:flex-row justify-center items-center h-[100vh] gap-5 md:gap-[100px] xl:gap-[200px] iPSE">
                    <div>
                        <img src={mapa} alt="" className="w-[400px] logo" />
                    </div>

                    <div className="px-[80px] pt-[50px] pb-[100px] rounded-xl shadowBorder iPSep">
                        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                            <div className="flex justify-center">
                                <img src={logo} alt="" className="w-[250px] map" />
                            </div>

                            <div className="flex flex-col relative">
                                <label>E-mail Adresa: <span className="text-red italic text-[14px]">{showError('email')}</span></label>
                                <input value={formik.values.email} onChange={formik.handleChange} type="email" name="email" placeholder="Unesite vašu e-mail adresu..." className="border border-2 border-[#0000000D] shadow-lg rounded py-2 pl-[40px]" />
                                <MdEmail className="absolute top-[45%] left-4 translate-y-[50%] text-main" />
                            </div>

                            <div className="flex flex-col relative">
                                <label>Lozinka <span className="text-red italic text-[14px]">{showError('password')}</span></label>
                                <input value={formik.values.password} onChange={formik.handleChange} type={isVisible ? "password" : "text" } name="password" placeholder="Unesite vašu lozinku..." className="border border-2 border-[#0000000D] shadow-lg rounded py-2 pl-[40px]" />
                                <IoIosLock className="absolute top-[45%] left-4 translate-y-[50%] text-main"  />
                                {isVisible ? (
                                    <MdOutlineVisibility onClick={handleVisibility} className="absolute top-[45%] right-4 translate-y-[50%] text-main" />
                                ) : (
                                    <MdOutlineVisibilityOff onClick={handleVisibility}  className="absolute top-[45%] right-4 translate-y-[50%] text-main" />
                                )}
                            </div>

                            <div>
                                <input value={formik.values.checkbox} onChange={formik.handleChange} type="checkbox" name="rememberMe"/>
                                <span> Zapamti me! <span className="text-red italic text-[14px]">{showError('rememberMe')}</span></span>
                            </div>


                            <button type="submit" className="py-2 rounded-full bg-primary text-[#fff]">Prijavite se</button>
                            <div className="text-center">
                                <Link><span onClick={() => window.location.href = "/map"}>Zaboravili ste lozinku?</span></Link>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>

    );
}

export default Login;