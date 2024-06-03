import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form'
import useGuide from '../../Hooks/useGuide';
const BookingForm = () => {
    const [guides]=useGuide()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='w-[60%] mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl p-2 bg-slate-300 mt-5" >
           <div className='flex gap-2 mb-3'>
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Tourist_Name</span>
          </label>
          <input type="text" {...register('name',{required:true})} placeholder="Tourist Name" className="input input-bordered rounded-none" />
          {errors.name?.type === "required" && (
        <p role="alert" className="text-red-600">Name is required</p>
      )}
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Email</span>
          </label>
          <input type="email" {...register('email',{required:true})} placeholder="email" className="input input-bordered rounded-none" />
          {errors.email?.type === "required" && (
        <p role="alert" className="text-red-600">Name is required</p>
      )}
        </div>
           </div>
           <div className='flex gap-2 mb-2'>
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Photo_URL</span>
          </label>
          <input type="url" {...register('photoURL',{required:true})} placeholder="Tourist Photo URL" className="input input-bordered rounded-none"/>
          {errors.photoURL?.type === "required" && (
        <p role="alert" className="text-red-600">Tourist Photo is required</p>
      )}
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Price</span>
          </label>
          <input type="number" {...register('price',{required:true})} placeholder="Tour Cost" className="input input-bordered rounded-none" />
          {errors.price?.type === "required" && (
        <p role="alert" className="text-red-600">Price is required</p>
      )}
        </div>
           </div>
           <div className='flex gap-2'>
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Date</span>
          </label>
          <DatePicker {...register('date',{required:true})} className="py-3 pe-48 ps-4  border border-gray-300 rounded-none" selected={startDate} onChange={(date) => setStartDate(date)} />
          {errors.date?.type === "required" && (
        <p role="alert" className="text-red-600">Tour Date is required</p>
      )}
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-xl font-semibold">Tourist_Guide</span>
          </label>
          <select className='py-3 px-8  border border-gray-300 rounded-none' {...register('guideName',{required:true})} {...register("Title", { required: true })}>
            {
                guides.map(item=><option
                    key={item._id}
                    value={`${item.name}`}>{item.name}</option>)
            }
      </select>
      {errors.guideName?.type === "required" && (
        <p role="alert" className="text-red-600">Guide Name is required</p>
      )}
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