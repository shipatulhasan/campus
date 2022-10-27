import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CourseDetails = ({course}) => {
    const {name, description} = course;
    return (
        <div className="max-w-3xl overflow-hidden bg-white rounded-lg lg:col-span-3">
    <div className="p-6">
        <div>
            <h2  className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform" tabindex="0" role="link">{name}</h2>
            <h2  className="block mt-5 text-2xl font-bold text-gray-800 transition-colors duration-300 transform" tabindex="0" role="link">What you'll learn</h2>
            {
                description.benefits.map(benefit=> <div className="flex  items-start mt-4 text-gray-700 dark:text-gray-200">
                <FaCheck className="text-sm w-1/12 md:w-auto" />
      
                <p className="px-2 w-11/12 text-sm font-bold break-words">{benefit}</p>
              </div>)
            }
             
            <h2  className="block mt-5 text-2xl font-bold text-gray-800 transition-colors duration-300 transform" tabindex="0" role="link">Description</h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{description.overview}</p>
        </div>

       
    </div>
</div>
    );
};

export default CourseDetails;