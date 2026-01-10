import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Faqs from "@/components/Faqs/Faqs";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import MarqueeSlider from "@/components/MarqueeSlider/MarqueeSlider";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import WorkBanner from "@/components/WorkBanner/WorkBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeSlider />
      <AboutUs />
      <WorkBanner />
      <Services />
      <Testimonials />
      <Faqs />
      <Contact />
      <Gallery />
    </>
  );
}
