import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Animation = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <div className="space-y-24 my-24 flex flex-col justify-center items-center">
            <div className="box-content border-2 p-24" data-aos="fade-up">
                <h1>box 1</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-right">
                <h1>box 1</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-left">
                <h1>box 2</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-up">
                <h1>box 3</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-left">
                <h1>box 4</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-up">
                <h1>box 5</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-right">
                <h1>box 6</h1>
            </div>
            <div className="box-content border-2 p-24" data-aos="fade-up">
                <h1>box 7</h1>
            </div>

        </div>
    );
};

export default Animation;