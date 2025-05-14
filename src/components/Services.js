// components/ServicesSection.tsx
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionHead from './SectionHead';
import { HeadData } from '@/data/sections';
import { services } from '@/data/Services';
import SwiperSlide1 from './Swiper';
import { ServiceCard } from './Cards';



export default function ServicesSection() {
  return (

    <SectionHead data={HeadData.services}>
        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {services.map((service, index) => (
            <ServiceCard data={service} key={"services-"+index}/>
          ))}
        </div>

        <div className="sm:hidden">
          <SwiperSlide1 data={services}  CardComponent={ServiceCard} name={"services"}/>
        </div>
   </SectionHead>

  );
}
