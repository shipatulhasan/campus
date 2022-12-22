import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./review.css";
import st1 from '../../../asset/persons/st1.jpg'
import st2 from '../../../asset/persons/st2.jpg'
import st3 from '../../../asset/persons/st3.jpg'

// import required modules
import { Navigation } from "swiper";
import Review from './Review';

const ReviewSlieder = () => {
    const reviews = [
        {
            img:st1,
            details:'Markets maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets solutions via growth strategies enabled niche growth',
            name:'Juniatur Rahman',
            position:'Manager'
        },
        {
            img:st2,
            details:'Markets maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets solutions via growth strategies enabled niche growth',
            name:'Juniatur Rahman',
            position:'Founder'
        },
        {
            img:st3,
            details:'Markets maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets solutions via growth strategies enabled niche growth',
            name:'JR Shawon',
            position:'CEO & Owner'
        }
    ]
    return (
        <>
        <Swiper
        // slidesPerView={3}
          
          breakpoints={{
        
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 1,
            },
            992: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          slidesPerGroup={1}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          
          // centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          
          
            {
              reviews.map((review,i)=><SwiperSlide key={i}>
                <Review review={review}/>
               
              </SwiperSlide>)
            
        
          }
           
       
          
     
        </Swiper>
      </>
    );
};

export default ReviewSlieder;

