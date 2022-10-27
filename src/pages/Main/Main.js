import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar';
import Footer from '../Footer';
export const CourseContext = createContext()
const Main = () => {
    const courses = useLoaderData()
    return (
        <CourseContext.Provider value={courses}>
            <Navbar />
            <Outlet />
            <Footer />
        </CourseContext.Provider>
    );
};

export default Main;