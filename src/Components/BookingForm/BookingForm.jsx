import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form'
import useGuide from '../../Hooks/useGuide';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { data } from "autoprefixer";
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx'
import Swal from "sweetalert2";
const BookingForm = ({place}) => {
  const axiosSecure=useAxiosSecure()
  const {trip_title}=place
  console.log(trip_title);
    const [guides]=useGuide()
    const {user}=useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();
   const handleToSubmit= async e=>{
    e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const photoURL=e.target.photoURL.value
    const price=e.target.price.value
    const guide_name=e.target.guideName.value
    const date=e.target.date.value
    const place=trip_title
     const bookingInfo={
      name,email,photoURL,price,guide_name,date,place
     }
     await axiosSecure.post('/bookings',bookingInfo)
     .then((res)=>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Congratulation!! Your Bookings Successful",
        showConfirmButton: false,
        timer: 2500
      });
        console.log(res);
     })
     console.log(bookingInfo);
   }
   
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='w-[60%] mx-auto'>
            <form onSubmit={handleToSubmit} className="shadow-2xl p-2 bg-slate-300 mt-5" >
           <div className='flex gap-2 mb-3'>
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Tourist_Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} disabled {...register('name',{required:true})} placeholder="Tourist Name" className="input input-bordered rounded-none" />
         
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} disabled {...register('email',{required:true})} placeholder="email" className="input input-bordered rounded-none" />
         
        </div>
           </div>
           <div className='flex gap-2 mb-2'>
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Photo_URL</span>
          </label>
          <input type="url" defaultValue={user?.photoURL} disabled {...register('photoURL',{required:true})} placeholder="Tourist Photo URL" className="input input-bordered rounded-none"/>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Price</span>
          </label>
          <input type="number" {...register('price',{required:true})} placeholder="Tour Cost" className="input input-bordered rounded-none" />
          
        </div>
           </div>
           <div className='flex gap-2'>
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Date</span>
          </label>
          <DatePicker {...register('date',{required:true})} className="py-3 pe-48 ps-4  border border-gray-300 rounded-none" selected={startDate} onChange={(date) => setStartDate(date)} />
          
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Tourist_Guide</span>
          </label>
          <select className='py-3 px-8  border border-gray-300 rounded-none' {...register('guideName',{required:true})}>
            {
                guides.map(item=><option
                    key={item._id}
                    value={`${item.name}`}>{item.name}</option>)
            }
      </select>
        </div>
           </div>
        <div className="form-control mt-6">
          <button className="btn rounded-none bg-color-1 text-white hover:text-black">Book Now</button>
        </div>
    </form>
        </div>
    );
};

export default BookingForm;