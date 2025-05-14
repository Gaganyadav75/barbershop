import React from 'react'

function SectionHead({children,data}) {
  return (
    
    <section id={data.id} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto group text-center mb-12">
          {data.top && <p className="text-primary font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">{data.top}</p>}
          {data.heading && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            {data.heading}
            <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>}
          {data.para && <p className="text-lg text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
            {data.para}
          </p>}
        </div>

        {children}


        </div>
        </section>
  )
}

export default SectionHead