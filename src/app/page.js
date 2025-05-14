import AboutSection from "@/components/About";
import Contact from "@/components/Contact";
import CTASection from "@/components/Cta";
import Faq from "@/components/Faq";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery";
import Header from "@/components/Header";
import HeroSection from "@/components/Herosection";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import { TopButoon } from "@/components/Reusable";
import ServicesSection from "@/components/Services";
import Team from "@/components/Team";
import TestimonialSection from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <Header/>
      <HeroSection/>
      <div className="target-element">
   
        <AboutSection/>
        <ServicesSection/>
        <FeaturesSection/>
        <TestimonialSection/>
        <Pricing/>
        <GallerySection/>
        <Team/>
        <Location/>
        <Faq/>
        <Contact/>
        <CTASection/>
        <Footer/>
      </div>
    </main>
  );
}
