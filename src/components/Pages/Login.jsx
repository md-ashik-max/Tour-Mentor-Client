import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import 'animate.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

const Login = () => {

    // const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    // const [showPassword, setShowPassword] = useState(false);
    // const location = useLocation()
    // const navigate = useNavigate()
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     const email = data.email;
    //     const password = data.password;
    //     signIn(email, password)
    //         .then(result => {
    //             console.log(result.user)
    //             navigate(location?.state ? location.state : "/")
    //             toast.success('user login successfully')
    //         })
    //         .catch(error => {
    //             console.error(error)
    //             toast.error(error.message)
    //         })

    // };

    // const loginWithGoogle = () => {
    //     googleLogin();
    //     navigate(location?.state ? location.state : "/")
    //     toast.success('user login successfully')

    // };
    // const loginWithGithub = () => {
    //     githubLogin();
    //     navigate(location?.state ? location.state : "/")
    //     toast.success('user login successfully')

    // };

    return (
        <div className="flex justify-center my-12 mx-auto md:gap-12">
            <div>
                <div className="ml-12">
                    <Link to='/'>
                        <button className="flex my-12 text-[#2095AE] p-2 rounded-md hover:bg-[#2095AE] hover:text-white text-2xl font-rancho"><FaArrowLeftLong className='text-3xl'></FaArrowLeftLong>Back to home</button>
                    </Link>
                </div>
                <h2 className="animate__animated animate__fadeInUp text-2xl font-bold text-center">Sign into your account</h2>
                <div className="m-8">
                    <button onClick={() => loginWithGoogle()} className="animate__animated animate__fadeInUp btn w-full my-2">
                        <FcGoogle className="text-xl"></FcGoogle>
                        Login With Google
                    </button>
                    <button onClick={() => loginWithGithub()} className="animate__animated animate__fadeInUp btn w-full mt-4">
                        <FaGithub className="text-xl"></FaGithub>
                        Login With Github
                    </button>
                </div>
                <h3 className="animate__animated animate__fadeInUp font-extrabold text-center divider mx-8">or</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="animate__animated animate__fadeInUp form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="animate__animated animate__fadeInUp form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            {showPassword ? <span className="absolute right-2 top-4 text-xl" onClick={() => setShowPassword(!showPassword)}><AiFillEyeInvisible /></span> : <span className="absolute right-2 top-4 text-xl" onClick={() => setShowPassword(!showPassword)}><IoEyeSharp /></span>}
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <label className="animate__animated animate__fadeInUp label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="animate__animated animate__fadeInUp form-control">
                        <button className="btn bg-[#267188] font-extrabold text-white border border-[#267188] hover:text-[#267188] hover:bg-white hover:border-[#267188]">Login</button>
                    </div>
                </form>
                <p className="animate__animated animate__fadeInUp text-center">Do not have an account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;