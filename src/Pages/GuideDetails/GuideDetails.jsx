import { useLoaderData } from "react-router-dom";
import { MdOutlineCastForEducation, MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Comment from "../../Components/Comment/Comment";
const GuideDetails = () => {
    const {user}=useContext(AuthContext)
    const guide = useLoaderData()
    console.log(guide);
    const { image, name, education, about, skills, speciality, experience
    ,_id} = guide
    const {data:reviews=[],refetch}=useQuery({queryKey:['review'],queryFn:async()=>{
        const res=await axiosSecure.get(`/review/${_id}`)
        return res.data
    }})
    console.log(reviews);
        const axiosSecure=useAxiosSecure()
    const handleToComment=async(e)=>{
        e.preventDefault()
        const form=e.target 
        const rating=form.rating.value
        const comment=form.comment.value
        const id=_id
        const displayName=user?.displayName
        const photoURL=user?.photoURL
        console.log(rating,comment);
        const review={
            rating,comment,displayName,photoURL,id
        }
        console.log(review);
        const res=await axiosSecure.post('/review',review)
        .then(res=>{
            refetch()
            console.log(res.data);
        })
        
    }
    return (
        <div>
            <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row ">
                    <img src={image} alt="" className="self-center w-[400px]  border md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col ">
                        <h4 className="text-4xl font-semibold text-center font-font-1 md:text-left">{name}</h4>
                        <p className="text-lg font-font-2 text-gray-500">{speciality}</p>
                        <p className="flex items-center gap-1 font-semibold"><span className="text-2xl"><MdOutlineCastForEducation></MdOutlineCastForEducation></span>{education}</p>
                        <p className="dark:text-gray-600  text-lg text-gray-700 mb-1">{about}</p>
                        <p className='font-semibold text-2xl font-font-1'>Experience:<span className="text-lg ">{experience}</span></p>
                        <h4 className="font-semibold underline font-font-1 text-2xl">Skills</h4>
                        <ul className="font-semibold">
                            {
                                skills.map((skill, idx) => <li key={idx}>{idx + 1}.{skill}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center pt-4 space-x-4 align-center">
                    <FaFacebook className="text-2xl text-blue-600"></FaFacebook>
                    <FaInstagram className="text-2xl tex-purple-900 "></FaInstagram>
                    <MdOutlineEmail className="text-2xl text-red-400 "></MdOutlineEmail>
                    <FaTwitter className="text-2xl text-blue-500"></FaTwitter>
                </div>
            </div>
            <div className="lg:px-10">
                <h1 className="text-4xl font-font-1 border-b-2 border-gray-300">Review({reviews.length})</h1>
                <div>
                    {
                        reviews.map(review=><Comment
                        key={review._id}
                        review={review}
                        ></Comment>)
                    }
                </div>
                <div className="mt-5 border-t-2">
                    <form className="flex gap-3 mt-2" onSubmit={handleToComment}>
                        <label for="rating" className="text-2xl">Rating:</label>
                        <select defaultValue='value' name="rating" id="rating">
                            <option value='give Rating'>Give Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <textarea placeholder="Your comment" name="comment" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                        <div className="flex justify-around translate-y-14 -translate-x-28">
                        <input type="submit" className="btn  bg-color-1 text-white hover:text-black" value="comment" />
                    </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default GuideDetails;