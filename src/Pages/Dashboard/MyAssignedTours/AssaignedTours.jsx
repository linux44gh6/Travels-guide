import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import UseBookings from '../../../Hooks/UseBookings';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AssaignedTours = props => {
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const email=user?.email
    const [bookings,refetch]=UseBookings()
    console.log(bookings)
    const handleToAccept=(id)=>{
        console.log(id)
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, accept it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
            await axiosSecure.patch(`/guide/accept/${id}`)
            .then(async(res)=>{
                refetch()
                console.log(res.data);
                Swal.fire({
                  title: "Accepted",
                  text: "Request Accept successful",
                  icon: "success"
                });
             
            })
          }
        });
      }

    const handleToReject=(id)=>{
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, accept it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
            await axiosSecure.patch(`/guide/reject/${item._id}`)
            .then(async(res)=>{
                refetch()
                console.log(res.data);
                Swal.fire({
                  title: "Accepted",
                  text: "Request Accept successful",
                  icon: "success"
                });
             
            })
          }
        });
      }


    return (
        <div className="px-5 mt-10">
        <h1 className="text-4xl font-font-1 font-semibold uppercase">Total Request:{bookings.length}</h1>
           <table className="table">
 <thead className="bg-color-1 text-white text-lg uppercase">
   <tr>
     <th>#</th>
     <th>Tourist Name</th>
     <th>Place</th>
     <th>Date</th>
     <th>Price</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
     {
        bookings.map((item,index)=><tr  key={item._id} className="  font-semibold text-gray-600 mt-5">
             <td>
                 {index+1}
             </td>
    
             <td>
               <div className="flex items-center gap-3">
                <h1>{item.name}</h1>
                 
               </div>
             </td>
             <td>
               <span className="badge badge-ghost badge-sm">{item.place}</span>
             </td>
             <td>
               <span className="badge badge-ghost badge-sm">{item.date}</span>
             </td>
             <td>
               <span className="badge badge-ghost badge-sm">${item.price}</span>
             </td>
             <th>
              {item.status==='In Review'?
              <div>
                <button onClick={()=>handleToAccept(item._id)} className="btn bg-color-2 text-white">Accept</button>
                <button onClick={()=>handleToReject(item._id)} className="btn bg-color-2 text-white">Reject</button>
              </div>:`${item.status}`
                
              }
             </th>
            
           </tr>)
     }  
 </tbody>
</table>
      </div>
    );
};

AssaignedTours.propTypes = {
    
};

export default AssaignedTours;