import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAxiosPublic = () => {
    const {data:places=[]}=useQuery({queryKey:['places'],
    queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/places`)
        return res.data
    }})
    return [places]
};

export default useAxiosPublic;