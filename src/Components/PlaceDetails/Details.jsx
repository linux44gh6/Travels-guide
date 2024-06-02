import { useLoaderData } from "react-router-dom";
import TourPlan from "../TourPlan/TourPlan";
import useGuide from "../../Hooks/useGuide";
import GuideCard from "../Guide/GuideCard";

const Details = () => {
    const place=useLoaderData()
    const [guides]=useGuide()
        const {image1,image2,image3,about,tour_plan}=place
        console.log(place);
    return (
        <div>
            <div className="">
            <section className=" dark:bg-gray-100 dark:text-gray-900">
	<div className=" grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={image1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image1} />
	</div>
</section>
            </div>
           <div className="lg:px-3">
           <div >
            <h1 className="text-4xl font-font-1 capitalize font-extrabold text-center">About the place</h1>
            <p className="text-lg font-semibold text-gray-600 text-center">{about}</p>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-font-1 capitalize font-extrabold text-center">Our Tour Plan</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-">
                        {
                            tour_plan.map((plan)=><TourPlan
                            key={plan._id}
                            plan={plan}
                
                            ></TourPlan>)
                        }
                    </div>
            </div>

            <div className="mt-10">
                <h1 className="text-4xl font-font-1 capitalize font-extrabold text-center">Our Guides</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 lg:grid-cols-3">
                {
        guides.map(item=><GuideCard
        key={item._id}
        item={item}
        ></GuideCard>)
     }
                </div>
            </div>
           </div>
        </div>
    );
};

export default Details;