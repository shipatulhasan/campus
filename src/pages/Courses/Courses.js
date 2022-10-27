import React, { useContext } from 'react';
import CourseCard from '../../components/Shared/CourseCard';
import { CourseContext } from '../Main/Main';
import CourseHeader from './CourseHeader';
import Sidebar from './Sidebar';


const Courses = () => {
    const courses = useContext(CourseContext)
    return (
        <div>
            <CourseHeader  />
            <div  className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-4">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Sidebar courses={courses} />
            <div className=" col-span-3 grid gap-2 md:grid-cols-3 lg:grid-cols-3">
            {
                courses.map(course=><CourseCard key={course.id} course={course} />)
            }
        </div>
           
        </div>
        </div>
        </div>
    );
};

export default Courses;