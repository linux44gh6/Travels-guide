import TourType from "../../Components/TourType/TourType";
import Banner from "./Banner";
import StorySection from "./StorySection";
import TabSection from "./TabSection";
import {Helmet} from "react-helmet";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GlobeGazzer|Home</title>
            </Helmet>
            <Banner></Banner>
            <TabSection></TabSection>
            <TourType></TourType>
            <StorySection></StorySection>
        </div>
    );
};

export default Home;