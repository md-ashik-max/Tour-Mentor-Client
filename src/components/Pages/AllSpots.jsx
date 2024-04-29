import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";
import bg from '../../assets/allSpots-bg.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";


const AllSpots = () => {
    const spots = useLoaderData();
    const [displaySpot, setDisplaySpot] = useState(spots)
    const handleSpotFilter = filter => {
        if (filter === 'all') {
            setDisplaySpot(spots);
        }
        if (filter === 'averageCost') {
            const filteredSpots = spots.filter(spot => spot.averageCost);
            filteredSpots.sort((a, b) => a.averageCost - b.averageCost)
            setDisplaySpot(filteredSpots);
        }
        else if (filter === 'time') {
            const filteredSpots = spots.filter(spot => spot.travelTime);
            filteredSpots.sort((a, b) => a.travelTime - b.travelTime)
            setDisplaySpot(filteredSpots);
        }

    }
    return (
        <div>
            <div className="h-[300px] md:h-[500px] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
                <h2 className="text-white text-5xl font-playFair font-bold">Save 15% on worldwide tours</h2>
                <div className='mt-6 flex gap-6 md:gap-12 bg-white p-4 rounded-xl shadow-xl'>
                    <div className='flex justify-between md:gap-4 border-r-2 border-[#D2C196] md:pr-4'>
                        <div>
                            <p className="font-semibold">Type</p>
                            <small>type of</small>

                        </div>
                        <div>
                            <details className="dropdown dropdown-bottom">
                                <summary className="m-1 btn bg-white"><FaAngleDown></FaAngleDown></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[0] bg-base-100 rounded-box w-52">
                                    <li onClick={() => handleSpotFilter('all')}><a> All</a></li>
                                    <li onClick={() => handleSpotFilter('averageCost')}><a>Cost</a></li>
                                    <li onClick={() => handleSpotFilter('time')}><a>Time</a></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className='flex justify-between md:gap-4 border-r-2 border-[#D2C196] md:pr-4'>
                        <div>
                            <p className="font-semibold">Where</p>
                            <small>Destination</small>

                        </div>
                        <div>
                            <details className="dropdown dropdown-bottom">
                                <summary className="m-1 btn bg-white justify-end"><FaAngleDown></FaAngleDown></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a> Bangladesh</a></li>
                                    <li><a> Thailand</a></li>
                                    <li><a> Malaysia</a></li>
                                    <li><a> Indonesia</a></li>
                                    <li><a> Vietnam</a></li>
                                    <li><a> Cambodia</a></li>
                                </ul>
                            </details>
                        </div>

                    </div>
                    <div className="md:w-52 flex justify-end">
                        <button className="w-12 top-1 right-3 btn bg-[#D2C196] text-white font-bold hover:bg-white hover:text-black"><IoSearchOutline></IoSearchOutline></button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12">
                <h1 className="text-4xl font-playFair font-bold">Dream Your
                    <br />
                    Next Trip</h1>
                <p>Whether you are looking for an holiday destinations,
                    <br />
                    we are connected to the best homes with the human touch.</p>
            </div>
            <div className="mx-6 md:mx-8 grid gap-8 my-24 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl lg:mx-auto">
                {
                    displaySpot.map(aSpot => <Spot key={aSpot._id} aSpot={aSpot}></Spot>)
                }
            </div>

        </div>
    );
};

export default AllSpots;