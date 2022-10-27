import React from 'react';
import img from '../../asset/courses.jpg'
import shape from '../../asset/courses_shape.png'

const CourseHeader = () => {
    return (
        <div className="relative ">
            <img
                src={img}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <img
                src={shape}
                className="absolute left-0 h-full w-full"
                alt=""
            />
     
        
        <div className="relative py-20 lg:py-0 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:pt-20 z-10">
          <div className="flex flex-col md:min-h-[35vh] lg:min-h-[73vh] justify-center w-2/3 lg:w-full max-w-2xl px-4 xl:mb-0 lg:pl-16 xl:w-4/6">
            <div>
              <h2 className="max-w-xl font-sans text-4xl font-bold tracking-tight text-slate-100 md:text-7xl sm:leading-none">
              
                Our Courses
              
              </h2>
             
            
              
            </div>
           
          </div>
        </div>
      
    </div>
    );
};

export default CourseHeader;