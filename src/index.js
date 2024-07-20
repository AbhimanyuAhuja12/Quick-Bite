import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//for different paths
import About from "./components/About";
import Error from "./components/Error";
import Contact from"./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// for routing
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import { Outlet } from "react-router-dom";


const AppLayout =()=>{
    return (
    <div className="app">

     <Header />
     <Outlet />

    </div>
   
    );
};

const appRouter =createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path : "/about",
                element: <About />,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
      
    },
  
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(< RouterProvider router={appRouter}/>);