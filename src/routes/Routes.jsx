import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Shared/Category/Category";
import FoodsLayout from "../Layouts/FoodsLayout";
import Foods from "../pages/Shared/Foods/Foods";
import Blogs from "../pages/Shared/BLogs/Blogs";
import LoginLayout from "../Layouts/LoginLayout";

import Register from "../pages/Login/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "../pages/Shared/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [

            
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://golpea-burger-server-anunnecessary.vercel.app/categories/${params.id}`)
                
            },
        ]
    },{
        path: 'food',
        element: <PrivateRoute><FoodsLayout></FoodsLayout></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <Foods></Foods>
            }
        ]
    }
])

export default router;