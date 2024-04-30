import { Link, useLocation, useNavigate } from "react-router-dom";
import 'animate.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoEyeSharp } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const fullName = data.fullName;
        const image = data.image;

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password must contain at least one uppercase letter."
            );
            return;

        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("Password must contain at least one lowercase letter."
            );
            return;

        }

        setRegisterError('')
        createUser(email, password)
            .then((result) => {
                toast.success('create account successfully')
                const createdAt = result.user?.metadata?.creationTime;
                const user = {fullName, email, createdAt: createdAt };
                fetch('https://tour-mentor-server-lime.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user,)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                updateUserProfile(fullName, image)
                    .then(() => {
                        navigate(location?.state ? location.state : "/")

                    })

            })
            .catch(error => {
                setRegisterError(error.message)
            })

    }


    return (
        <div className="flex my-12 md:gap-12 justify-center">

            <div className="md:p-16 md:w-1/2">
                <div className="ml-12">
                    <Link to='/'>
                        <button className="flex my-12 text-[#2095AE] p-2 rounded-md hover:bg-[#2095AE] hover:text-white text-2xl font-rancho"><FaArrowLeftLong className='text-3xl'></FaArrowLeftLong>Back to home</button>
                    </Link>
                </div>
                <h2 className="animate__animated animate__fadeInUp text-2xl font-bold text-center">Create an account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="animate__animated animate__fadeInUp form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className=" animate__animated animate__fadeInUp form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" {...register("image")} />
                    </div>
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
                    <div className="animate__animated animate__fadeInUp form-control mt-6">
                        <button className="btn bg-[#267188] font-extrabold text-white border border-[#267188] hover:text-[#267188] hover:bg-white hover:border-[#267188]">Register</button>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                    </div>
                </form>
                <p className="animate__animated animate__fadeInUp text-center mt-4">Already have an account ? <Link className="text-[#267188] hover:text-black hover:text-xl font-bold" to='/login'>Login</Link></p>
            </div>
            <div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;