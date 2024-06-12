import Swal from "sweetalert2";
import useLoadUser from "../../../Hooks/useLoadUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const AllUser = () => {
  const axiosSecure=useAxiosSecure()
    const [filter,setFilter]=useState('')
    console.log(filter)
   const [users,refetch]=useLoadUser()

    const handleToAddAdmin=(id)=>{
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
          await axiosSecure.patch(`/user/${id}`)
          .then((res)=>{
            refetch()
            console.log(res.data);
            Swal.fire({
              title: "promoted!!",
              text: "Your user promote as admin success.",
              icon: "success"
            });
          })
         
        }
      });
    }

    const handleToAccept=(item)=>{
      const name=item.name
      const email=item.email
const image="https://i.ibb.co/LYSgdQF/caption.jpg"
const about="Sabina Yasmin is a specialist in educational tours, offering informati…"
const speciality="Educational Tours"
const education="B.Ed. in Education, University of Dhaka"
const skills=''
const experience="6 years"
      const itemInfo={
          name,email,image,about,speciality,education,skills,experience
      }
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, accept it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/request/accept/${item._id}`)
          .then(async(res)=>{
            await axiosSecure.post('/guide',itemInfo)
            .then((res)=>{
              refetch()
              console.log(res.data);
              Swal.fire({
                title: "Accepted",
                text: "Request Accept successful",
                icon: "success"
              });
            })
           
          })
        }
      });
    }
    const handleToAddGuide=(id)=>{
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
          await axiosSecure.patch(`/user/guide/${id}`)
          .then((res)=>{
            console.log(res.data);
            Swal.fire({
              title: "promoted!!",
              text: "Your user promote as tourist guide success.",
              icon: "success"
            });
          })
        }
      });
    }
    return (
        <div className="px-5 mt-10">
          <div className='flex flex-col gap-2 w-40 mx-auto mb-5 mt-1'>
              <label className='text-gray-700 font-bold dark:text-white' htmlFor='category'>
                FilterBy
              </label>
              <select
              onChange={(e)=>setFilter(e.target.value)}
              value={filter}
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='user'>user</option>
                <option value='admin'>admin</option>
                <option value='guide'>guide</option>
              </select>
            </div>
          <h1 className="text-4xl font-font-1 font-semibold uppercase">Total user:{users.length}</h1>
             <table className="table">
   <thead className="bg-color-1 text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Name</th>
       <th>Email</th>
       <th>Role</th>
       <th>Request</th>
     </tr>
   </thead>
   <tbody>
       {
           users.map((item,index)=><tr  key={item._id} className="  font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                  <h1>{item.name}</h1>
                   
                 </div>
               </td>
               <td>
                {item.guide_name}
                 <br/>
                 <span className="badge badge-ghost badge-sm">{item.email}</span>
               </td>
               <th>
                {item.role?`${item.role}`:
                <div>
                  <button onClick={()=>handleToAddAdmin(item._id)} className="btn bg-color-2 text-white">add admin</button>
                  <button onClick={()=>handleToAddGuide(item._id)} className="btn bg-color-2 text-white">add Guide</button>
                </div>
                  
                }
               </th>
               <td>
                {item.status==='requested'&&<button onClick={()=>handleToAccept(item)} className="btn">{item.status}</button> 
                }
                {item.status==='accepted'&&item.role==='guide'&&<p className="bg-green-700 text-center p-1 text-white">Accepted</p> 
                }
               </td>
             </tr>)
       }  
   </tbody>
 </table>
        </div>
    );
};

export default AllUser;