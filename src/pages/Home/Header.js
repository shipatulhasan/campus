import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../asset/hero.jpg'
import shape from '../../asset/hero-shape.png'

const Header = () => {
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
          <div className="flex flex-col md:min-h-[35vh] lg:min-h-[76vh] justify-center w-2/3 lg:w-full max-w-2xl px-4 xl:mb-0 lg:pl-16 xl:w-4/6">
            <div>
              <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-slate-800 md:text-6xl sm:leading-none">
              
                We’re Best Online
                Campus 2022
              
              </h2>
              <p className=" mb-4 text-base text-slate-800 md:text-lg">
                Don't waste your valuable time. Just pick one course and start learning. What's in life?
              </p>
              <div className='md:flex space-y-8 md:space-y-0 gap-5 mt-10'>
              <Link
                href="/"
                aria-label=""
                className="inline-flex text-base items-center font-semibold tracking-wider transition-colors duration-200 bg-slate-100 bg-opacity-40 text-slate-800 px-4 py-1 border-4 border-transparent ring-blue-700 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800"
              >
                Get started
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
              <Link
                href="/"
                aria-label=""
                className="inline-flex text-base items-center font-semibold tracking-wider transition-colors duration-200 bg-blue-700 border-4 border-blue-700 hover:border-slate-100  text-slate-100 px-4 py-1 ring-blue-700 ring-4 rounded-full hover:bg-slate-100 hover:text-slate-800"
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
      
    </div>
    );
};

export default Header;