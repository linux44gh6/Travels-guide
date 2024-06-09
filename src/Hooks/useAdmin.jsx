import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';
const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:isAdmin,isPending}=useQuery({queryKey:[user?.email,'admin',],queryFn:async()=>{
        const res=await axiosSecure.get(`/user/admin/${user?.email}`)
        console.log(res.data);
        return res.data?.admin
    }})
    return [isAdmin,isPending]
};

export default useAdmin;