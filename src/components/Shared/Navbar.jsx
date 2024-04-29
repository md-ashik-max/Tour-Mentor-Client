
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CgLogOut } from "react-icons/cg";
import userProfile from '../../assets/user.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e)=>{
        if(e.target.checked){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme= localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme",localTheme)
    }, [theme])
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(toast.success("user log out successfully"))
            .catch(error => {
                console.error(error)
                toast.error(error.massage)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allSpots">All Tourists Spot</NavLink></li>
        <li><NavLink to="/addSpots">Add Tourists Spot</NavLink></li>
        <li><NavLink to="/myList">My List</NavLink></li>

    </>

    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/b59v5m2/company-logo.png" alt="" />
                        <h3 className="flex text-3xl font-bold text-[#2095AE] font-niconne">Tour <span className="text-yellow-400">Mentor</span></h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex md:gap-4">
                    <div>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleToggle} type="checkbox" checked={theme==="dark"?false:true} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    <div>
                        {
                            user ? <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                                <div tabIndex={0} role="button" className="m-1">{user.photoURL ? <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /> : <img className="w-12 h-12 rounded-full" src={userProfile} alt="" />}</div>
                                <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow-xl bg-[#EDF7FA] rounded-box border-2 border-[#267188] w-52 ">
                                    <div className="flex flex-col justify-center items-center">
                                        {user.photoURL ? <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /> : <img className="w-12 h-12 rounded-full" src={userProfile} alt="" />}
                                        <li className="text-black font-bold my-1">{user.displayName}</li>
                                        <Link to="userProfile"> <button className="btn border border-[#D2C196] text-[#D2C196] bg-white hover:bg-[#D2C196] hover:text-white mb-4">View Profile</button></Link>
                                    </div>
                                    <hr />
                                    <li><button onClick={handleLogOut} className="text-black font-bold hover:text-red-600">Log Out <CgLogOut className="text-xl font-bold"></CgLogOut></button></li>
                                </ul>

                            </div>
                                :
                                <Link className="btn text-[#267188] bg-white border border-[#267188] hover:text-white hover:bg-[#267188]" to="/login">Login</Link>
                        }
                    </div>



                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Navbar;