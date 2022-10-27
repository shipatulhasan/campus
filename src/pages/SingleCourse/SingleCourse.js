import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import Pricing from './Pricing';

const ref = React.createRef();


const SingleCourse = () => {
    const course = useLoaderData()
    const {img} = course
    return (
        <div  className="px-2 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8">
            <img className="object-cover w-full h-96 rounded-xl" src={img}alt="Article"/>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" ref={ref}>
           <CourseDetails course={course} />
           <Pricing myref={ref} course={course} />
           
        </div>
        
    </div>
    );
};

export default SingleCourse;