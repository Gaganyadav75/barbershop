
import SectionHead from './SectionHead';
import { HeadData } from '@/data/sections';
import { PriceData } from '@/data/Pricing';
import SwiperSlide1 from './Swiper';
import {PricingCard}  from './Cards';



function Pricing() {
  return (


    <SectionHead data={HeadData.prices}>

        {/* Swiper Carousel for Pricing Plans */}
        <div className='hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp'>
            {PriceData.map((data, idx) => <PricingCard data={data} key={"large-"+idx}/>)}
        </div>

         <div className="sm:hidden ">
          <SwiperSlide1 data={PriceData} name={"small"} CardComponent={PricingCard}/>
        </div>

    </SectionHead>

    
  )
}

export default Pricing




