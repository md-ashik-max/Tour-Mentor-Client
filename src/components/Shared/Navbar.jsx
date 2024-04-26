import { NavLink } from "react-router-dom";
// import logo from  '../../assets/company logo.png'


const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allSpot">All Tourists Spot</NavLink></li>
        <li><NavLink to="/addSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink to="/myList">My List</NavLink></li>

    </>

    return (
        <div>
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
                        <h3 className="text-3xl font-bold text-[#2095AE] font-niconne">Tour <span className="text-yellow-400">Mentor</span></h3>
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
                    <a className="btn">Login</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;