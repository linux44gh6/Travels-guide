import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLoadUser = () => {
    const {data:users=[],refetch}=useQuery({queryKey:['users'],queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/user`)
        return res.data
    }})
    return [users,refetch]
};

export default useLoadUser;