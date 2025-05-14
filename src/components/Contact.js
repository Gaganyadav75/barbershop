"use client"
import React, { useState } from 'react';
import SectionHead from './SectionHead'
import { HeadData } from '@/data/sections';


function Contact() {
  return (
    <SectionHead data={HeadData.contactUs}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 animate-fadeInUp'>
            <ContactCard/>
            <FormCard/>
        </div>
    </SectionHead>
  )
}

export default Contact




const FormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an API or process it)
    console.log(formData);
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm md:col-span-2 p-6 border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className="p-0">
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Name Field */}
          <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
            <label className="flex items-center gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Field */}
          <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
            <label className="flex items-center gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Service Selection */}
          <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
            <label className="flex items-center gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" htmlFor="service">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
            >
              <option value="">Select an option</option>
              <option value="Haircut">Haircut</option>
              <option value="Beard Trim">Beard Trim</option>
              <option value="Hot Towel Shave">Hot Towel Shave</option>
              <option value="Haircut & Beard Combo">Haircut & Beard Combo</option>
              <option value="Kid's Haircut">Kid's Haircut</option>
              <option value="Senior Haircut">Senior Haircut</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
            <label className="flex items-center gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" htmlFor="date">Preferred Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
            />
          </div>

          {/* Message Field */}
          <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
            <label className="flex items-center gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none focus:border-primary focus:shadow-md hover:border-primary/80"
              placeholder="Tell us about your style preferences or any questions you have"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm hover:bg-primary/90 h-9 mt-6 px-8 py-6 bg-primary text-white font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};



const ContactCard = () => {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm md:col-span-1 p-6 border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-2">
      <div className="p-0">
        <div className="space-y-6">

          {/* Address */}
          <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 hover:translate-x-2 -mx-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-white" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Address</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                500 N Bell Ave #109, Denton, TX 76209, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 hover:translate-x-2 -mx-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-white" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">+1 940-612-9127</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 hover:translate-x-2 -mx-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-white" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open - Closes 7 pm
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};




