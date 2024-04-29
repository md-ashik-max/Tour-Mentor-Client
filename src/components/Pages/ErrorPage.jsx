import { Link } from 'react-router-dom';
import error from '../Pages/errorAnimation.json';
import Lottie from "lottie-react";
import { FaArrowLeft } from 'react-icons/fa6';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <Lottie animationData={error}></Lottie>
            </div>
            <div className='flex justify-end'>
                <Link to='/'>
                    <button className='flex btn text-[#267188] bg-white border border-[#267188] hover:text-white hover:bg-[#267188]'><FaArrowLeft></FaArrowLeft> Back to Home</button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;