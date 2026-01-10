import service1 from "@/public/service-1.jpg";
import service2 from "@/public/service-2.jpg";
import service3 from "@/public/service-3.jpg";
import test1 from "@/public/testimonials-1.jpg";
import test2 from "@/public/testimonials-2.jpg";

type NavLink = {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    {
        label: "Inicio",
        href: "#home",
    },
    {
        label: "Sobre Livora",
        href: "#about",
    },
    {
        label: "Servicios",
        href: "#services",
    },
    {
        label: "Testimonios",
        href: "#testimonials",
    },
    {
        label: "Preguntas",
        href: "#faqs",
    },
    {
        label: "Contacto",
        href: "#contact",
    },
]

export const services = [
    {
        id: 1,
        title: "Fachadas modernas",
        description: "Diseños arquitectónicos que reflejan tu identidad y estilo único",
        img: service1,
    },
    {
        id: 2,
        title: "Estructuras y detalles",
        description: "Construcción integral con acabados de alta calidad y precisión",
        img: service2,
    },
    {
        id: 3,
        title: "Dirección de proyectos",
        description: "Gestión completa desde la conceptualización hasta la entrega final",
        img: service3,
    },
]

export const testimonials = [
    {
        id: 1,
        description: "Transformaron completamente nuestro espacio comercial, el equipo entendió perfectamente nuestra visión de marca y la ejecutaron con una atención al detalle impresionante, cada cliente que entra ahora comenta lo increíble que se ve todo.",
        image: test1,
        name: "Olivia Peterson",
        role: "Directora creativa",
    },
    {
        id: 2,
        description: "Desde la primera reunión supimos que estábamos en las mejores manos, convirtieron nuestra casa en el hogar con el que siempre soñamos, respetaron nuestro presupuesto y el resultado final superó todas nuestras expectativas.",
        image: test2,
        name: "Morgan Dufresne",
        role: "Administrador de negocios",
    },
]

export const faqs = [
    {
        question: "¿Cuál es la inversión mínima para comenzar un proyecto?",
        answer: "No tenemos un mínimo establecido porque cada proyecto es único. Ofrecemos opciones flexibles desde consultoría de diseño por hora hasta paquetes completos de remodelación. Durante la primera reunión, que es gratuita, analizamos tus necesidades y presupuesto para crear una propuesta personalizada que se ajuste a tus posibilidades sin comprometer la calidad del diseño.",
    },
    {
        question: "¿Trabajan solo en proyectos residenciales o también comerciales?",
        answer: "Realizamos tanto proyectos residenciales como comerciales. Tenemos experiencia diseñando casas, departamentos, oficinas, restaurantes, tiendas y espacios corporativos. Cada tipo de proyecto requiere un enfoque diferente y nuestro equipo está capacitado para adaptarse a las necesidades específicas de cada espacio, ya sea crear un hogar acogedor o un ambiente comercial que impulse tu negocio.",
    },
    {
        question: "¿Ofrecen garantía sobre el trabajo realizado?",
        answer: "Sí, todos nuestros proyectos incluyen garantía. Los trabajos de construcción y remodelación tienen garantía de 12 meses sobre mano de obra y materiales. Además, mantenemos comunicación post-entrega para asegurarnos de que todo funcione perfectamente. Si surge algún inconveniente relacionado con la ejecución del proyecto, lo resolvemos sin costo adicional durante el período de garantía.",
    },
    {
        question: "¿Cuánto tiempo toma completar un proyecto de diseño?",
        answer: "El tiempo varía según la complejidad del proyecto. Un diseño de una habitación puede tomar de 2 a 4 semanas, mientras que proyectos completos de casas o espacios comerciales pueden requerir de 2 a 6 meses. Durante nuestra primera reunión evaluamos el alcance de tu proyecto y te proporcionamos un cronograma detallado con todas las fases, desde el concepto inicial hasta la instalación final.",
    },
]

export const socialLinks = [
    {
        id: 1,
        name: "Facebook",
        icon: "bi bi-facebook",
    },
    {
        id: 2,
        icon: "bi bi-instagram",
    },
    {
        id: 3,
        name: "YouTube",
        icon: "bi bi-youtube",
    },
    {
        id: 4,
        name: "LinkedIn",
        icon: "bi bi-linkedin",
    },
]

export const footerLinks = [
    {
        id: 1,
        name: "Inicio",
        href: "#home"
    },
    {
        id: 2,
        name: "Servicios",
        href: "#services"
    },
    {
        id: 3,
        name: "Proyectos",
        href: "#projects"
    },
    {
        id: 4,
        name: "Testimonios",
        href: "#testimonials"
    },
    {
        id: 5,
        name: "FAQ",
        href: "#faqs"
    },
    {
        id: 6,
        name: "Contacto",
        href: "#contact"
    },
]

export const featuredProducts = [
    {
        id: 1,
        name: "Sillas de Diseño"
    },
    {
        id: 2,
        name: "Cómodas y Cajoneras"
    },
    {
        id: 3,
        name: "Mesas de Centro"
    },
    {
        id: 4,
        name: "Sofás Modernos"
    },
    {
        id: 5,
        name: "Iluminación"
    },
    {
        id: 6,
        name: "Textiles y Cojines"
    },
]