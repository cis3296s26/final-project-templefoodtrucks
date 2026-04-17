"use client"

import { useRouter } from "next/navigation"
import {
    Truck,
    User
} from "lucide-react"
import { useState } from "react";

export default function UserOrTruck(){

    const router = useRouter();
    const [userType, setUserType] = useState(); {/* This will be used to identify whether user pick custoemr or vendor */}
    const [truckHovered, setTruckHovered] = useState(false);
    const [custHovered, setcustHovered] = useState(false);

    function CustomerRouter(e){
        e.preventDefault();
        router.push("/trucks");
    }

    function TruckRouter(e){
        e.preventDefault();
        router.push("/signup/signup_info");
    }

    return(
        <>
        <div className="flex gap-7">

            <div onClick={CustomerRouter} onMouseEnter={() => setcustHovered(true)} onMouseLeave={() => setcustHovered(false)} className="flex flex-col items-center justify-center text-7xl bg-linear-to-b from bg-red-300 via-red-600 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer border-3">
                <p className="text-8xl m-4">Are you a customer?</p>
                <User size="150" className={custHovered ? "animate-custortruck" : ""}></User>
            </div>


            <div className="flex justify-center items-center">
                <p style={{WebkitTextStroke: "1px black"}} className="text-6xl font-semibold">OR</p>
            </div>


            <div onClick={TruckRouter} onMouseEnter={() => setTruckHovered(true)} onMouseLeave={() => setTruckHovered(false)} className="flex flex-col items-center justify-center text-7xl bg-linear-to-b from bg-blue-300 via-blue-600 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer border-3">
                <p className="text-8xl m-4">Are you a Vendor?</p>
            
                <Truck size="150" className={truckHovered ? "animate-custortruck" : ""}></Truck>
                
            </div>
        </div>
        </>
    )
}




// This is another version using the submit button
//   <form onSubmit={CustomerRouter}>
//         <input type="submit" value="Are you a customer?" className="flex items-center text-7xl bg-linear-to-b from bg-red-300 via-red-600 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer"/>
//             {/* <p className="text-8xl">Are you a customer?</p> */}
//     </form>


//     <div className="flex justify-center items-center">
//         <p style={{WebkitTextStroke: "1px black"}} className="text-6xl font-semibold">OR</p>
//     </div>


//     <form onSubmit={TruckRouter}>
//         <input type="submit" value="Are you a Vendor?" className="flex items-center text-7xl bg-linear-to-b from bg-blue-300 via-blue-600 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer"/>
//             {/* <p className="text-8xl">Are you a Food Truck?</p> */}
        
//     </form>