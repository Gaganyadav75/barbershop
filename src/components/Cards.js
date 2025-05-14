
'use client'

export const PricingCard = ({ data }) => {
  const { category, price, frequency, services, buttonText, isPopular } = data;

  return (
    <div
      className={`bg-card text-card-foreground gap-6 rounded-xl shadow-sm p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2  hover:border-primary hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20 ${isPopular==true? " border-primary shadow-xl -translate-y-3 scale-[1] z-20":" border-transparent"}`}
      style={{ animationDelay: '0.1s' }}
    >



      {/* Gradient Animation Bar */}
      

      {/* "Most Popular" Badge */}
      {isPopular && (
        <>
        <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent bg-primary"></div>
        <div className="absolute top-0 right-8 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 font-semibold text-sm rounded-b-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
          Most Popular
        </div>
       

        </>

      )}

      {/* Category Title with Animation */}
      <h3 className="text-xl font-bold text-foreground mb-2 relative inline-block">
        {category || ""}
        <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-primary rounded transition-all duration-300 group-hover:w-16"></span>
      </h3>

      {/* Price and Frequency */}
      <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
        <span className="text-2xl font-semibold text-foreground mr-1">$</span>
        <span className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-colors duration-500">
          {price}
        </span>
        <span className="text-sm text-muted-foreground ml-1">{frequency}</span>
      </div>

      {/* Services List */}
      <ul className="space-y-3 mb-8 flex-grow">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-center text-foreground text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-muted/80 hover:translate-x-1 -mx-3"
          >
            <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
            {service}
          </li>
        ))}
      </ul>

      {/* Booking Button with Hover Effect */}
      <button
        data-slot="button"
        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 hover:bg-primary dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 has-[>svg]:px-3 mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isPopular && " bg-primary"}`}
      >
        {buttonText}
      </button>
    </div>
  );
};


export const ServiceCard = ({data}) =>{
    return (
         <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 px-4 shadow-sm h-full transition-all duration-300 border-border relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-muted rounded-lg p-4 mb-6 flex items-center justify-center group-hover:bg-primary/10">
                      <img src={data.icon} alt={data.title} width={60} height={60} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                      {data.title}
                    </h3>
                    <p className="text-muted-foreground mt-4 text-sm">{data.description}</p>
                    <ul className="mt-4 pl-4 text-muted-foreground text-sm list-disc text-left space-y-1">
                      {data.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
    )
}

export const ImageComponent = ({data,index})=>{
  return <div
        key={index}
        className="min-w-0 shrink-0 grow-0 basis-full pl-4"
        role="group"
        aria-roledescription="slide"
        data-slot="carousel-item"
      >
        <div
          className="relative h-60 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm border-2 border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <img
            alt={`Gallery Image ${index + 1}`}
            className="object-cover w-full h-full"
            src={data.src}
            srcSet={data.srcSet}
            sizes={data.sizes}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-90 transition-opacity duration-300">🔍 View</div>
        </div>
      </div>
}

export const ProfileCard = ({ data , index}) => {
    let {imageSrc,name,title,experience,specialties,fburl,instaurl} = data;
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
      <div className="relative h-72 lg:h-60 overflow-hidden">
        <img 
          alt={name} 
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={imageSrc} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="p-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary rounded transition-all duration-300 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent"></div>
        <h3 className="text-lg font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">{name}</h3>
        <p className="text-sm font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{title}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{experience}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{specialties}</p>
        <div className="flex justify-center gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
          <a href={instaurl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md" aria-label="instagram profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href={fburl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md" aria-label="facebook profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Feature = ({data})=>{
    return   <div
              className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-border hover:border-primary relative"
            >
              <div className="px-6 pb-2">
                <div className="w-[60px] h-[60px] rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  {data.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {data.title}
                </h3>
              </div>
              <div className="px-6 flex-grow">
                <p className="text-muted-foreground leading-relaxed mb-6">{data.description}</p>
              </div>
            </div>
}

export const TestimonialCard = ({data }) => (
  <div
    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden border-border hover:border-primary/30 animate-fadeIn"
    style={{ animationDelay: data.delay }}
  >
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full z-0" />
    <div className="px-6 pt-10 pb-6 relative z-10">
      <p className="text-lg leading-relaxed text-foreground mb-8 italic relative">
        <span className="absolute -top-6 -left-2 text-5xl text-primary/15 font-serif">&quot;</span>
        {data.text}
        <span className="absolute -bottom-12 right-0 text-5xl text-primary/10 font-serif">&quot;</span>
      </p>
    </div>
    <div className="px-6 pt-4 border-t border-border flex items-center">
      <div className="flex text-amber-500 mb-4">
        {Array(5).fill("★").map((star, idx) => (
          <span key={idx} className="mr-1">{star}</span>
        ))}
      </div>
      <div className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-primary before:rounded-md">
        <h4 className="font-bold text-foreground mb-1">{data.name}</h4>
      </div>
    </div>
  </div>
);