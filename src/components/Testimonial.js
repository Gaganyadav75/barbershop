import React from "react";
import SectionHead from "./SectionHead";

import { HeadData } from '@/data/sections';
import { testimonials } from "@/data/Testimonial";
import SwiperSlide1 from "./Swiper";
import { TestimonialCard } from "./Cards";





const TestimonialSection = () => {
  return (
    <SectionHead data={HeadData.testimonials}>
        {/* Grid View (sm and up) */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} data={t} />
          ))}
        </div>

        {/* Carousel View (only for small screens) */}
        <div className="sm:hidden">
          <SwiperSlide1 data={testimonials} CardComponent={TestimonialCard} key={"testimonial"}/>
        </div>
    </SectionHead>
  );
};

export default TestimonialSection;


