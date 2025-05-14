'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import SectionHead from "./SectionHead";
import { NavigateButtons } from "./Reusable";

import { HeadData } from '@/data/sections';
import { teaminfos } from "@/data/Team";
import { SwiperSlideWithNavBtn } from "./Swiper";
import { ProfileCard } from "./Cards";




function Team() {
  return (
    <SectionHead data={HeadData.ourBarbers}>
      
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeInUp">
          {teaminfos.map((person, index) => (
            <ProfileCard data={person} key={"img-large-"+index}/>
          ))}
        </div>

        <div className="sm:hidden">
         <SwiperSlideWithNavBtn data={teaminfos} CardComponent={ProfileCard} name={'team'} btn={2}/>
        </div>

        {/* Navigation */}
       <NavigateButtons btn={2}/>

    </SectionHead>
  )
}

export default Team



