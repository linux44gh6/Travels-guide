import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";

const RequestToAdmin = () => {
    const {user}=useContext(AuthContext)
    const handleToRequest=async()=>{
        const email=user?.email
        // const info={
        // name,photoURL,contact_info:email
        // }
       
        await axios.patch(`${import.meta.env.VITE_BASE_URL}/request/${email}`)
        .then((res)=>{
            console.log(res);
        })
    }
    return (
        <div className="mt-10">
            <p className="text-lg text-center">Do you want to be a tour guide?</p>
            <div className="flex justify-center">
            <button onClick={handleToRequest} className="btn bg-color-1 text-white rounded-none hover:text-black">Request To Admin</button>
            </div>
        </div>
    );
};

export default RequestToAdmin;