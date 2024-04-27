import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
const Slider1 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="h-[700px] w-full card shadow-xl image-full rounded-none">
            <figure><img className="w-full" src="https://i.ibb.co/qgZDMT6/tea-garden.jpg" alt="Shoes" /></figure>
            <div data-aos="fade-up" className="card-body flex flex-col items-center justify-center">
                <div>
                    <h2 className="card-title text-[55px] font-playFair text-white">Bangladesh</h2>
                </div>
                <div>
                    <p className="lg:w-[700px] my-4">Immerse yourself in Bangladesh cultural tapestry, scenic beauty, and the majesty of the Bengal tiger. Explore historic landmarks, lush landscapes, and vibrant cities. Plan your adventure with our guide. Welcome to Bangladesh captivating destinations!</p>
                </div>
                <div className="flex mb-4">
                    <p className="border-r-2 pr-6">480 reviews</p>
                    <p className="flex items-center pl-6"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>4.8/5</p>
                </div>
                <div>
                    <button className="btn text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Slider1;