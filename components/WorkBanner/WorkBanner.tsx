import React from "react";
import Image from "next/image";
import partner1 from "@/public/partner-1.webp";
import partner2 from "@/public/partner-2.webp";
import partner3 from "@/public/partner-3.webp";
import partner4 from "@/public/partner-4.webp";
import partner5 from "@/public/partner-5.webp";
import partner6 from "@/public/partner-6.webp";

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
                <div className = "flex items-center justify-center border-r border-b border-l border-gray-500 p-10">
                    <Image src = {partner1} alt = "partner-1" className = "opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                </div>
                <div className = "flex items-center justify-center border-r border-b border-gray-500 p-10">
                    <Image src = {partner2} alt = "partner-2" className = "opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                </div>
                <div className = "flex items-center justify-center border-r border-b border-gray-500 p-10">
                    <Image src = {partner3} alt = "partner-3" className = "opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                </div>
                <div className = "flex items-center justify-center border-r border-b border-gray-500 p-10">
                    <Image src = {partner4} alt = "partner-4" className = "opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                </div>
                <div className = "flex items-center justify-center border-r border-b border-gray-500 p-10">
                    <Image src = {partner5} alt = "partner-5" className = "opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                </div>
                <div className = "flex items-center justify-center border-r border-b border-gray-500 p-10">
                    <Image src = {partner6} alt = "partner-6" className = "opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default WorkBanner;