import { useEffect, useState } from "react";
import Spot from "../Spot";
import bg from '../../../assets/allSpots-bg.jpg'

const BangladeshSpots = () => {
    const country = "Bangladesh";
    const [spots, setSpots] = useState([]);
    console.log(spots)
    useEffect(() => {
        fetch(`http://localhost:5000//bangladeshSpots/${country}`)
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
            <div className="my-14">
                <h1 className="text-4xl font-bold font-playFair text-center w-full">Dream Your 
                    <br />
                    Next Trip in Bangladesh</h1>
                    <p className="w-full text-center mt-4">Discover Bangladesh rich heritage and natural wonders. From the Sundarban mangrove 
                        <br />
                        forests to Coxs  Bazar sandy shores, each spot offers unique experiences that captivate travelers.</p>
            </div>
            <div>
                <div className="max-w-6xl mb-16 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        spots.map(aSpot => <Spot key={aSpot._id} aSpot={aSpot}></Spot>)
                    }
                </div>

            </div>

        </div>
    );
};

export default BangladeshSpots;