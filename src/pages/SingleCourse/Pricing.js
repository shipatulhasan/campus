import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pricing = ({course}) => {
    const { price, lesson, duration, instructor } = course;
    return (
        <div class="px-4 py-4 mr-3 md:-mt-10 bg-slate-50 border border-slate-300 shadow-xl ">

        <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">${price}</h4>
        
        <p class="mt-4 text-gray-800 dark:text-gray-300"><span className="font-bold">Insturctor: </span>
              {instructor}
              </p>
        <p class="mt-4 text-gray-800 dark:text-gray-300"><span className="font-bold">Lesson: </span>
              {lesson}
              </p>
        <p class="mt-4 text-gray-800 dark:text-gray-300"><span className="font-bold">Duration: </span>
              {duration}
              </p>


              <Link
                to="/"
                aria-label=""
                className="inline-flex mt-10 text-base items-center font-semibold tracking-wider transition-colors duration-200 bg-slate-100 bg-opacity-40 text-slate-800 px-4 py-1 border-4 border-transparent ring-blue-700 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800"
              >
                Place an order
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
              <Link
                to="/"
                aria-label=""
                className="mt-6 inline-flex text-base items-center gap-2 font-semibold tracking-wider transition-colors duration-200 bg-blue-700 border-4 border-blue-700 hover:border-slate-100  text-slate-100 px-4 py-1 ring-blue-700 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800"
              >
                  <FaFileDownload />
                Download pdf
              
              </Link>
    </div>
    );
};

export default Pricing;