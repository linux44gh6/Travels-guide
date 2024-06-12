
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
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import AllUser from "../Pages/Dashboard/Alluser/AllUser";
import AddPackages from "../Pages/Dashboard/AddPackages/AddPackages";
import GuideProfile from "../Pages/Dashboard/GuideProfile/GuideProfile";
import TourType from "../Components/TourType/TourType";
import TourTypeCard from "../Pages/Home/TourTypeCard";
import PrivetRoute from "./PrivetRoute";
import RequestToAdmin from "../Pages/Dashboard/RequestToAdmin/RequestToAdmin";
import AssaignedTours from "../Pages/Dashboard/MyAssignedTours/AssaignedTours";
import StoryDetails from "../Components/StoryDetails/StoryDetails";
import PrivetAdmin from "./PrivetAdmin";

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
        element:<PrivetRoute><Details></Details></PrivetRoute>,
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
        element:<PrivetRoute><GuideDetails></GuideDetails></PrivetRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/guide/${params.id}`)
      },
      {
        path:'/tourPlace/:type',
        element:<TourTypeCard></TourTypeCard>,
        loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/place/${params.type}`)
      },{
        path:'/storyDetails/:id',
        element:<PrivetRoute><StoryDetails></StoryDetails></PrivetRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/storyDetails/${params.id}`)
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    errorElement:<Error></Error>,
    children:[
        {
          path:'/dashboard/userProfile',
          element:<UserProfile></UserProfile>
        },
        {
          path:'/dashboard/myBookings',
          element:<MyBookings></MyBookings>
        },
        {
          path:'/dashboard/wishList',
          element:<WishList></WishList>
        },
        {
          path:'/dashboard/adminProfile',
          element:<PrivetAdmin><AdminProfile></AdminProfile></PrivetAdmin>
        },
        {
          path:'/dashboard/user',
          element:<PrivetAdmin><AllUser></AllUser></PrivetAdmin>
        },
        {
          path:'/dashboard/addPackage',
          element:<PrivetAdmin><AddPackages></AddPackages></PrivetAdmin>
        },
        {
          path:'/dashboard/guideProfile',
          element:<GuideProfile></GuideProfile>
        },
        {
          path:'/dashboard/request',
          element:<RequestToAdmin></RequestToAdmin>
        },
        {
          path:'/dashboard/myAssignTour',
          element:<AssaignedTours></AssaignedTours>
        }
    ]
    
  },
  
]);

export default router;