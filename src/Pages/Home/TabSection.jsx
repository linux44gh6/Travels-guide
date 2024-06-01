import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    return (
        <div className=' w-full'>
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
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 23</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabSection;


