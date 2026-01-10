"use client";

import React, { useEffect, useState } from "react";
import phoneCall from "@/public/phone-call.svg";
import Link from "next/link";
import { navLinks } from "@/constant/data";
import Image from "next/image";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 10);

            // Detectar sección activa
            const scrollPosition = window.scrollY + 150;

            // Si está al inicio de la página, no activar ningún link
            if (window.scrollY < 100) {
                setActiveSection("");
                return;
            }

            const sections = navLinks.map(link => {
                const id = link.href.replace('#', '');
                return document.getElementById(id);
            }).filter(Boolean);

            for (const section of sections) {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(`#${section.id}`);
                        break;
                    }
                }
            }
        };

        handleScroll(); // Ejecutar al cargar
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className = {`w-full py-5 fixed top-0 left-0 transition-all duration-500 z-50 fixed-nav ${isFixed ? "bg-black" : "bg-transparent"}`}>
            <div className = {`w-full flex items-center justify-between px-[8%] transition-all duration-500 ${isFixed ? "lg:px-[8%]" : "lg:px-[5%]"}`}>
                {/* desktop logo */}
                <Link href = "/" className = "text-4xl xl:text-5xl font-bold audiowide text-white">
                    Liv<span className = "text-(--primary-dark)">ora</span>
                </Link>
                {/* desktop nav */}
                <nav className = "hidden xl:flex space-x-5 menu-link relative z-40">
                    {
                        navLinks.map((link, i) => (
                            <Link key = {i} href = {link.href} className = {`text-lg rethinkSans transition-all duration-300 ${activeSection === link.href ? "text-(--primary-dark) font-semibold" : "text-gray-200 hover:text-(--primary-dark)"}`}>
                                {link.label}
                            </Link>
                        ))
                    }
                </nav>
                {/* right icons */}
                <div className = "flex items-center gap-5">
                    <Link href = "tel:+51987654321" className = "hidden sm:flex gap-2 text-gray-200 group">
                        <Image src = {phoneCall} alt = "phone-call" width = {20} height = {20} className = "invert" />
                        <span className = "rethinkSans font-semibold group-hover:text-white transition-all duration-300">+51 987 654 321</span>
                    </Link>
                    <Link href = "#contact" className = "rethinkSans font-semibold px-4 py-2 bg-white hover:bg-(--primary) text-black hover:text-white rounded-full transition-all duration-300">
                        Contáctanos
                    </Link>
                </div>
                {/* mobile menu open */}
                <div className = "xl:hidden flex items-center">
                    <button className = "relative w-8 h-8 flex flex-col items-center justify-center focus:outline-none group" onClick = {() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className = {`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
                        <span className = {`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className = {`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
                    </button>
                </div>
            </div>
            {
                mobileMenuOpen && (
                    <div className = "xl:hidden bg-black border-t border-gray-500 mt-3 transition-all duration-500">
                        <div className = "flex flex-col px-[8%] py-3 space-y-1">
                            {
                                navLinks.map((link, i) => (
                                    <Link key = {i} href = {link.href} className = {`block px-2 py-2 font-medium rounded-md transition-all duration-300 ${activeSection === link.href ? "text-(--primary-dark) bg-gray-800" : "text-gray-100 hover:bg-gray-800"}`} onClick = {() => setMobileMenuOpen(!mobileMenuOpen)}>
                                        {link.label}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </header>
    )
}

export default Navbar;