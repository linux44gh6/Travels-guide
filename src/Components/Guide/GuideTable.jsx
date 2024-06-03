
const GuideTable = ({item}) => {
  const {image,name,}=item
    return (
              <tr className="">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold ">{name}</div>
              
            </div>
        </td>
        <td>
          <span className="badge badge-ghost  text-center font-semibold  ">Desktop Support Technician</span>
        </td>
       
        <th>
          <button className="btn btn-ghost rounded-none hover:bg-color-1 hover:text-white ">Book Now</button>
        </th>
      </tr>
        
    );
};

export default GuideTable;



//  <div className="overflow-x-auto">
// <table className="table">
//   {/* head */}
//   <thead className="bg-color-1 text-white text-xl font-font-1  z-20  sticky">
//     <tr>
//       <th>Photo</th>
//       <th>Name</th>
//       <th>Specialty</th>
//       <th>Booking</th>
//     </tr>
//   </thead>
//   <tbody>
//     {
//       guides.map(item=><GuideTable
//       key={item._id}
//       item={item}
//       ></GuideTable>)
//    }
//   </tbody>

// </table>
// </div> 