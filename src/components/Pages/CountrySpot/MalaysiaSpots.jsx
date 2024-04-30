import { useEffect, useState } from "react";
import Spot from "../Spot";
import bg from '../../../assets/allSpots-bg.jpg'

const MalaysiaSpots = () => {
    const country = "Malaysia";
    const [spots, setSpots] = useState([]);
    console.log(spots)
    useEffect(() => {
        fetch(`https://tour-mentor-server-lime.vercel.app/indonesiaSpots/${country}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpots(data)
            })
    }, [])
    return (
        <div>
            <div className="h-[300px] md:h-[500px]">
                <img className="w-full h-full" src={bg} alt="" />
            </div>
            <div className="my-14 mx-6">
                <h1 className="text-4xl font-bold font-playFair text-center w-full">Dream Your
                    <br />
                    Next Trip in Malaysia</h1>
                <p className="w-full text-center mt-4">Malaysia, a melting pot of cultures and landscapes, offers a diverse array of tourist spots.
                <br /> Explore the iconic Petronas Twin Towers in Kuala Lumpur, relax on the pristine beaches of Langkawi,<br /> delve into the cultural heritage of Penang Georgetown, or trek through the ancient rainforests of Taman Negara . <br /> With its vibrant cities, stunning natural beauty, and rich cultural heritage, Malaysia promises an unforgettable experience for travelers.</p>
            </div>
            <div>
                <div className="max-w-6xl mb-16 mx-6 lg:mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        spots.map(aSpot => <Spot key={aSpot._id} aSpot={aSpot}></Spot>)
                    }
                </div>

            </div>

        </div>
    );
};

export default MalaysiaSpots;