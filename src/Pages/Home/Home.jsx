import TourType from "../../Components/TourType/TourType";
import Banner from "./Banner";
import StorySection from "./StorySection";
import TabSection from "./TabSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabSection></TabSection>
            <TourType></TourType>
            <StorySection></StorySection>
        </div>
    );
};

export default Home;