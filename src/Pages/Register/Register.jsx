import { NavLink, useNavigate } from 'react-router-dom';
import bg from '../../assets/registerBg.mp4'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaTeamspeak } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const Register = () => {
  const [visible, setVisible] = useState(false)
  const navigate=useNavigate()
    const {createUser,updateUserProfile,logOut}=useContext(AuthContext)
    const handleToRegister=e=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value
        const email=form.email.value
        const photoURL=form.url.value
        const password=form.password.value
        if (password.length < 6) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Password should be at least 6 character",
          });
          return
      }
      else if (!/[A-Z]/.test(password)) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Password should be at least One Uppercase",
          });
          return
      }
      else if (!/[a-z]/.test(password)) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Password should be at least One Lowercase",
          });
          return
      }
     const   userInfo={
            name,email
        }
        createUser(email,password)
        .then(()=>{
                updateUserProfile(name,photoURL)
                .then(async()=>{
                   await axios.post(`${import.meta.env.VITE_BASE_URL}/user`,userInfo)
                    .then((res)=>{
                      console.log(res.data);
                      Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Registration successfull",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    })
                      logOut()
                      navigate('/login')
                })
                .erorr(err=>{
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                })
        })
        .catch(err=>{
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: `${err.message}`,
            showConfirmButton: false,
            timer: 2000
          });      
        })
    }
    return (
        <div>
          <Helmet>
            <title>GlobeGazzer|Register</title>
          </Helmet>
           <div className='h-[110vh]'>
           <video src={bg} autoPlay loop muted></video>
           </div>
            <div className="hero min-h-screen  absolute top-0 left-0 w-full mt-12 lg:mt-20 pb-42 lg:p-5">
  <div className="hero-content flex-col w-full rounded-none ">
    
    <div className="card shrink-0 lg:w-1/2 shadow-2xl bg-color-1 bg-opacity-50 rounded-none">
    <div className="text-center lg:text-left">
      <h1 className=" md:text-3xl lg:text-5xl font-bold text-white text-center font-font-1">Register now</h1>
    </div>
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
          <input type={visible ? "text" : "password"} name='password' placeholder="password" className="input input-bordered rounded-none" required />
          {
                            visible ? <FaEye className="  translate-x-[500px] -translate-y-9 text-2xl" onClick={() => setVisible(!visible)}></FaEye> : <FaEyeSlash className=" translate-x-[500px] -translate-y-9  text-2xl" onClick={() => setVisible(!visible)}></FaEyeSlash>
                        }
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-color-1 text-white hover:text-black rounded-none">Register</button>
        </div>
       <p className=' text-white'>Already have Account?<NavLink to='/login' className='text-xl underline'>Login</NavLink></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;