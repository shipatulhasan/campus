import React from 'react';
import AboutSection from './AboutSection';
import FeaturedCourses from './FeaturedCourses';
import FeatureSection from './FeatureSection';
import Header from './Header';
import PartnerSection from './PartnerSection';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='relative'>
                <AboutSection />
            <div className='md:absolute w-full bottom-[-60px] right-10 lg:bottom-3'>
                <FeatureSection />
            </div>

            </div>
            <div className='md:py-8 lg:py-0'/>
             <FeaturedCourses />
             <div className='mt-5 mb-20'>
                 <ReviewSection />
             </div>
             <div>
                 <PartnerSection />
             </div>

        </div>
    );
};

export default Home;