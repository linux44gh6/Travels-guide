import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const MyBookings = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:bookings=[]}=useQuery({queryKey:['booking'],queryFn:async()=>{
        const res=await axiosSecure.get(`/bookings/${user?.email}`)
        return res.data
    }})
    console.log(bookings);
    return (
        <div>
             <table className="table">
   
   <thead className="bg-[#D1a054] text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Place</th>
       <th>Tourist_Guide</th>
       <th>Price</th>
       <th>Date</th>
       <th>status</th>
       <th>Payment</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
       {
           bookings.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                  <h1>{item.place}</h1>
                   
                 </div>
               </td>
               <td>
                {item.guide_name}
                 <br/>
                 <span className="badge badge-ghost badge-sm">{item.recipe}</span>
               </td>
               <td>${item.price}</td>
               <th>
                <h1>{(item.date).slice(0,10)}</h1>
               </th>
               <th>
                <h1>status</h1>
               </th>
               <th>
                <button className="btn">pay</button>
               </th>
               <th>
                <button className="btn">Cancel</button>
               </th>
             </tr>)
       }  
   </tbody>
 </table>
        </div>
    );
};

export default MyBookings;