import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";

const TourTypeCard = () => {
    const allType=useLoaderData()
    console.log(allType);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
            {
                allType.map(item=><Card
                key={item._id}
                item={item}
                ></Card>)
            }
        </div>
    );
};

export default TourTypeCard;