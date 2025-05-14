import React from 'react'
import SectionHead from './SectionHead'
import { HeadData } from '@/data/sections';


function Location() {
  return (
    <SectionHead data={HeadData.location}> 

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8'>

            <ImageCard/>
            <ContactCard phone='+1 940-612-9127' address='500 N Bell Ave #109, Denton, TX 76209, United States' />

        </div>

    </SectionHead>
  )
}

export default Location



const ImageCard = ({ icon, bgColor, height }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn"
      style={{ height: height || '24rem' }}
    >
      <div className={`bg-${bgColor} w-full h-full flex items-center justify-center`}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.8095231577527!2d-97.127037!3d33.219089499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca8e4261aec1%3A0xb5d271024d7890e2!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1747207531192!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-xl"></div>
    </div>
  );
};



const ContactCard = ({ address="this road that area in city", phone="+91 1234567890" }) => {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      <div
        data-slot="card"
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div
          data-slot="card-header"
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2"
        >
          <h3 className="text-xl font-semibold text-foreground relative inline-block mb-6">
            Contact Information
            <span className="absolute bottom-[-0.5rem] left-0 w-12 h-[2px] bg-primary rounded-md"></span>
          </h3>
        </div>
        <div data-slot="card-content" className="px-6">
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 -mx-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin text-white"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{address}</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 -mx-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone text-white"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{phone}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Get Directions Button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-slot="button"
              className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-navigation"
                aria-hidden="true"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              Get Directions
            </a>
            {/* Call Us Button */}
            <a
              href={`tel:${phone}`}
              data-slot="button"
              className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


