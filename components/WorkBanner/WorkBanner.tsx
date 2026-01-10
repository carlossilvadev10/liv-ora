import React from "react";
import Image from "next/image";
import { partners } from "@/constant/data";

const WorkBanner = () => {
    return (
        <>
            <div className = "px-[8%] lg:px-[10%] py-20 work-banner">
                <div className = "work-banner-content flex flex-col lg:flex-row items-center justify-center h-full text-center">
                    <h2 className = "text-white rethinkSans text-5xl lg:text-8xl font-bold">
                        Transformamos tu visión en espacios extraordinarios
                    </h2>
                </div>
            </div>
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {
                    partners.map((partner) => (
                        <div key = {partner.id} className = "flex items-center justify-center border-r border-b border-l border-gray-500 p-10">
                            <Image src = {partner.image} alt = {partner.alt} className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default WorkBanner;