import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useGuideCheck = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:isGuide,isPending}=useQuery({queryKey:[user?.email,'guide',],queryFn:async()=>{
        const res=await axiosSecure.get(`/user/guide/${user?.email}`)
        console.log(res.data);
        return res.data?.guide
    }})
    return [isGuide,isPending]
};

export default useGuideCheck;