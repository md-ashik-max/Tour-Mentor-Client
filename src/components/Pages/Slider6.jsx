import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const Slider6 = () => {
    return (
        <div className="h-[500px] md:h-[600px] lg:h-[700px] w-full card shadow-xl image-full rounded-none">
            <figure><img className="w-full" src="https://i.ibb.co/3WFyxB4/cambodia.jpg" alt="" /></figure>
            <div data-aos="fade-up" className="card-body flex flex-col items-center justify-center">
                <div>
                    <h2 className="card-title text-[55px] font-playFair text-white">Cambodia</h2>
                </div>
                <div className="lg:w-[700px] my-4">
                    <p>Embark on a journey through Cambodia ancient wonders. Marvel at the majestic Angkor Wat, explore the bustling streets of Phnom Penh, and relax on the pristine beaches of Sihanoukville. Adventure awaits!</p>
                </div>
                <div className="flex mb-4">
                    <p className="border-r-2 pr-6">480 reviews</p>
                    <p className="flex items-center pl-6"><span className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>4.8/5</p>
                </div>
                <div>
                    <button className="btn text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Slider6;