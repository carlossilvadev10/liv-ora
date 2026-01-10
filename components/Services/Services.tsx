import React from "react";
import Image from "next/image";
import { services } from "@/constant/data";

const Services = () => {
    return (
        <>
            <div className = "px-[8%] lg:px-[10%] py-16" id = "services">
                <div className = "text-center">
                    <h3 className = "text-(--text-light) text-lg uppercase rethinkSans">
                        Así hacemos la magia
                    </h3>
                    <h2 className = "text-5xl lg:text-8xl text-white rethinkSans font-bold">
                        Del concepto a la realidad perfecta
                    </h2>
                </div>
                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-15 gap-8">
                    {
                        services.map((service) => (
                            <div key = {service.id} className = "border border-gray-200/20 rounded-md text-center p-6 group overflow-hidden cursor-pointer">
                                <h3 className = "text-2xl rethinkSans font-semibold">
                                    {service.title}
                                </h3>
                                <p className = "text-gray-500 dmSans mt-1 mb-5">
                                    {service.description}
                                </p>
                                <div className = "overflow-hidden rounded mb-5">
                                    <Image src = {service.img} alt = {"service" + service.id} className = "mx-auto rounded transition-transform duration-500 ease-out group-hover:scale-110" />
                                </div>
                                <button className = "flex items-center justify-center w-full gap-2 border border-gray-200/20 hover:border-gray-200/10 py-3 transition-all duration-300 rethinkSans font-medium text-lg cursor-pointer">
                                    Ver más detalles <i className = "bi bi-arrow-right"></i>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Services;