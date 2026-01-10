import React from "react";
import gallery1 from "@/public/gallery-1.jpg";
import gallery2 from "@/public/gallery-2.jpg";
import gallery3 from "@/public/gallery-3.jpg";
import gallery4 from "@/public/gallery-4.jpg";
import gallery5 from "@/public/gallery-5.jpg";
import gallery6 from "@/public/gallery-6.jpg";
import Image from "next/image";

const Gallery = () => {
    return (
        <section className = "py-20">
            <h2 className = "text-center pb-5 rethinkSans text-2xl font-bold">
                Síguenos en <span className = "underline text-(--primary)">Instagram</span>
            </h2>
            <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className = "gallery-item">
                    <Image src = {gallery1} alt = "gallery-1" />
                </div>
                <div className = "gallery-item">
                    <Image src = {gallery2} alt = "gallery-2" />
                </div>
                <div className = "gallery-item">
                    <Image src = {gallery3} alt = "gallery-3" />
                </div>
                <div className = "gallery-item">
                    <Image src = {gallery4} alt = "gallery-4" />
                </div>
                <div className = "gallery-item">
                    <Image src = {gallery5} alt = "gallery-5" />
                </div>
                <div className = "gallery-item">
                    <Image src = {gallery6} alt = "gallery-6" />
                </div>

            </div>
        </section>
    )
}

export default Gallery;