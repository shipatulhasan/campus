import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import Pricing from './Pricing';


const SingleCourse = () => {
    const course = useLoaderData()
    const {img} = course
    return (
        <div  className="px-2 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8">
            <img className="object-cover w-full h-96 rounded-xl" src={img}alt="Article"/>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
           <CourseDetails course={course} />
           <Pricing course={course} />
           
        </div>
    </div>
    );
};

export default SingleCourse;