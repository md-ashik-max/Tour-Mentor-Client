import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const AddSpots = () => {
    const handleAddSpot = event => {
        event.preventDefault();
        const form = event.target;
        const country = form.country.value;
        const spot = form.spot.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const info ={country,spot,location,averageCost,season,travelTime,visitors,description,photo};
        console.log(info)
    }
    return (
        <div className='px-6 md:px-0 py-12 md:py-24'>
            <div className='max-w-6xl mx-auto'>
                <Link to='/'>
                    <button className="flex p-2 rounded-md my-12 text-[#2095AE] hover:bg-[#2095AE] hover:text-white text-2xl font-rancho"><FaArrowLeftLong className='text-3xl'></FaArrowLeftLong>Back to home</button>
                </Link>
            </div>
            <div className="max-w-6xl mx-auto text-center bg-[#F4F3F0] md:p-16">
                <h2 className="text-4xl text-[#2095AE] font-rancho pt-12">Add New Spot</h2>
                <p className="px-8 md:px-24">Discover hidden gems and must-visit attractions in our Add Spots section. Unlock unique destinations, insider tips, and off-the-beaten-path adventures to enhance your travel experience. Explore now!</p>

                <form onSubmit={handleAddSpot}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input type="text" name='country' placeholder="Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <input type="text" name='spot' placeholder="Tourists Spot Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name='averageCost' placeholder="Average Cost" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name='season' placeholder="Seasonality" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name='travelTime' placeholder="Travel Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors per Year</span>
                            </label>
                            <input type="text" name='visitors' placeholder="Total Visitors per Year" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add Spot" className="btn text-xl font-rancho border-2 border-[#2095AE] text-[#2095AE] hover:text-white hover:bg-[#2095AE] hover:border-[#2095AE]" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddSpots;