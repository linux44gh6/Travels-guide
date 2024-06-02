import { useLoaderData } from "react-router-dom";

const Details = () => {
    const place=useLoaderData()
        const {image1,image2,image3,about,tour_plan}=place
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
        </div>
    );
};

export default Details;