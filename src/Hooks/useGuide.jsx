import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGuide = () => {
    const {data:guides=[]}=useQuery({queryKey:['guide'],
    queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/guides`)
       return res.data
    }})
    return [guides]
};

export default useGuide;