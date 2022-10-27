import React from "react";
import { IoSchoolOutline, IoDocumentAttachOutline } from "react-icons/io5";
import { FaRegClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {id, img, name, short_description, price, students, lesson, duration, instructor, ratings } =
    course;

  return (
      <Link to = {`/course-details/${id}`}>
    <div className="w-full h-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg shadow-slate-300 flex flex-col justify-between">
      <div className="card-header">
        <img className="p-5 w-full h-56 rounded-3xl" src={img} alt="avatar" />
        <div className="px-6 py-4">
          <h1
            className="text-xl font-semibold text-gray-800 dark:text-white"
            title={name}
          >
            {name.length > 50 ? name.slice(0, 30) + ". . ." : name}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            {short_description.length > 100
              ? short_description.slice(0, 50) + ". . ."
              : short_description}
          </p>
          <div className="flex justify-between items-center">
          

          <p className="py-2 text-slate-700 dark:text-gray-400">
              <span className="font-bold">Insturctor: </span>
              {instructor}
          </p>
          <p className="py-2 text-orange-600 font-bold dark:text-gray-400">
              {ratings}<sup className="inline-flex w-4 h-4"><FaStar  /></sup>
             
          </p>
          </div>
          <p className="py-2 text-gray-700 font-bold text-xl">
          <span className="font-bold text-blue-700">Price: </span>
              ${price}
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-cente px-6 pb-4">
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <IoSchoolOutline className="h-6 w-6" />

          <h1 className="px-2 text-sm font-bold">{students}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <IoDocumentAttachOutline className="h-5 w-5" />

          <h1 className="px-2 text-sm font-bold">{lesson}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <FaRegClock className="h-5 w-5" />

          <h1 className="px-2 text-sm font-bold">{duration}</h1>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
