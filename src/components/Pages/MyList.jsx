import { useContext, useState } from 'react';
import img from '../../assets/774418072505.jpg'
import line from '../../assets/icons8-horizontal-line-100.png'
import { AuthContext } from '../../providers/AuthProvider';
import { MdDelete, MdEmail } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import { LuPencil } from 'react-icons/lu';
import Swal from 'sweetalert2';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const loadedSpots = useLoaderData();
    const usersAddedSpots = loadedSpots.filter(spot => spot.userEmail === user.email);
    const [spots, setSpots] = useState(usersAddedSpots)
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/spot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = spots.filter(product => product._id !== id);
                            setSpots(remaining)
                        }
                    })

            }
        });
    }
    return (
        <div className='max-w-6xl mx-auto mb-12'>
            <div className='relative mb-32'>
                <img className='h-48 md:h-72 w-full ' src={img} alt="" />
                <div className='absolute flex gap-6 justify-center items-center md:-mt-10 md:ml-24'>
                    <img className='w-32 h-32 rounded-full' src={user.photoURL} alt="" />
                    <div>
                        <h5 className='text-2xl font-playFair font-bold'>{user.displayName}</h5>
                        <p className='flex gap-2 items-center'><span className='text-xl'><MdEmail></MdEmail></span> {user.email}</p>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-t-[#267188] pt-12'>
                <h1 className='text-4xl font-playFair font-bold text-center'>My List</h1>
                <div className='flex justify-center items-center'>
                    <img src={line} alt="" />
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Spot Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                spots.map((spot, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{spot.country}</td>
                                    <td>{spot.location}</td>
                                    <td>{spot.spot}</td>
                                    <td><button className='btn border-[#267188] text-[#267188] bg-transparent hover:bg-[#267188] hover:text-white'><LuPencil className='text-xl'></LuPencil></button></td>
                                    <td><button onClick={() => handleDelete(spot._id)} className='btn text-[#EA4744] border-[#EA4744] bg-transparent hover:text-white hover:bg-[#EA4744]'><MdDelete className='text-xl'></MdDelete></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyList;