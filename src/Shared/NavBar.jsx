import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/assistant-svgrepo-com (1).svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleToLogOut=()=>{
    logOut()
    .then(()=>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "LogOut successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
    const navOption=<>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Home</NavLink></li>
    <li><NavLink to='/community' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Community</NavLink></li>
    <li><NavLink to='/blogs' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Blogs</NavLink></li>
    <li><NavLink to='/about' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>About Us</NavLink></li>
    <li><NavLink to='/contact' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Contact Us</NavLink></li>
   {user?<div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className=" m-1">
    <img className=' rounded-full border border-white p-1 w-10' src={user?.photoURL} alt="" />
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1]  menu p-2 shadow bg-color-1 bg-opacity-50 text-white rounded-sm mt-5 w-52  transition ease-in-out duration-900">
    <li><p>{user?.displayName}</p></li>
    <li><p>{user?.email}</p></li>
    <li><Link to='/dashboard' className='text-lg hover:border border-white font-semibold'>Dashboard</Link></li>
    <li><Link className='text-lg hover:border border-white font-semibold' onClick={handleToLogOut}>Log Out</Link></li>
  </ul>
</div>: 
   
   <div className='flex'>
    <li><NavLink to='/login' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Login</NavLink></li><span className='text-white'>/</span>
    <li><NavLink to='/register' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Register</NavLink></li>
    </div>

   }
    </>
    return (
        <div>
            <div className="navbar bg-color-1 sticky z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-font-2 text-white"><span><img className='w-10' src={logo} alt="" /></span>GlobeGazer</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex items-center gap-6 menu-horizontal px-1">
      {navOption}
       
    </ul>
    
  </div>

</div>
        </div>
    );
};

export default NavBar;