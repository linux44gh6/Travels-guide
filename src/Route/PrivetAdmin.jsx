import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import { Navigate } from 'react-router-dom';

const PrivetAdmin = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin]=useAdmin()
    if(loading){
        return <div className=" flex justify-center ">
            <span className="loading loading-spinner w-20 mx-auto text-blue-600 translate-y-10"></span>
        </div>
    }
    if(user&&isAdmin){
        return children
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};


export default PrivetAdmin;