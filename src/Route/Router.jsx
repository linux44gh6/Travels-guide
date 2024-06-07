
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
import DashboardLayout from "../MaiLayOut/DashboardLayout/DashboardLayout";
import Error from "../Components/ErrorElement/Error";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import WishList from "../Pages/Dashboard/WishList/WishList";

   const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
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
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    errorElement:<Error></Error>,
    children:[
        {
          index:true,
          element:<UserProfile></UserProfile>
        },
        {
          path:'/dashboard/myBookings',
          element:<MyBookings></MyBookings>
        },
        {
          path:'/dashboard/wishList',
          element:<WishList></WishList>
        }
    ]
    
  }
]);

export default router;