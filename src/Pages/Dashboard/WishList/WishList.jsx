import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const WishList = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:wishList=[],refetch}=useQuery({queryKey:['wishList'],queryFn:async()=>{
        const res=await axiosSecure.get(`/wishList/${user?.email}`)
        return res.data
    }})
   const handleToDelete=id=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            await axiosSecure.delete(`/wishList/${id}`)
            .then(()=>{
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            })
          
        }
      });
   }
    return (
        <div className="px-5 mt-10">
           <table className="table">
   <thead className="bg-color-1 text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Place</th>
       <th>Price</th>
       <th>Details</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
       {
           wishList.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                  <h1>{item.trip_title}</h1>
                   
                 </div>
               </td>
               <td>{item.price}</td>
              <td>
                <NavLink to={`/details/${item.id}`}>
                <button className="btn">view details</button>
                </NavLink>
              </td>
               <th>
                <button onClick={()=>handleToDelete(item._id)} className="btn bg-red-500 text-white"><FaTrashAlt></FaTrashAlt>
                </button>
               </th>
             </tr>)
       }  
   </tbody>
 </table>
        </div>
    );
};

export default WishList;