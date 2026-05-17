import React, { useEffect, useState } from "react";
import LogoParoki from '../assets/ParokiLogo.png';

const NavbarComponents = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setIsLoggedIn(true)
        } else{
            setIsLoggedIn(false)
        }
    }, [])

    return (
        <>
            {/* Navbar */}
            <div className="flex justify-between items-center font-poppins px-6 py-6 pt-6 bg-white z-[30] relative">
                {/* logo */}
                <div className="flex items-center gap-2 md:gap-4">
                    <img src={LogoParoki} alt="Logo Paroki" className="w-[40px] md:w-[80px]" />
                    <h2 className="text-[12px] font-semibold md:text-[16px]">
                        Gereja Orthodox Russia <span className="block">St Thomas Jakarta</span>
                    </h2>
                </div>

                {/* tombol hamburger */}
                <div
                    onClick={toggleMenu}
                    className="md:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#E4E4E4] rounded-full cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>

                {/* menu desktop */}
                <ul className="hidden md:flex justify-center items-center gap-8 font-semibold text-[20px]">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/liturgy">Liturgy</a></li>
                    <li><a href="/event">Event</a></li>

                    <li><a href="/gallery">Gallery</a></li>
                </ul>

                {!isLoggedIn && (
                    <div className="hidden md:block">
                    <button className="bg-[#BFA142] px-6 py-4 rounded-full font-semibold text-[16px] text-white" id="btn-signup"><a href="/signup">Sign up</a></button>
                </div>
                )}

                 {isLoggedIn && (
                    <div className="hidden md:block">
                    <button className="bg-[#BFA142] px-6 py-4 rounded-full font-semibold text-[16px] text-white"><a href="/profile">Profile</a></button>
                </div>
                )}
            </div>

            {/* OVERLAY HITAM */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[39]"
                    onClick={closeMenu}
                />
            )}

            {/* MOBILE NAVBAR */}
            <div
                className={`fixed top-0 right-0 h-[480px] w-[250px] bg-[#BFA142] z-[40] px-6 py-6 transition-transform duration-300 ease-in-out rounded-bl-[30px] ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-end">
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center">
                    <ul className="flex flex-col justify-center items-start gap-6 text-white text-[18px] font-semibold mt-10">
                        <li><a href="/" onClick={closeMenu}>Home</a></li>
                        <li><a href="/about" onClick={closeMenu}>About</a></li>
                        <li><a href="/liturgy" onClick={closeMenu}>Liturgy</a></li>
                        <li><a href="/event" onClick={closeMenu}>Event</a></li>

                        <li><a href="/gallery" onClick={closeMenu}>Gallery</a></li>
                        {!isLoggedIn && (
                            <li><a href="/signup" onClick={closeMenu}>Sign up</a></li>
                        )}

                        {isLoggedIn &&(
                            <li><a href="/profile" onClick={closeMenu}>Profile</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavbarComponents;
