import React from "react";
import starShape from "@/public/star-shape.png";
import Image from "next/image";

const MarqueeSlider = () => {
    return (
        <div className = "marquee bg-white py-6 overflow-hidden">
            <div className = "flex items-center gap-10 marquee-slide">
                <MarqueeItem text = "Hogares construidos para la vida" />
                <MarqueeItem text = "Comodidad diseñada para vivir" />
                <MarqueeItem text = "Espacios que crecen contigo" />
                <MarqueeItem text = "Diseñados para una comodidad duradera" />
            </div>
        </div>
    )
}

export default MarqueeSlider;

const MarqueeItem = ({ text }: { text: string }) => {
    return (
        <div className = "flex items-center gap-8 whitespace-nowrap">
            <h2 className = "marquee-text text-5xl font-bold">
                {text}
            </h2>
            <Image src = {starShape} alt = "star-shape" width = {40} height = {40} />
        </div>
    )
}