import React from 'react';
import SectionHead from './SectionHead';
import { HeadData } from '@/data/sections';


const AboutSection = () => {
  return (

    <SectionHead data={HeadData.aboutUs}>
        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div className="transition-all duration-700 opacity-100">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-500 group md:max-w-full max-w-[90%] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1] opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img
                alt="About PMC Barbershop"
                src="https://pmcbarber.devfrend.com/images/pmcbarber/about.webp"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl z-[3] opacity-0 group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 bg-primary text-white py-3 px-5 rounded-lg font-semibold text-lg shadow-lg z-[2] rotate-3 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:rotate-0 transition-transform duration-500">
                5+ years
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="flex flex-col gap-6 md:text-left text-center">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6 relative md:pl-4 md:border-l-[3px] border-primary transition-all duration-500 opacity-100">
              Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
            </p>

            <div className="transition-all duration-500 opacity-100">
              <div className="text-muted-foreground leading-7 p-6 rounded-lg relative bg-muted/80 hover:bg-muted/90 transition-colors duration-300 hover:shadow-md group mb-6">
                <span className="absolute top-0 left-4 text-5xl leading-none text-primary/40 font-serif transform group-hover:scale-110 group-hover:rotate-12 group-hover:text-primary/60 transition-all duration-500">
                  "
                </span>
                <p className="relative group-hover:translate-x-1 transition-all duration-300">
                  We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
                </p>
                <div className="absolute bottom-4 left-6 right-6 h-[1px] bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
 </SectionHead>
  );
};

export default AboutSection;
