

import { Link, useLoaderData } from 'react-router-dom';
import line from '../../assets/icons8-horizontal-line-100.png';
import Spot from './Spot';

const Spots = () => {
    const spots = useLoaderData();
    return (
        <div className="my-24">
            <div className="text-center">
                <small className='font-jost font-bold'>EXPLORE OUR TOURS</small>
                <h1 className="text-4xl font-playFair font-bold mt-6">New and Most
                    <br />
                    Popular Tours</h1>
                <div className='w-full flex justify-center'>
                    <img src={line} alt="" />
                </div>
            </div>
            <div className='mx-6 my-12 lg:max-w-6xl lg:mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    spots.slice(0, 8).map(aSpot => <Spot key={aSpot._id} aSpot={aSpot}></Spot>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to="/allSpots">
                    <button className="btn my-6 bg-transparent my-6 px-14 text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default Spots;