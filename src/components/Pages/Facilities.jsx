
import icon1 from '../../assets/icons8-beach-64 (3).png';
import icon2 from '../../assets/icons8-beach-64 (2).png';
import icon3 from '../../assets/icons8-service-64.png';
import line from '../../assets/icons8-horizontal-line-100.png'

const Facilities = () => {
    return (
        <div className=' py-16 bg-[#F6F8FB]'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center'>
                    <small className='font-jost font-bold'>Welcome to Tour Mentor</small>
                    <h1 className='text-4xl font-playFair font-bold mt-8'>An Adventure Travel
                        <br />
                        Company You Can Trust</h1>
                    <div className='w-full flex justify-center'>
                        <img src={line} alt="" />
                    </div>
                </div>
                <div className="lg:flex gap-12">
                    <div className='text-center'>
                        <div className='w-full flex justify-center'>
                            <img src={icon1} alt="" />
                        </div>
                        <h3 className='text-2xl font-playFair font-bold'>Amazing Accommodations,
                            <br />
                            Dream Destinations</h3>
                        <p className='my-6'>Our collections range from city apartments and luxury staffed villas to private islands in the World’s best destinations.</p>


                    </div>
                    <div className='text-center'>
                        <div className='w-full flex justify-center'>
                            <img src={icon2} alt="" />
                        </div>
                        <h3 className='text-2xl font-playFair font-bold'>Superior Service & Best
                            <br />
                            Rates Guaranteed</h3>
                        <p className='my-6'>We tailor your holiday to you and negotiate the best rates with our professional Villa suppliers and global airline partners.</p>
                    </div>
                    <div className='text-center'>
                        <div className='w-full flex justify-center'>
                            <img src={icon3} alt="" />
                        </div>
                        <h3 className='text-2xl font-playFair font-bold mt-4'>Complimentary Concierge &
                            <br />
                            In-Destination Services</h3>
                        <p className='my-6'>Excellent pre-travel concierge services and in-destination management offices to cater to your holiday’s needs.</p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Facilities;