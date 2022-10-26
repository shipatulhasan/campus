import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Home from "../../pages/Home/Home"
import Login from "../../pages/FormPages/Login";
import Registration from "../../pages/FormPages/Registration";
import ResetPass from "../../pages/FormPages/ResetPass";

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