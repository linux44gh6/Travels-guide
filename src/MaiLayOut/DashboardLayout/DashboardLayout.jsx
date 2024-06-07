import { FaBook, FaHome, FaList, FaRegQuestionCircle, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row ">
            <div className=" w-full md:w-[20%] lg:w-[20%] bg-color-1 h-[100vh]">
                <h1 className="text-3xl text-white text-center uppercase font-bold">GlobeGazzer</h1>
                <div className="px-5 border-t">
                    <ul className="flex flex-col gap-4 mt-5">
    <li className=""><NavLink to='/dashboard' className={({isActive})=>isActive?'font-semibold text-[#ffbc42]  flex items-center gap-1 ':'font-semibold text-white flex items-center gap-1'}><FaUser className="text-2xl"></FaUser>My Profile</NavLink></li>
    <li className=""><NavLink to='/dashboard/myBookings' className={({isActive})=>isActive?'font-semibold text-[#ffbc42]  flex items-center gap-1 ':'font-semibold text-white flex items-center gap-1'}><FaBook className="text-2xl"></FaBook>My Bookings</NavLink></li>
    <li className=""><NavLink to='/dashboard/wishList' className={({isActive})=>isActive?'font-semibold text-[#ffbc42]  flex items-center gap-1 ':'font-semibold text-white flex items-center gap-1'}><FaList className="text-2xl"></FaList>My Wishlist</NavLink></li>
    <li className=""><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42]  flex items-center gap-1 ':'font-semibold text-white flex items-center gap-1'}><FaRegQuestionCircle className="text-2xl"></FaRegQuestionCircle>Request to Admin</NavLink></li>
               </ul>
                </div>
                <div className=" mt-5 border-t px-5">
                <ul className="mt-5">
                <li className=""><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-[#ffbc42]  flex items-center gap-1 ':'font-semibold text-white flex items-center gap-1'}><FaHome className="text-2xl"></FaHome>Home</NavLink></li>
                </ul>
               </div>
            </div>
            <div className="flex-1 bg-color h-[100vh]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;