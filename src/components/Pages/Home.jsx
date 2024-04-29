
import AnimationContainer from "./AnimationContainer";
import Banner from "./Banner";
import Country from "./Country";
import Facilities from "./Facilities";
import Spots from "./Spots";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <AnimationContainer></AnimationContainer>
            <Country></Country>
            <Spots></Spots>
        </div>
    );
};

export default Home;