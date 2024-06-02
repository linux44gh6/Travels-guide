import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Card from "../Card/Card";

const AllPackages = () => {
    const [places]=useAxiosPublic()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mx-auto px-10">
            {
                places.map(item=><Card
                key={item._id}
                item={item}
                ></Card>)
            }
        </div>
    );
};

export default AllPackages;