import React from 'react';
import img from '../asset/Faq.png'

const Faq = () => {
    return (
        <div>
            <img
                src={img}
                className=" object-cover w-full h-[70vh]"
                alt=""
            />

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
           
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Frequently asked questions
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                What do Campus courses include?
                </p>
                <p className="text-gray-700">
                Each Capus course is created, owned and managed by the instructor(s). 
                  <br />
                  The foundation of each Udemy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                    How do I take a Udemy course?
                </p>
                <p className="text-gray-700">
                you can access it by clicking on the course link place order and We will provide the private information in your mail. 
                
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                How can I pay for a course?
                </p>
                <p className="text-gray-700">
                  You can pay in via Bkash and Paypal
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                Do I have to start my course at a certain time? And how long do I have to complete it?
                </p>
                <p className="text-gray-700">
                There are no deadlines to begin or complete a course.
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
        </div>
        
    );
};


export default Faq;