import { FaArrowRight } from "react-icons/fa";



const Country = () => {
    return (
        <div className="mx-6 lg:max-w-6xl md:mx-auto my-24 grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="h-96">
                <small className="font-bold">LOOK FOR OUR STAY AND VACATION SOTS</small>
                <h2 className="text-[40px] font-playFair font-bold mb-6">Our Popular Destinations</h2>
                <p>We offer amazing properties that are full of character, situated in beautiful neighborhoods so you can feel right at home anywhere in the world.</p>
                <button className="btn my-6 text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">View All Destination <span><FaArrowRight></FaArrowRight></span></button>

            </div>
            <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/7pv1jW5/gulshan.jpg)` }}>
                <div className="h-full w-full flex justify-center items-end hover:items-center">
                    <h2 className="text-4xl font-playFair font-bold text-white">Bangladesh</h2>
                </div>
            </div>
            <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/3Whh7L8/bangkok-thailand.jpg)` }}>
                <div className="h-full w-full flex justify-center items-end hover:items-center">
                    <h2 className="text-4xl font-playFair font-bold text-white">Thailand</h2>
                </div>
            </div>
            <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/JQPgK34/indonesia.jpg)` }}>
                <div className="h-full w-full flex justify-center items-end hover:items-center">
                    <h2 className="text-4xl font-playFair font-bold text-white">Indonesia</h2>
                </div>
            </div>
            <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/9HxRLPC/malaysia.jpg)` }}>
                <div className="h-full w-full flex justify-center items-end hover:items-center">
                    <h2 className="text-4xl font-playFair font-bold text-white">Malaysia</h2>
                </div>
            </div>
            <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/1TBYM8W/vietnam.jpg)` }}>
                <div className="h-full w-full flex justify-center items-end hover:items-center">
                    <h2 className="text-4xl font-playFair font-bold text-white">Vietnam</h2>
                </div>
            </div>
            <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/BcWcTnr/cambodia.jpg)` }}>
                <div className="h-full w-full flex justify-center items-end hover:items-center">
                    <h2 className="text-4xl font-playFair font-bold text-white">Cambodia</h2>
                </div>
            </div>
            <div className="h-96 border-2 rounded-md text-center p-6">
                <h2 className="text-3xl font-playFair font-bold">Join Us</h2>
                <p className="my-6">Join our mailing list and receive the latest properties and travel inspiration straight to your inbox every month.</p>
                <input className="p-2 border-2" type="email" name="" placeholder="Enter Your Email" id="" />
                <button className="btn my-6 px-14 text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">Subscribe <span><FaArrowRight></FaArrowRight></span></button>
            </div>

        </div>
    );
};

export default Country;