import { NavLink } from 'react-router-dom';
import bgVideo from '../../assets/3571264-uhd_3840_2160_30fps.mp4'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const {singIn}=useContext(AuthContext)
    const handleToLogin=e=>{
        e.preventDefault()
        const form=e.target 
        const email=form.email.value
        const password=form.password.value
        singIn(email,password)
        .then(()=>{
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login success",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <div className='relative h-[110vh]'>
            <video src={bgVideo} autoPlay loop muted></video>
            </div>
            <div className="hero min-h-screen  absolute top-0 left-0 w-full mt-12 lg:mt-20 pb-42 lg:p-5">
  <div className="hero-content flex-col w-full rounded-none ">
    
    <div className="card shrink-0 lg:w-1/2 shadow-2xl bg-color-1 bg-opacity-50 rounded-none">
    <div className="text-center lg:text-left">
      <h1 className=" md:text-3xl lg:text-5xl font-bold text-white text-center font-font-1">Login now</h1>
    </div>
      <form className="card-body" onSubmit={handleToLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-xl text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-xl text-white">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-color-1 text-white hover:text-black rounded-none">Login</button>
        </div>
        <div className="divider text-white">OR</div>
        <div className='flex flex-col gap-3'>
            <button className='w-full btn rounded-none'>Google</button>
            <button className='w-full btn rounded-none'>FaceBook</button>
        </div>
        <p className='text-white'>New here?<NavLink to='/register' className='text-xl underline'>Create Account</NavLink></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;