import { NavLink } from 'react-router-dom';
import logo from '../assets/assistant-svgrepo-com (1).svg'
const NavBar = () => {
    const navOption=<>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Home</NavLink></li>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Community</NavLink></li>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Blogs</NavLink></li>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>About Us</NavLink></li>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Contact Us</NavLink></li>
    <li><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42] ':'font-semibold text-white'}>Login</NavLink></li>
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
    <ul className="flex gap-6 menu-horizontal px-1">
      {navOption}
       
    </ul>
    
  </div>

</div>
        </div>
    );
};

export default NavBar;