import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';
import { CourseContext } from '../Main/Main';

const FeaturedCourses = () => {
    const courses = useContext(CourseContext)
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 sm:mx-auto">
          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
          Explore our Featured Courses
          
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {
                courses.slice(0,3).map(course=><CourseCard key={course.id} course={course} />)
            }
        </div>
        <div className='text-center'>

        <Link
                href="/"
                aria-label=""
                className="inline-flex text-base items-center font-semibold tracking-wider transition duration-200 bg-slate-100 bg-opacity-40 text-slate-800 px-4 py-1 border-4 border-transparent ring-blue-700 ring-4 rounded-full hover:bg-blue-700 hover:border-blue-700 hover:text-slate-100"
              >
                view all courses
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
             </Link>
        </div>
      </div>
    );
};

export default FeaturedCourses;