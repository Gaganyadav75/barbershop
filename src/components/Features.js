'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionHead from './SectionHead';
import { HeadData } from '@/data/sections';
import { features } from '@/data/Features';
import SwiperSlide1 from './Swiper';
import { Feature } from './Cards';



export default function FeaturesSection() {
  return (

    <SectionHead data={HeadData.whyUs}>  

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {features.map((item, idx) => (
            <Feature data={item} key={idx}/>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="sm:hidden">
          <SwiperSlide1 data={features} CardComponent={Feature} key={"feature"}/>
        </div>
    
    </SectionHead>
  );
}


