import React from 'react';


const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl group">
            <p className="text-primary font-medium mb-3 transition-all duration-500 opacity-100">
              Premium Barber Services in Denton
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground mb-6 tracking-tight transition-all duration-500 group opacity-100">
              Classic Cuts, Modern Style{" "}
              <span className="text-primary relative inline-block">
                Premium Barber Shop
                <span className="absolute bottom-1 left-0 right-0 h-2 -z-10 rounded-md transition-all duration-500 transform bg-accent/40 group-hover:animate-pulse"></span>
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full opacity-75 bg-accent/40 animate-pulse"></span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 transition-all duration-500 opacity-100">
              At FAMA Barbershop, we combine traditional barbering techniques with
              modern styling to give you the perfect look. Our experienced barbers
              deliver precision cuts, beard grooming, and relaxing hot towel shaves
              in a classic barbershop atmosphere.
            </p>

            {/* Location Badge */}
            <div className="mb-8 transition-all duration-500 opacity-100">
              <a href='#location'>
              <div className="inline-flex items-center text-muted-foreground px-3 py-1.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm cursor-pointer hover:border-primary/40 hover:bg-background/80 group hover:shadow-md transition-shadow duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin text-primary mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="group-hover:text-foreground transition-colors duration-300">
                  Denton, TX
                </span>
              </div>
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-8 transition-all duration-500 opacity-100">
              <div className="flex flex-wrap gap-4 flex-col group">
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  href="#services"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100" />
                  <span className="mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300">
                    Our Services
                  </span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  href="#contact"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100" />
                  <span className="mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300">
                    Book Now
                  </span>
                </a>
              </div>
            </div>

            {/* Scroll Down Icon */}
            <div className="hidden md:flex justify-center mt-16 transition-all duration-500 opacity-100">
              <div
                className="animate-pulse cursor-pointer hover:opacity-80 transition-opacity hover:-translate-y-1 hover:scale-110 duration-300"
                aria-label="Scroll down for more content"
                role="button"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-down text-primary"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center animate-floatIn filter drop-shadow-xl">
            <img
              alt="Elegant salon interior"
              className="w-full h-auto max-h-[600px] object-contain transition-transform hover:scale-105 duration-300"
              loading="eager"
              src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-black/10 rounded-full blur-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
