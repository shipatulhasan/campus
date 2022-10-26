import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Home from "../../pages/Home/Home"
import Login from "../../pages/FormPages/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    },
    {
        path:'/login',
        element:<Login />
    }
])