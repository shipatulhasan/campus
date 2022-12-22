import React from 'react';
import {  FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({courses}) => {
    return (
        <div className="px-4 py-5 mr-3 z-20  border border-slate-300 shadow-xl">

<h2  className="block mt-5 text-2xl font-bold text-gray-800 transition-colors duration-300 transform" role="link">All Courses</h2>
            {
                courses.map(course=> <div className="flex  items-start mt-4 text-gray-700 dark:text-gray-200 hover:text-blue-700" key={course.id}>
                <FaChevronRight className="text-sm w-1/12 md:w-auto mt-1" />
      
                <Link to={`/course-details/${course.id}`} className="px-2 w-11/12 text-sm font-bold break-words ">{course.name}</Link>
              </div>)
            }

    </div>
    );
};

export default Sidebar;