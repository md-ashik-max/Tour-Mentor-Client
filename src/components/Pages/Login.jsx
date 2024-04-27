import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className='max-w-6xl mx-auto'>
                    <Link to='/'>
                    <button className="flex my-12 text-[#2095AE] p-2 rounded-md hover:bg-[#2095AE] hover:text-white text-2xl font-rancho"><FaArrowLeftLong className='text-3xl'></FaArrowLeftLong>Back to home</button>
                    </Link>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]">Login</button>
                        </div>
                    </form>
                </div>
                <p>Already have an account? <Link to="/register"><span className="text-xl font-rancho text-[#2095AE]">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;