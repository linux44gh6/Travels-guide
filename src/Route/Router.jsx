
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MaiLayOut/Root";
import Home from "../Pages/Home/Home";
import AllPackages from "../Components/AllPackages/AllPackages";
import Details from "../Components/PlaceDetails/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";

   const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/allPackages',
        element:<AllPackages></AllPackages>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/places/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/guideDetails/:id',
        element:<GuideDetails></GuideDetails>,
        loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/guide/${params.id}`)
      }
    ]
  },
]);

export default router;