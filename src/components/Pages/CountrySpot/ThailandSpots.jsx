import { useEffect, useState } from "react";
import Spot from "../Spot";
import bg from '../../../assets/allSpots-bg.jpg'


const ThailandSpots = () => {
    const country = "Thailand";
    const [spots, setSpots] = useState([]);
    console.log(spots)
    useEffect(() => {
        fetch(`https://tour-mentor-server-lime.vercel.app/thailandSpots/${country}`)
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
                    Next Trip in Thailand</h1>
                    <p className="w-full text-center mt-4">Explore Thailand vibrant culture, stunning beaches thrilling adventures,<br /> and wellness retreats.Plan your perfect trip with our comprehensive guide.Start your Thai adventure today!</p>
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

export default ThailandSpots;