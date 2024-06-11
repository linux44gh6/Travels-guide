import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const MyBookings = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:bookings=[],refetch}=useQuery({queryKey:['booking'],queryFn:async()=>{
        const res=await axiosSecure.get(`/bookings/${user?.email}`)
        return res.data
    }})
    console.log(bookings);

    const  handleToCancel=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/bookings/${id}`)
          .then(async(res)=>{
              refetch()
              console.log(res.data);
              Swal.fire({
                title: "Cancel",
                text: "Your Tour Cancel successful",
                icon: "success"
              });
           
          })
        }
      });
    }
    return (
        <div className="px-5 mt-10">
          <h1 className="text-3xl font-font-1 uppercase">Total bookings:({bookings.length})</h1>
             <table className="table">
   
   <thead className="bg-color-1 text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Place</th>
       <th>Tourist_Guide</th>
       <th>Price</th>
       <th>Date</th>
       <th>status</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
       {
           bookings.map((item,index)=><tr  key={item._id} className="font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                  <h1>{item.place}</h1>
                   
                 </div>
               </td>
               <td>
                {item.guide_name.split(',')[0]}
                 
               </td>
               <td>${item.price}</td>
               <th>
                <h1>{(item.date).slice(0,10)}</h1>
               </th>
               <th>
                <h1>{item.status}</h1>
               </th>
               <th>
                {item.status==='accept'?<button className="btn">pay</button>
               :
               <button onClick={()=>handleToCancel(item._id)} className="btn">Cancel</button>

                }
               </th>
              
             </tr>)
       }  
   </tbody>
 </table>
        </div>
    );
};

export default MyBookings;