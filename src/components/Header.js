import React from 'react';

const Navs = ["Home","About","Services","Gallery","Contact"]

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a className="flex items-center" href="/">
            {/* <img
              alt="Logo"
              width="120"
              height="40"
              decoding="async"
              className="h-10 w-auto"
              srcSet="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75"
              src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75"
              style={{ color: 'transparent' }}
            /> */}
            <h1 className='text-primary text-2xl font-bold'>FAMA</h1>
          </a>
          <nav className="items-center gap-6 hidden md:flex">
            {Navs.map((ele,idx)=>{
                return <li className=' list-none' key={idx}>
                <a className="text-base font-medium text-foreground hover:text-primary transition-colors" href={`#${ele.toLowerCase()}`}>
                    {ele}
                </a>
                </li>
            })}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                className="gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-full h-9 w-9 flex items-center justify-center hover:bg-muted"
                aria-label="Toggle theme"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette h-5 w-5" aria-hidden="true">
                  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </svg>
              </button>
              <button
                className="gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-full h-9 w-9 flex items-center justify-center hover:bg-muted"
                aria-label="Toggle language"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-5 w-5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="sr-only">English</span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-primary" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+19408081569</span>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
              href="#contact"
            >
              Book an Appointment
            </a>
          </div>
          <div className="block lg:hidden">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5 text-primary" aria-hidden="true">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
