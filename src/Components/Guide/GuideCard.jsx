import PropTypes from 'prop-types'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const GuideCard = ({item}) => {
    const {image,name,about}=item
    console.log(item);
    return (
        <div className="group">
        <div className="card card-compact w-96 bg-base-100 h-[400px] shadow-xl rounded-none p-0 group:">
  <figure><img className='h-[200px] group-hover:scale-110 transition ease-in-out duration-300' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='flex justify-between items-center border-b border-gray-400'>
    <h2 className="card-title font-font-1 font-semibold">{name}</h2>
    <div className='flex items-center gap-2'>
        <FaFacebook className='text-xl text-blue-600 cursor-pointer'></FaFacebook>
       <FaInstagram className='text-2xl text-[#881216] cursor-pointer'></FaInstagram>
         <FaTwitter className='text-2xl text-blue-500 cursor-pointer'></FaTwitter>
     </div>
    </div>
    <p className='text-left font-semibold text-gray-500'>{about}</p>
    <div className="card-actions justify-en">
      <button className="btn border-color-1 rounded-none hover:text-white hover:bg-color-1"> Details</button>
    </div>
  </div>
</div>
        </div>
    );
};
 
GuideCard.propTypes={
    item:PropTypes.object
}
export default GuideCard;