import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card py-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Social Links */}
          <div className="flex flex-col">
            <div className="mb-6">
              <a className="flex items-center" href="/">
                <img 
                  alt="Company Logo" 
                  width="120" 
                  height="40" 
                  className="h-10 w-auto" 
                  src="/images/pmcbarber/logo.svg" 
                />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Classic cuts with modern style
            </p>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://www.instagram.com/pmcbarbershop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center transition-all duration-300 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md w-10 h-10" 
                aria-label="Instagram Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/pmcbarbershop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center transition-all duration-300 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md w-10 h-10" 
                aria-label="Facebook Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#home">Home</a></li>
              <li><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#about">About</a></li>
              <li><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#services">Services</a></li>
              <li><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#gallery">Gallery</a></li>
              <li><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">500 N Bell Ave #109, Denton, TX 76209, United States</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1"></div>
                <p className="text-muted-foreground text-sm">+1 940-612-9127</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Newsletter</h3>
            <div>
              <p className="text-muted-foreground text-sm mb-4">Subscribe to our newsletter to receive updates and news.</p>
              <form className="space-y-3">
                <input 
                  className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-transparent" 
                  placeholder="Your email" 
                  required 
                  type="email" 
                />
                <button 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full" 
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2023 PMC Barbershop. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#home">Home</a>
              <a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#about">About</a>
              <a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#services">Services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
