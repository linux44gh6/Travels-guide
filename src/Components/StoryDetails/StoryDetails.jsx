import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaFacebookMessenger } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    FacebookShareCount
  } from "react-share";
import StoryCard from "../StoryCard/StoryCard";
const StoryDetails = () => {
    const story=useLoaderData()
    const{photoURL,
        userName,
        userPhoto,
        about}=story
    console.log(
        story
    )
    const {data:stor1=[]}=useQuery({queryKey:['story'],queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/allStory`)
        return res.data
    }})
    return (
        <div className="px-10">
            <img className="w-1/2" src={photoURL} alt="" />
            <p className="font-font-1 text-lg">{about}</p>
            <div className="flex items-center gap-5">
                <img className="w-20 rounded-full h-20" src={userPhoto} alt="" />
                <h1 className=" font-semibold capitalize">{userName}</h1>
            </div>
            <h1 className="mt-3 font-semibold capitalize">share Now</h1>
            <div className="flex gap-2">
           <FacebookShareButton url="facebook.com">
           <FacebookIcon className="rounded-full"></FacebookIcon>
           </FacebookShareButton>
           <TwitterShareButton url="twitter.com">
                <TwitterIcon className="rounded-full"></TwitterIcon>
           </TwitterShareButton>
            <TelegramShareButton url="telegram.com">
                <TelegramIcon
                className="rounded-full"></TelegramIcon>
                 </TelegramShareButton>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                {
                    stor1.map(item=><StoryCard
                    item={item}
                    ></StoryCard>)
                }
            </div>
        </div>
    );
};

export default StoryDetails;