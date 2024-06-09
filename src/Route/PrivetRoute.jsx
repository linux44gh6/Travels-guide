import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({children}) => {
    const location=useLocation()
    // console.log(location);
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivetRoute;