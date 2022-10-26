import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSignOut } from "react-icons/go";
import brand from '../asset/brand/logo.png'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="lg:absolute z-10 w-full bg-white  dark:bg-gray-800">
        <div className="container px-6 py-1 mx-auto  lg:my-3 rounded">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <Link
                  to="/"
                >
                <img className='w-1/2' src={brand} alt="" />
                </Link>
              </div>
  
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setOpen(!isOpen)}
                  type="button"
                  className="text-slate-800 text-lg dark:text-gray-200 hover:text-slate-700 dark:hover:text-gray-400 focus:outline-none focus:text-slate-700 dark:focus:text-slate-200"
                  aria-label="toggle menu"
                >
                    {
                       !isOpen ?
                       <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                  :
                  
                  <svg
                    
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  }
                  
  
                </button>
              </div>
            </div>
  
            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-10">
                <Link
                  to="/"
                  className="px-3 py-2 mx-6 lg:mr-2 mt-2 text-slate-800 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-500 dark:hover:bg-gray-700"
                >
                  Join Slack
                </Link>
                <Link
                  to="/"
                  className="px-3 py-2 mx-6 lg:mr-2 mt-2 text-slate-800 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-500 dark:hover:bg-gray-700"
                >
                  Browse Topics
                </Link>
                <Link
                  to="/"
                  className="px-3 py-2 mx-6 lg:mr-2 mt-2 text-slate-800 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-500 dark:hover:bg-gray-700"
                >
                  Random Item
                </Link>
                <Link
                  to="/"
                  className="px-3 py-2 mx-6 lg:mr-2 lg:ml-0 mt-2 text-slate-800 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-slate-500 dark:hover:bg-gray-700"
                >
                  Experts
                </Link>
              </div>
  
              <div className="flex items-center mt-4 lg:mt-0 gap-2 ">
                
              <div class="w-12 h-12 overflow-hidden border-2 border-white ring-4 ring-blue-700 rounded-full hover:cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" class="object-cover w-full h-full" alt="avatar" title='Shakib' />
                </div>
                <Link to="/" class="flex items-center p-3 text-sm text-slate-800 font-semibold capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-slate-800">
            <GoSignOut className='text-xl text-slate-800'/>

            <span class="mx-1">
                Sign Out
            </span>
        </Link>
  
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;