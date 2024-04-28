

import { useLoaderData } from 'react-router-dom';
import line from '../../assets/icons8-horizontal-line-100.png';
import Spot from './Spot';

const Spots = () => {
   const spots = useLoaderData();
    return (
        <div className="my-24">
            <div className="text-center bg-[#5C626A]">
                <small className='font-jost font-bold'>EXPLORE OUR TOURS</small>
                <h1 className="text-4xl font-playFair font-bold mt-6">New and Most
                    <br />
                    Popular Tours</h1>
                <div className='w-full flex justify-center'>
                    <img src={line} alt="" />
                </div>
            </div>
            <div>
                {
                    spots.map(spot=><Spot key={spot.id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default Spots;