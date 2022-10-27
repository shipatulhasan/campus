import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../components/Navbar';
export const CourseContext = createContext()
const Main = () => {
    const courses = useLoaderData()
    return (
        <CourseContext.Provider value={courses}>
            <Navbar />
            <Outlet />
        </CourseContext.Provider>
    );
};

export default Main;