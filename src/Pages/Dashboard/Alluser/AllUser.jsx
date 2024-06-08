import useLoadUser from "../../../Hooks/useLoadUser";

const AllUser = () => {
    const [users]=useLoadUser()
    return (
        <div className="px-5 mt-10">
             <table className="table">
   
   <thead className="bg-color-1 text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Name</th>
       <th>Email</th>
       <th>Role</th>
     </tr>
   </thead>
   <tbody>
       {
           users.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                  <h1>{item.name}</h1>
                   
                 </div>
               </td>
               <td>
                {item.guide_name}
                 <br/>
                 <span className="badge badge-ghost badge-sm">{item.email}</span>
               </td>
               <th>
                <button className="btn bg-color-2 text-white">add admin</button>
                <button className="btn bg-color-2 text-white">add Guide</button>
               </th>
             </tr>)
       }  
   </tbody>
 </table>
        </div>
    );
};

export default AllUser;