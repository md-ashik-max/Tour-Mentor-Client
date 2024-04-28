

import { useLoaderData } from 'react-router-dom';
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
            <div className='my-12 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    spots.map(aSpot=><Spot key={aSpot._id} aSpot={aSpot}></Spot>)
                }
            </div>
        </div>
    );
};

export default Spots;