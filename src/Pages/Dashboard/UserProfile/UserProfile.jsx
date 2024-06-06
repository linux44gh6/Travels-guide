import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
    const {user}=useContext(AuthContext)
    const handleToRegister=e=>{
        
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
            <div className="border-t mt-5">
                <h1 className="text-4xl font-font-1 uppercase font-semibold">Add story</h1>

                <div>
                <form className="card-body" onSubmit={handleToRegister}>
      <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-xl text-white">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-xl text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-xl text-white">PhotoURL</span>
          </label>
          <input type="url" name='url' placeholder="Your PhotoURL" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-xl text-white">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-color-1 text-white hover:text-black rounded-none">Register</button>
        </div>
       <p className=' text-white'>Already have Account?<NavLink to='/login' className='text-xl underline'>Login</NavLink></p>
      </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;