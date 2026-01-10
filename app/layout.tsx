import type { Metadata } from "next";
import { Audiowide, DM_Sans, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livora - Diseño de Interiores Exclusivo",
  description: "Transformamos espacios en experiencias únicas. Diseño de interiores personalizado que refleja tu estilo y eleva cada rincón de tu hogar u oficina.",
  keywords: "diseño de interiores, decoración, interiorismo, diseño personalizado, espacios exclusivos",
  authors: [{ name: "Livora" }],
  openGraph: {
    title: "Livora - Diseño de Interiores Exclusivo",
    description: "Transformamos espacios en experiencias únicas. Diseño de interiores personalizado.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang = "en">
      <body className = {`${rethinkSans.variable} ${dmSans.variable} ${audiowide.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
