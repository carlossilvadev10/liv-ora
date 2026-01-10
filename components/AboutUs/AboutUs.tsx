import React from "react";
import about1 from "@/public/About-1.jpg";
import about2 from "@/public/About-2.jpg";
import about3 from "@/public/About-3.jpg";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section className = "px-[8%] lg:px-[10%] py-16" id = "about">
            <div className = "flex flex-col items-center justify-center text-center mb-16">
                <div className = "w-full lg:w-2/3 text-center">
                    <h3 className = "text-lg rethinkSans font-semibold uppercase text-(--text-light)">
                        Donde el diseño cobra sentido
                    </h3>
                    <h2 className = "text-5xl md:text-7xl rethinkSans font-semibold">
                        Espacios que se sienten, no solo se ven
                    </h2>
                </div>
            </div>
            <div className = "about-wrap">
                <div className = "flex flex-col lg:flex-row items-center justify-between gap-10 w-full about-content" data-step = "1">
                    <div className = "w-full lg:w-1/2">
                        <div className = "w-full lg:w-[90%]">
                            <Image src = {about1} alt = "about-1" className = "w-full h-full rounded-md object-cover" />
                        </div>
                    </div>
                    <div className = "flex flex-col justify-end w-full lg:w-1/2 lg:pl-14">
                        <h2 className = "text-5xl rethinkSans font-semibold">
                            Transformando espacios con visión creativa
                        </h2>
                        <p className = "text-(--text-light) mt-5">
                            Creemos que los espacios influyen en cómo vivimos, sentimos y nos relacionamos, por eso, diseñamos ambientes que conectan con las personas,
                            cuentan historias y acompañan cada momento de la vida.
                        </p>
                    </div>
                </div>
                <div className = "flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full about-content mt-10" data-step = "2">
                    <div className = "flex flex-col w-full lg:w-1/2 lg:pr-14">
                        <h2 className = "text-5xl rethinkSans font-semibold">
                            Cada espacio, una solución pensada
                        </h2>
                        <p className = "text-(--text-light) mt-5">
                            Traducimos ideas y necesidades en soluciones de diseño precisas, cuidando cada elemento para lograr interiores funcionales,
                            armónicos y alineados con el estilo de vida de quienes los habitan.
                        </p>
                    </div>
                    <div className = "flex justify-end w-full lg:w-1/2">
                        <div className = "w-full lg:w-[90%]">
                            <Image src = {about2} alt = "about-2" className = "w-full h-full rounded-md object-cover" />
                        </div>
                    </div>
                </div>
                <div className = "flex flex-col lg:flex-row items-center justify-between gap-10 w-full about-content mt-10" data-step = "3">
                    <div className = "w-full lg:w-1/2">
                        <div className = "w-full lg:w-[90%]">
                            <Image src = {about3} alt = "about-3" className = "w-full h-full rounded-md object-cover" />
                        </div>
                    </div>
                    <div className = "flex flex-col justify-end w-full lg:w-1/2 lg:pl-14">
                        <h2 className = "text-5xl rethinkSans font-semibold">
                            Inventando nuevas formas de dar forma al futuro
                        </h2>
                        <p className = "text-(--text-light) mt-5">
                            Nuestro proceso combina creatividad, análisis y sensibilidad estética para dar forma a espacios contemporáneos, pensados para evolucionar
                            junto a quienes los habitan y al entorno que los rodea.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;