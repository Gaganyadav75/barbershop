import React from 'react';

const CTASection = () => {
  return (
    <section id="cta" className="relative lg:py-32 overflow-hidden py-16 md:py-24 bg-primary text-white">
      {/* Background Effects */}
      <div className="absolute top-[-10rem] left-[-10rem] w-80 h-80 rounded-full bg-white/10"></div>
      <div className="absolute top-1/2 right-[-5rem] -translate-y-1/2 w-60 h-60 rounded-full bg-white/10"></div>
      <div className="absolute bottom-[-8rem] left-[30%] w-40 h-40 rounded-full bg-white/10"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready for a Fresh Cut?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 sm:flex-row justify-center">
            {/* Book Appointment Button */}
            <a 
              className="justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-white text-primary hover:bg-white/90 flex items-center gap-1"
              href="#contact"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100"></span>
              <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300">
                Book an Appointment
              </span>
            </a>

            {/* View Services Button */}
            <a 
              className=" justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md border-white text-primary hover:bg-white/10 flex items-center gap-1"
              href="#services"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100"></span>
              <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300">
                View Our Services
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
