import { NavLink } from "react-router-dom";

const StoryCard = (item) => {
    console.log(item.item)
    return (
       <NavLink to={`/storyDetails/${item.item._id}`}>
         <div className=''>
        <div className="card w-96 bg-base-100 mb-5 shadow-xl">
  <figure><img src={item.item.photoURL} alt="Shoes" />
  </figure>
  <div className="card-body flex ">
    <h2 className="card-title">
      {item.item.place_name}
    </h2>
  </div>
</div>
        </div>
       </NavLink>
    );
};

export default StoryCard;