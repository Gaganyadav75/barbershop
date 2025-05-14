'use client'
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export default function SwiperSlide1({data,CardComponent,name}) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} navigation loop>
        {data.map((item, index) => (
          <SwiperSlide key={name+"-"+index}>
           <CardComponent
            data={item}
          />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}


export const SwiperSlideWithNavBtn =({data,CardComponent,name,btn}) =>{
    return (
        <Swiper
          modules={[Navigation ]} // Add Navigation module
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Number of slides visible at once
          navigation={{
            nextEl: '.next-btn'+btn, // Link next button
            prevEl: '.prev-btn'+btn, // Link previous button
          }}
          >
            {data.map((item, index) => (
                <SwiperSlide key={name+"-"+index}>
                    <CardComponent
                    data={item}
                    index={index}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
