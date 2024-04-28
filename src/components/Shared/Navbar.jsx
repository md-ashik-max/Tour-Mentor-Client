
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CgLogOut } from "react-icons/cg";
import userProfile from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-12 h-12" src="https://i.ibb.co/b59v5m2/company-logo.png" alt="" />
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
                <div className="navbar-end">
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
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Navbar;