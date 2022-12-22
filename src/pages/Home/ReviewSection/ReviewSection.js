import React from 'react';
import ReviewSlieder from './ReviewSlieder';
import banner from '../../../asset/banner2.jpg'

const ReviewSection = () => {
    return (
       <div className="relative overflow-hidden px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 rounded lg:px-8 lg:py-20 bg-top bg-no-repeat bg-cover bg-blue-200 backdrop-blur-3xl" style={{backgroundImage:`url(${banner})`}}>
           <div className='absolute w-full h-full backdrop-blur-3xl top-0 left-0 rounded z-[-1]' />
        <div className="max-w-xl pb-20 sm:mx-auto">
          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-800 sm:text-4xl sm:text-center">
          Student’s Testimonials
          
          </h2>
        </div>
        <div>
            <ReviewSlieder />
        </div>
        </div>
    );
};

export default ReviewSection;