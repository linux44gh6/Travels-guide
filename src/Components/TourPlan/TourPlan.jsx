import PropTypes from 'prop-types'
const TourPlan = ({plan}) => {
    const {activities,day}=plan
    return (
        <div className='mt-2'>
            <div className="card w-96 h-[200px] rounded-none bg-color-1 text-neutral-content">
  <div className="card-body">
    <h2 className="text-left border-b text-3xl font-semibold capitalize">day-{day}</h2>
    <p className="font-semibold text-gray-400">{activities}</p>
  </div>
</div>
        </div>
    );
};

TourPlan.propTypes={
    plan:PropTypes.object
}
export default TourPlan;