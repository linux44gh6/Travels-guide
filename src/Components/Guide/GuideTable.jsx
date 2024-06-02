
const GuideTable = () => {
    return (
        <div>
              <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold ">Hart Hagerty</div>
              
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost  text-center font-semibold  ">Desktop Support Technician</span>
        </td>
       
        <th>
          <button className="btn btn-ghost rounded-none hover:bg-color-1 hover:text-white ">Book Now</button>
        </th>
      </tr>
        </div>
    );
};

export default GuideTable;