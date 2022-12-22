import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({review}) => {
    const {img,details,name,position} = review
    return (
        <div className={`p-5 mx-5 rounded `}>
        

        <div className='flex justify-between items-center'>
        <div className="flex">
          <img
            className="object-cover w-14 h-14 mr-4 rounded-full shadow  border-2 border-transparent ring-khaki ring-2"
            src={img}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg  font-bold">{name}</p>
            <p className="text-sm ">{position}</p>
          </div>
        </div>
        <div>
        </div>
     
        </div>

        <div className=' pt-5'>
        <p className="text-sm tracking-wide">
              {details}
            </p>
            <p className='py-5 flex text-pink-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
        </div>
      </div>
    );
};

export default Review;