import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const loadedSpot = useLoaderData();
    const { photo, spot, country, location, averageCost, travelTime, season, description, visitors } = loadedSpot;
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <Link to='/'>
                    <button className="flex my-12 text-[#2095AE] p-2 rounded-md hover:bg-[#2095AE] hover:text-white text-2xl font-rancho"><FaArrowLeftLong className='text-3xl'></FaArrowLeftLong>Back to home</button>
                </Link>
            </div>
            <div className="card bg-base-100 shadow-xl shadow-[#EDF7FA]  my-12">
                <figure><img className="w-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="space-y-4 md:flex justify-between items-center">
                        <div className="flex gap-4">
                            <p className="bg-[#267188] text-white px-2 rounded-xl">{season}</p>
                            <p className="bg-[#267188] text-white px-2 rounded-xl">{travelTime}days</p>

                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#267188]">from: ${averageCost}</p>

                        </div>
                    </div>
                    <h2 className="card-title text-2xl md:text-4xl">{spot}</h2>
                    <p className="flex gap-2"><FaLocationDot className="text-xl font-bold"></FaLocationDot>{location},{country}</p>
                    <h2>Visitors : {visitors}/Year</h2>
                    <div className="rounded-xl col-span-2 shadow-xl shadow-[#EDF7FA] ">
                        <h2 className="text-2xl font-bold">Description</h2>
                        <p className="mb-4">{description}</p>
                    </div>
                </div>
                <div className='space-y-4 my-4 p-6'>
                    <h3 className="text-4xl font-playFair font-bold text-[#267188]">For Booking</h3>
                    <div className="flex gap-4">
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />

                    </div>
                    <input type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <textarea placeholder="I'm interested in" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    <div className="flex flex-col justify-center items-center space-y-6">
                        <div className="w-full flex justify-center">
                            <button className='btn w-full bg-[#267188] font-extrabold text-white border border-[#267188] hover:text-[#267188] hover:bg-white hover:border-[#267188]'>Send Email</button>
                        </div>
                        <div className='w-full flex gap-4'>
                            <div className="w-full">
                                <button className='btn px-16 md:w-full hover:bg-[#267188] font-extrabold hover: hover:text-white border border-[#267188] text-[#267188] bg-white hover:border-[#267188]'>Call</button>
                            </div>
                            <div className="w-full">
                                <button className='btn px-10 md:w-full hover:bg-[#267188] font-extrabold hover: hover:text-white border border-[#267188] text-[#267188] bg-white hover:border-[#267188]'>Whatsapp</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpotDetails;