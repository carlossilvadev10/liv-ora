"use client";

import React from "react";
import CountUp from "react-countup";

const Hero = () => {
    return (
        <section className = "px-[8%] lg:px-[5%] hero-header relative flex items-center" id = "home">
            <div className = "w-full">
                <div className = "hero-content w-full lg:w-1/2">
                    <h1 className = "text-3xl sm:text-5xl lg:text-7xl font-semibold">
                        Espacios que inspiran, diseños que perduran
                    </h1>
                    <p className = "my-3 sm:my-5 w-full text-sm sm:text-base">
                        Transformamos ambientes comunes en espacios extraordinarios. Diseño de interiores personalizado que combina elegancia, funcionalidad y tu estilo único.
                    </p>
                    <button className = "rethinkSans font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl bg-(--primary) hover:bg-white mt-3 sm:mt-4 text-white hover:text-black rounded-full transition-all duration-300 cursor-pointer">
                        Descubre más
                    </button>
                </div>
                <div className = "flex flex-col sm:absolute right-0 bottom-0 p-6 sm:p-10 mt-8 sm:mt-10 md:mt-0 bg-black lg:max-w-2xl">
                    <h1 className = "text-3xl sm:text-5xl mb-3 sm:mb-5 font-semibold">
                        Sobre nuestro estudio
                    </h1>
                    <p className = "w-full text-(--text-light) text-sm sm:text-base">
                        Nos impulsa la excelencia en cada proyecto, creando interiores atemporales que reflejan la esencia de quienes los habitan.
                    </p>
                    <div className = "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-5">
                        <div className = "flex flex-col">
                            <h2 className = "text-2xl sm:text-4xl rethinkSans font-bold text-(--primary)">
                                <CountUp start = {0} end = {150} duration = {3} />+
                            </h2>
                            <p className = "text-(--text-light) text-xs sm:text-base">
                                Proyectos completados
                            </p>
                        </div>
                        <div className = "flex flex-col">
                            <h2 className = "text-2xl sm:text-4xl rethinkSans font-bold text-(--primary)">
                                <CountUp start = {0} end = {100} duration = {3} />K+
                            </h2>
                            <p className = "text-(--text-light) text-xs sm:text-base">
                                Clientes satisfechos
                            </p>
                        </div>
                        <div className = "flex flex-col">
                            <h2 className = "text-2xl sm:text-4xl rethinkSans font-bold text-(--primary)">
                                <CountUp start = {0} end = {10} duration = {3} />+
                            </h2>
                            <p className = "text-(--text-light) text-xs sm:text-base">
                                Años de experiencia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;