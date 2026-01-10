import { featuredProducts, footerLinks, socialLinks } from "@/constant/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className = "px-[8%] py-16">
            <div className = "flex flex-col lg:flex-row justify-between gap-10">
                <div className = "w-full lg:w-1/2">
                    <Link href = "/" className = {`text-4xl lg:text-5xl font-bold audiowide text-white`}>
                        Liv<span className = "text-(--primary-dark)">ora</span>
                    </Link>
                    <p className = "text-(--text-light) dmSans my-5">
                        Tu aliado en diseño de interiores. Combinamos creatividad, experiencia y pasión para diseñar espacios que no solo se ven increíbles, sino que mejoran tu forma de vivir y trabajar.
                    </p>
                    <div className = "flex gap-2">
                        {
                            socialLinks.map((social) => (
                                <Link key = {social.id} href = "/" target = "_blank" rel = "noopener noreferrer" aria-label = {social.name} className = "cursor-pointer hover:-translate-y-1 transition-all duration-300">
                                    <i className = {`${social.icon} border border-gray-500 rounded-full px-2 py-1 text-lg text-white`}></i>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className = "w-full lg:w-1/2">
                    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className = "">
                            <h3 className = "text-white font-bold rethinkSans text-2xl mb-3">
                                Links
                            </h3>
                            <div className = "flex flex-col space-y-2">
                                {
                                    footerLinks.map((link) => (
                                        <Link key = {link.id} href = {link.href} className = "text-(--text-light) hover:text-white hover:ml-2 dmSans transition-all duration-300">
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className = "">
                            <h3 className = "text-white font-bold rethinkSans text-2xl mb-3">
                                Productos top
                            </h3>
                            <div className = "flex flex-col space-y-2">
                                {
                                    featuredProducts.map((product) => (
                                        <Link key = {product.id} href = "" className = "text-(--text-light) hover:text-white hover:ml-2 dmSans transition-all duration-300">
                                            {product.name}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className = "">
                            <h3 className = "text-white font-bold rethinkSans text-2xl mb-3">
                                Contacto
                            </h3>
                            <div className = "flex flex-col">
                                <Link href = "" className = "text-(--text-light) hover:text-white dmSans transition-all duration-300">
                                    livora@gmail.com
                                </Link>
                                <p className = "text-(--text-light) mt-5 dmSans">
                                    Av. Los Ángeles 276 - Huacho
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "border-t text-center border-gray-500 mt-6">
                <p className = "rethinkSans text-lg text-(--text-light) mt-4 cursor-pointer">
                    © {new Date().getFullYear()} Livora. Todos los derechos reservados. Desarrollado por {" "}
                    <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold hover:underline">
                        carlozzsilva10
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;