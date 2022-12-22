import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import cover from '../asset/cover.jpg'

const UserProfile = () => {
    const {user} = useContext(AuthContext)
  const handleSubmit = () => {};
  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white dark:bg-gray-800">
        <div className="container w-10/12 mx-auto bg-white dark:bg-gray-800 rounded pb-10">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Profile
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src={cover}
                  alt=""
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                
                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue={user?.displayName}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-800 text-gray-800 dark:text-gray-400"
                  placeholder="@example"
                />
              </div>
              <div className="mt-5 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="email"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-800 text-gray-800 dark:text-gray-400"
                  
                />
              </div>
              <div className="mt-5 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="photoUrl"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Photo Url
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue={user?.photoURL}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-800 text-gray-800 dark:text-gray-400"
                  placeholder="@example"
                />
              </div>
              <button
                aria-label="update account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-blue-700 border rounded hover:bg-blue-900 py-3 px-8 mt-5"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserProfile;
