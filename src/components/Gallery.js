
import SectionHead from "./SectionHead";
import { NavigateButtons } from "./Reusable";
import { HeadData } from '@/data/sections';
import { images } from "@/data/Gallery";
import { SwiperSlideWithNavBtn } from "./Swiper";
import { ImageComponent } from "./Cards";



const GallerySection = () => {
 

  return (
        <SectionHead data={HeadData.gallery}>

        {/* Gallery Images (Desktop) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeInUp">
          {images.map((image, index) => (
            <ImageComponent data={image} index={index} key={"img-large-"+index}/>
          ))}
        </div>

        {/* Gallery Images (Mobile) */}
        <div className="sm:hidden">
              <SwiperSlideWithNavBtn data={images} CardComponent={ImageComponent} name={'gallery'} btn={1}/>
                 {/* <Swiper
                  modules={[Navigation ]} // Add Navigation module
                  spaceBetween={10} // Space between slides
                  slidesPerView={1} // Number of slides visible at once
                  navigation={{
                    nextEl: '.next-btn1', // Link next button
                    prevEl: '.prev-btn1', // Link previous button
                  }}
                  >
                    {images.map((image, index) => <SwiperSlide key={"img-small-"+index}>
                          <ImageComponent data={image} index={index} />
                      </SwiperSlide>
                    )}

                </Swiper> */}
       
        </div>

        {/* Navigation */}
          <NavigateButtons btn={1}/>
 </SectionHead>
  );
};

export default GallerySection;




