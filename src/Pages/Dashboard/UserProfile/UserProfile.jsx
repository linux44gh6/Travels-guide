import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UserProfile = () => {
    const {user}=useContext(AuthContext)
    const handleToRegister= async e=>{
        e.preventDefault()
        const form=e.target
        const photoURL=form.url.value
        const place_name=form.name.value
        const about=form.details.value
        const userPhoto=user?.photoURL
        const userName=user?.displayName
        const story={
          photoURL,about,userPhoto,userName,place_name
        }
        const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/story`,story)
        .then((res)=>{
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          console.log(res.data)
        })
    }
    return (
        <div className="px-5 mt-10">
            <div className="flex gap-10 space-y-1">
                <div>
                    <img className="w-60 rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div>
                <div>
                <h1 className="text-4xl font-font-1 font-bold">{user?.displayName}</h1>
                    <h1 className="btn text-green-600">Active</h1>
                    <h2 className="text-lg font-semibold">{user?.email}</h2>
                </div>
                <div>
                    
                </div>
                </div>
                
            </div>
            <div className="border-t mt-2">
                <h1 className="text-4xl font-font-1 uppercase font-semibold">Add story</h1>

                <div className="-translate-y-8">
                <form className="card-body" onSubmit={handleToRegister}>
     <div className="flex gap-3">
     </div>
        <div className="gap-3 flex">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text lg:text-xl ">Tour Place</span>
          </label>
          <input type="text" name='name' placeholder="Your tour place name" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text lg:text-xl "> Story PhotoURL</span>
          </label>
          <input type="url" name='url' placeholder="Your PhotoURL" className="input input-bordered rounded-none" required />
        </div>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text lg:text-xl ">Write about your story</span>
          </label>
          <textarea name="details" placeholder="My Story" className="textarea textarea-bordered textarea-3xl w-full" ></textarea>
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn bg-color-1 text-white hover:text-black rounded-none">Submit</button>
        </div>
      </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;