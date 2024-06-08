import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddPackages = () => {
    const axiosSecure=useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleToSubmit= async e=>{
        e.preventDefault()
        const trip_title=e.target.name.value
        const about=e.target.about.value
        const image1=e.target.photoURL1.value
        const image2=e.target.photoURL1.value
        const image3=e.target.photoURL1.value
        const price=e.target.price.value
        const tour_type=e.target.type.value
        const day1=e.target.day1.value
        const day2=e.target.day2.value
        const tour_plan=[{day:1,
          activities:day1},{day:2,activities:day2}]
         const itemInfo={
          trip_title,about,image1,image2,image3,price,tour_type,tour_plan
         }
         console.log(itemInfo);
         await axiosSecure.post('/places',itemInfo)
         .then((res)=>{
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Congratulation!! Your item added Successful",
            showConfirmButton: false,
            timer: 2000
          });
            console.log(res.data);
         })
       }
    return (
        <div className='w-[80%] mx-auto mt-5'>
            <h1 className="text-4xl font-font-1 text-center font-bold">Add Packages</h1>
        <form onSubmit={handleToSubmit} className="shadow-2xl p-2 bg-slate-300 mt-5" >
       <div className='flex gap-2 mb-3'>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Trip Title</span>
      </label>
      <input type="text"{...register('name',{required:true})} placeholder="Trip Title" className="input input-bordered rounded-none" />
     
    </div>
    <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Price</span>
      </label>
      <input type="number"  {...register('price',{required:true})} placeholder="trip price" className="input input-bordered rounded-none" />
     
    </div>
       </div>
       <div className='flex gap-2 mb-2'>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Photo_URL-1</span>
      </label>
      <input type="url"  {...register('photoURL1',{required:true})} placeholder="Tourist Photo URL" className="input input-bordered rounded-none"/>
    </div>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Photo_URL-2</span>
      </label>
      <input type="url"  {...register('photoURL2',{required:true})} placeholder="Tourist Photo URL" className="input input-bordered rounded-none"/>
    </div>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Photo_URL-3</span>
      </label>
      <input type="url"  {...register('photoURL3',{required:true})} placeholder="Tourist Photo URL" className="input input-bordered rounded-none"/>
    </div>
       </div>
       <div className='flex gap-2'>
       
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Tour_Type</span>
      </label>
      <select {...register('type',{required:true})} className="select select-bordered w-full max-w-xs">
  <option disabled selected>what is type?</option>
  <option>sports</option>
  <option>hiking</option>
  <option>walking</option>
</select>
    </div>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Tour_Plan-Day-1</span>
      </label>
      <textarea {...register('day1',{required:true})} className="textarea textarea-bordered" placeholder="day-1"></textarea>
    </div>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">Tour_Plan-Day-2</span>
      </label>
      <textarea {...register('day2',{required:true})} className="textarea textarea-bordered" placeholder="day-2"></textarea>
    </div>
       </div>
       <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text text-xl font-semibold">About</span>
      </label>
      <textarea {...register('about',{required:true})} className="textarea textarea-bordered" placeholder="about the place"></textarea>
    </div>
    <div className="form-control mt-6">
      <button className="btn rounded-none bg-color-1 text-white hover:text-black">Book Now</button>
    </div>
</form>
    </div>
    );
};

export default AddPackages;