import PropTypes from 'prop-types'
import { FaArrowRight, FaLocationDot } from 'react-icons/fa6';

const Spot = ({ aSpot }) => {
    const { photo, spot, location, averageCost, travelTime, season } = aSpot;
    return (
        <div className="card h-96 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }}>
            <div className="h-full w-full">
                <div className=' w-full mt-6 flex justify-around'>
                    <p className='text-white bg-[#267188] px-2 rounded-full'>{season}</p>
                    <p className='text-white bg-[#267188] px-2 rounded-full'>{travelTime}days</p>

                </div>
                <div className='mt-32 mx-6'>
                    <h2 className="text-4xl font-playFair font-bold text-white my-4">{spot}</h2>
                    <p className='text-white flex items-center gap-2'><FaLocationDot></FaLocationDot>{location}</p>
                    <p className='text-white'>Cost : ${averageCost}</p>
                </div>
                <button className="btn ml-6 bg-transparent my-6 px-14 text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">View Details<span><FaArrowRight></FaArrowRight></span></button>
                

            </div>
        </div>
    );
};

export default Spot;
Spot.propTypes = {
    aSpot: PropTypes.object
}