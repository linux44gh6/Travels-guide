import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AdminProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
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
        </div>
    );
};

export default AdminProfile;