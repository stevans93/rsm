import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import mapa from '../../assets/map icon.png';

function Login() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-[100vh] gap-5 md:gap-10">
            <div>
                <img src={mapa} alt="" className="w-[200px]" />
            </div>

            <div className="border border-1 px-[50px] pt-[30px] pb-[50px] rounded-xl">
                <form className="flex flex-col gap-3">
                    <div className="flex justify-center">
                        <img src={logo} alt="" className="w-[150px]" />
                    </div>

                    <div className="flex flex-col">
                        <label>E-mail Adresa</label>
                        <input type="email" name="email" placeholder="Unesite vašu e-mail adresu..." className="border py-2 px-1" />
                    </div>

                    <div className="flex flex-col">
                        <label>Lozinka</label>
                        <input type="password" name="password" placeholder="Unesite vašu lozinku..." className="border py-2 px-1" />
                    </div>

                    <div className="flex gap-3">
                        <div><input type="checkbox" /> Zapamti me</div>
                        <div>
                            <Link>Zaboravili ste lozinku?</Link>
                        </div>
                    </div>

                    <button className="py-2 rounded-full bg-primary">Prijavite se</button>
                </form>
            </div>
        </div>
    );
}

export default Login;