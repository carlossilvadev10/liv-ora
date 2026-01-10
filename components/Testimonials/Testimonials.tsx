"use client";

import React from "react";
import testbg from "@/public/testimonials-bg.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "@/constant/data";

const Testimonials = () => {
    return (
        <section className = "flex flex-col-reverse lg:flex-row px-[8%] lg:px-[10%] py-16 gap-10 testimonial" id = "testimonials">
            <div className = "w-full lg:w-1/2 relative testimonial-image">
                <Image src = {testbg} alt = "testimonial-bg" className = "w-full h-full object-cover rounded-2xl" />
            </div>
            <div className = "w-full lg:w-1/2">
                <div className = "">
                    <div className = "flex flex-col text-center">
                        <div className = "w-full">
                            <h3 className = "text-lg rethinkSans font-semibold text-gray-400 uppercase">
                                Lo que dicen nuestros clientes
                            </h3>
                        </div>
                        <div className = "w-full mt-4">
                            <h2 className = "text-5xl md:text-6xl rethinkSans font-semibold">
                                Experiencias que <span className = "text-(--primary)">hablan por nosotros</span>
                            </h2>
                        </div>
                    </div>
                    <div className = "flex flex-col sm:flex-row items-center gap-5 mt-5 w-full">
                        <h2 className = "text-7xl">
                            4.8
                        </h2>
                        <div className = "flex flex-col items-center">
                            <div className = "flex items-end gap-1 bg-(--primary) text-white px-3 py-1 rounded-full stars-icon">
                                <i className = "bi bi-star-fill text-xs"></i>
                                <i className = "bi bi-star-fill text-xs"></i>
                                <i className = "bi bi-star-fill text-xs"></i>
                                <i className = "bi bi-star-fill text-xs"></i>
                                <i className = "bi bi-star-fill text-xs"></i>
                                </div>
                                <p className = "mt-2 text-center">
                                    3506 opiniones
                                </p>
                            </div>
                            <p className = "flex-1 font-semibold rethinkSans">
                                La confianza de miles de clientes respalda nuestro compromiso con la excelencia, donde cada proyecto refleja nuestra pasión por crear espacios únicos que transforman vidas.
                            </p>
                        </div>
                    </div>
                <div className = "mt-10">
                    <Swiper slidesPerView = {1} spaceBetween = {0} loop = {true} autoplay = {{ delay: 2000 }} modules = {[Autoplay]} speed = {1500}>
                        {
                            testimonials.map((testimonial) => (
                                <SwiperSlide key = {testimonial.id} className = "">
                                    <p className = "text-2xl text-(--text-light) font-semibold tracking-wide rethinkSans">
                                        {testimonial.description}
                                    </p>
                                    <div className = "flex items-center gap-3 mt-8">
                                        <Image src = {testimonial.image} alt = {testimonial.name} className = "rounded-full w-18.75 h-18.75 object-cover" />
                                        <div className = "flex flex-col">
                                            <h3 className = "text-2xl font-semibold">
                                                {testimonial.name}
                                            </h3>
                                            <p className = "font-semibold text-gray-400">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;