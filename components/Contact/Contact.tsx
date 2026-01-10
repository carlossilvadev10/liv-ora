import React from "react";

const Contact = () => {
    return (
        <section className = "flex items-center justify-center md:justify-end px-[8%] lg:px-[10%] py-16 contact" id = "contact">
            <div className = "bg-white w-110 p-10 rounded-md">
                <h2 className = "text-black text-5xl font-bold rethinkSans">
                    ¿Tienes un proyecto en mente? Hablemos
                </h2>
                <div className = "space-y-5 pt-10">
                    <div className = "">
                        <input type = "text" name = "name" id = "name" placeholder = "Tus nombres" className = "border border-gray-500 hover:border-(--primary) w-full px-4 py-2 text-black rethinkSans font-medium outline-none rounded-xl" />
                    </div>
                    <div className = "">
                        <input type = "text" name = "name" id = "name" placeholder = "Tus apellidos" className = "border border-gray-500 hover:border-(--primary) w-full px-4 py-2 text-black rethinkSans font-medium outline-none rounded-xl" />
                    </div>
                    <div className = "">
                        <input type = "email" name = "email" id = "email" placeholder = "correo@gmail.com" className = "border border-gray-500 hover:border-(--primary) w-full px-4 py-2 text-black rethinkSans font-medium outline-none rounded-xl" />
                    </div>
                    <div className = "">
                        <input type = "tel" name = "phone" id = "phone" placeholder = "999 888 777" maxLength = {9} pattern = "[0-9]{9}" className = "border border-gray-500 hover:border-(--primary) w-full px-4 py-2 text-black rethinkSans font-medium outline-none rounded-xl" />
                    </div>
                    <div className = "">
                        <input type = "text" name = "name" id = "name" placeholder = "Asunto" className = "border border-gray-500 hover:border-(--primary) w-full px-4 py-2 text-black rethinkSans font-medium outline-none rounded-xl" />
                    </div>
                    <div className = "">
                        <textarea name = "message" id = "message" rows = {5} className = "border border-gray-500 hover:border-(--primary) w-full px-4 py-2 text-black rethinkSans font-medium outline-none rounded-xl"></textarea>
                    </div>
                    <button className = "btn w-full text-white rethinkSans text-xl py-3 rounded-md font-semibold bg-(--primary) hover:bg-[#a99246] cursor-pointer transition-all duration-300">
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact;