"use client"
import React from 'react'
import SectionHead from './SectionHead'
import  { useState } from 'react';
import { ArrowDown, LucideAArrowDown } from 'lucide-react';
import { HeadData } from '@/data/sections';
import { accordionItems, buttons } from '@/data/Faq';



function Faq() {

  const [search,setSearch] = useState(null);


  return (
    <SectionHead data={HeadData.faq}>
          <SearchInput setSearch={setSearch}/>
          <Accordion items={search?accordionItems.filter(ele=>ele.title.indexOf(search)!=-1):accordionItems} />
    </SectionHead>
  )
}

export default Faq


const SearchInput = ({ setSearch, placeholder, icon, className }) => {
  return (
    <div className={`max-w-2xl mx-auto mb-8 relative ${className}`}>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
        {icon || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        )}
      </div>
      <input
        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 min-w-0 border px-3 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full pl-10 py-6 rounded-full border-border bg-card shadow-sm"
        placeholder={placeholder || "Search for questions..."}
        onChange={(e)=>{setSearch(e.target.value)}}
        type="text"
      />
    </div>
  );
};



const AccordionItem = ({ title, content, index, isOpen, onToggle }) => (
    <div className='last:border-b-0 bg-card rounded-xl shadow-sm  overflow-hidden animate-fadeIn ' >
        <div className="px-3 py-2 flex justify-between w-full items-center cursor-pointer [&[data-state=open]>svg]:rotate-45" onClick={()=>{onToggle(index)}}>
            <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">{title}</h3>
            <button data-state={isOpen?"open":null} aria-label="too" className="w-fit focus-visible:border-ring focus-visible:ring-ring/50 rounded-md transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50  px-6 py-4 font-semibold text-lg hover:text-primary hover:no-underline" >
                    
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
          className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>

            </button>
        </div>
            {isOpen && <p className=" px-3 pb-3 font-normal dark:text-gray-400 text-base leading-6 text-gray-600  w-11/12">{content}</p>}
    </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((value)=>value === index ? null : index); // toggle open state
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div data-slot="accordion" className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={"accordion"+index} 
            index={index}
            title={item.title}
            isOpen={openIndex === index}
            onToggle={toggleItem}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};


