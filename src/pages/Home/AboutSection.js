import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../asset/about_v2_5_1.jpg'
import tinny from '../../asset/about_v2_5_2.jpg'

const AboutSection = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:pt-20">
      <div className="grid gap-10 md:grid-cols-2">
    
          <figure className="relative px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg "
              src={image1}
              alt=""
            />
            <img
              className="object-cover absolute bottom-0 md:top-20 md:bottom-0 right-[-30px] rounded border-8 border-white w-40 lg:w-auto"
              src={tinny}
              alt=""
            />
          </figure>
 
        <div className=" md:pl-8 xl:pr-0 lg:max-w-lg">
      
          <div className="max-w-2xl mb-6 space-y-6">
          <h6 className='text-blue-700 font-bold tracking-wider text-xs uppercase mb-2'>
                  Explore our courses
              </h6>
          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
          About Campus
          
          </h2>
            <p className="text-sm text-gray-700 leading-6">
            Credibly syndicate transparent interfaces and client-focused synergy. Objectively embrace revolutionary infomediaries virtual functionalities. Monotonectally myocardinate client-based processes before intermandated models prospective.
            </p>
          </div>
          <div>
          <Link
                to="/courses"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-slate-100 bg-opacity-40 text-slate-800 px-4 py-1 border-4 border-transparent ring-blue-700 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800 text-sm"
              >
                Our courses
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
        
      </div>
    </div>
    );
};

export default AboutSection;