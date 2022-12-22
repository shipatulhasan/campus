import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Home from "../../pages/Home/Home"
import Login from "../../pages/FormPages/Login";
import Registration from "../../pages/FormPages/Registration";
import ResetPass from "../../pages/FormPages/ResetPass";
import Error from "../../pages/Error";
import SingleCourse from "../../pages/SingleCourse/SingleCourse";
import Courses from "../../pages/Courses/Courses";
import BlogPage from "../../pages/Blog/BlogPage";
import PrivateRoute from "../../components/Routes/PrivateRoute";
import Checkout from "../../pages/Checkout";
import Faq from "../../pages/Faq";
import UserProfile from "../../pages/UserProfile";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<Error />,
        loader:()=>fetch('https://campus-data-server.vercel.app/courses'),
        children:[
            {
                path:'/', 
                element:<Home />
            },
            {
                path:'/course-details/:id',
                element:<SingleCourse />,
                loader:({params})=>fetch(`https://campus-data-server.vercel.app/course-details/${params.id}`)
            },
            {
                path:'/courses',
                element:<Courses />
            },
            {
                path:'/blog',
                element:<BlogPage />
            },
            {
                path:'/checkout/:id',
                loader: ({params})=>fetch(`https://campus-data-server.vercel.app/course-details/${params.id}`),
                element:<PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path:'/faq',
                element:<Faq />
            },
            {
                path:'/profile',
                element:<PrivateRoute><UserProfile /></PrivateRoute>
            }
        ]
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/registration',
        element:<Registration />
    },
    {
        path:'/reset-password',
        element:<ResetPass />
    }
])