import { NavLink } from "react-router-dom";

const TourType = () => {
    return (
       <div className="mt-20">
         <div className="tourTypeBG h-[80vh] w-full  bg-fixed">
         <h1 className="text-center text-5xl font-font-1 font-extrabold pt-10 text-white">Our Tour Type</h1>
              <div className="flex justify-center items-center gap-6 mt-16">
             <NavLink to='/tourPlace/hiking'>
             <div className="bg-[#88838366] w-40 h-40 rounded-full btn hover:bg-color-1 hover:text-white">
                <h1 className="text-center  text-3xl text-white uppercase">hiking</h1>
                </div>
             </NavLink>
              <NavLink to='/tourPlace/sports'>
              <div className="bg-[#88838366] w-40 h-40 rounded-full btn hover:bg-color-1 hover:text-white">
                <h1 className="text-center  text-3xl text-white uppercase">sport</h1>
                </div>
              </NavLink>
              <NavLink to='/tourPlace/walking'>
              <div className="bg-[#88838366] w-40 h-40 rounded-full btn hover:bg-color-1 hover:text-white">
                <h1 className="text-center  text-3xl text-white uppercase">walking</h1>
                </div>
              </NavLink>
              </div>
        </div>
       </div>
    );
};

export default TourType;