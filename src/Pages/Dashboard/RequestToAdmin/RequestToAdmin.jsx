import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RequestToAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data,refetch}=useQuery({queryKey:['user'],queryFn:async()=>{
        const res=await axiosSecure.get(`/findUser/${user?.email}`)
        return res.data
    }})
    console.log(data)
    
    const handleToRequest=async()=>{
        const email=user?.email
        // const info={
        // name,photoURL,contact_info:email
        // }
       
        await axios.patch(`${import.meta.env.VITE_BASE_URL}/request/${email}`)
        .then((res)=>{
            refetch()
            Swal.fire({
                title: "Requested",
                text: "Your Request as tourist guide success.",
                icon: "success"
              });
        })
    }
    return (
        <div className="mt-10">
            <p className="text-lg text-center">Do you want to be a tour guide?</p>
            <div className="flex justify-center">
                {data?.status==='requested'? <button disabled onClick={handleToRequest} className="btn bg-color-1 text-white rounded-none hover:text-black">{data.status}</button>: <button onClick={handleToRequest} className="btn bg-color-1 text-white rounded-none hover:text-black">Request To Admin</button>

                }
           
            </div>
        </div>
    );
};

export default RequestToAdmin;