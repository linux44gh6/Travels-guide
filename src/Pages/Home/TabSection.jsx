import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Card from '../../Components/Card/Card';
import { NavLink } from 'react-router-dom';

const TabSection = () => {
    const [places]=useAxiosPublic()
    console.log(places);
    return (
        <div className=' w-full lg:px-10'>
             <Tabs>
    <TabList className='text-center mb-5  border-b border-gray-400'>
      <Tab><span className='font-font-2 text-2xl font-semibold text-color-1'>Overview</span></Tab>
      <Tab><span className='font-font-2 text-2xl font-semibold text-color-1'> Our Packages</span></Tab>
      <Tab><span className='font-font-2 text-2xl font-semibold text-color-1'>Meet Our Tour Guides</span></Tab>
    </TabList>

    <TabPanel>
      <div className='container mx-auto'>
      <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=fbQaFs5qol8-BLnb"></iframe>
      </div>
    </TabPanel>
    <TabPanel className='bg-color-'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                places.slice(0,3).map(item=><Card
                key={item._id}
                item={item}
                ></Card>)
            }
            
        </div>
        <div className='flex justify-center w-full '>
        <div className="space-y-3 w-[20%] mt-5">
        <NavLink className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-color-1  shadow-md group w-full mx-auto ">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-color-1 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-color-1 transition-all duration-300 transform group-hover:translate-x-full ease"> All Packages</span>
<span className="relative invisible">Button Text</span>
</NavLink>
		</div>
            </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 23</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabSection;


