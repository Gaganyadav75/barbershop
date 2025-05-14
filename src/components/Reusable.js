"use client"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"


export const NavigateButtons = ({btn=1,})=>{
    return  <div className="flex mt-4 justify-center sm:hidden">
          <button
            data-slot="carousel-previous"
            className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 prev-btn"+btn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            <span className="sr-only">Previous slide</span>
          </button>
          <button
            data-slot="carousel-next"
            className={"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 next-btn"+btn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span className="sr-only">Next slide</span>
          </button>
        </div>
}


export const TopButoon = ()=>{

    // State to track if the target element is in view
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the page has been scrolled more than the window height
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 const handleClick = () => {
    window.scrollTo({
      top: 0, // Set the scroll position to the top
      behavior: "smooth", // Smooth scroll effect
    });
  };
    return <button onClick={handleClick} data-slot="button" className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-900 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 size-9 fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg z-50 animate-fadeIn ${
          isVisible ? " opacity-100 visible" : " opacity-0 invisible"
        }`}>
        <ArrowUp/>
    </button>
}
