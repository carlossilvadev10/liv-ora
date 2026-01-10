"use client";

import { faqs } from "@/constant/data";
import React, { useState } from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className = "px-[8%] lg:px-[10%] py-16 pb-30" id = "faqs">
            <div className = "text-center">
                <h3 className = "text-(--text-light) text-lg uppercase rethinkSans">
                    ¿Buscas respuestas?
                </h3>
                <h2 className = "text-5xl lg:text-8xl text-white rethinkSans font-bold">
                    Todo lo que necesitas saber
                </h2>
                <p className = "mt-6 dmSans text-gray-300">
                    En Livora estamos para resolver todas tus dudas sobre nuestros servicios de diseño de interiores, procesos de trabajo y cómo podemos transformar tu espacio en algo extraordinario.
                </p>
            </div>
            <div className = "w-full space-y-6 pt-14">
                {
                    faqs.map((faq, i) => (
                        <div key = {i} className = {`overflow-hidden border-b border-gray-500 transition-all duration-300 ${openIndex === i ? "" : ""}`}>
                            <button className = "w-full flex items-center justify-between py-4 text-left focus:outline-none cursor-pointer" onClick = {() => toggle(i)}>
                                <span className = "text-2xl w-[80%] sm:w-full font-bold rethinkSans text-white">
                                    {faq.question}
                                </span>
                                {
                                    openIndex === i ? (
                                        <i className = "bi bi-dash bg-(--primary) rounded-full px-2 py-1 text-black text-3xl transition-all duration-300"></i>
                                    ) : (
                                        <i className = "bi bi-plus bg-(--primary) rounded-full px-2 py-1 text-black text-3xl transition-all duration-300"></i>
                                    )
                                }
                            </button>
                            <div className = {`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-75 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                                <p className = "text-lg font-medium w-[90%] dmSans text-gray-300">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Faqs;