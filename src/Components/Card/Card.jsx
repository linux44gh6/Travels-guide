import PropTypes from 'prop-types'
import { FaHeart } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Card = ({item}) => {
	const {user}=useContext(AuthContext)
	const email=user?.email
	const {trip_title,image1,price,tour_type,_id}=item
	const axiosSecure=useAxiosSecure()
	const handleToAdd=async()=>{
		const itemInfo={
			trip_title,price,tour_type,id:_id,email
		}
		await axiosSecure.post('/wishList',itemInfo)
		.then(()=>{
			Swal.fire({
				position: "top-center",
				icon: "success",
				title: "Item add to wishList",
				showConfirmButton: false,
				timer: 1500
		});
		})
	}
   
    return (
        <div>
           <div className="rounded-md shadow-md group dark:bg-gray-50 dark:text-gray-800">
	
	<img src={image1} alt="" className="object-cover group-hover:scale-110 transition ease-in-out duration-300 object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3 bg-color-1 text-white">
		<div className="flex  justify-between">
			<div className="flex items-center space-x-3">
				<h1 className="text-xl font-semibold font-font-1">{trip_title}</h1>
			</div>
			<button type="button" title="Bookmark post" className="flex justify-center items-center">
				<FaHeart onClick={handleToAdd} className="text-3xl hover:scale-110 transition hover:text-color-2"></FaHeart>
			</button>
		</div>
        
		<div className="flex flex-wrap items-center pt-3 pb-1">
			<div className="flex items-center justify-between gap-10 w-full">
				<h1 className=" font-font-  capitalize font-semibold flex items-cente gap-2"><GiHiking className="text-3xl"></GiHiking>{tour_type}</h1>
                <h1 className=" font-font-  capitalize font-semibold">price:<span className="text-color-2 font-semibold">{price}</span></h1>
			</div>
		</div>
		<div className="w-full">
			<NavLink to={`/details/${item._id}`}>
			<button className="btn w-full bg-color-1 rounded-none text-white hover:bg-color-1 capitalize">view Package</button>
			</NavLink>
    
		</div>
	</div>
</div>
        </div>
    );
};

 Card.propTypes={
    item:PropTypes.object
 }
 
export default Card;