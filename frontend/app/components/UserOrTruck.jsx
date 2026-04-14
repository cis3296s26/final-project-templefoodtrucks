"use client"

import { useRouter } from "next/navigation"
import {
    Truck,
    User
} from "lucide-react"
import { useState } from "react";

export default function UserOrTruck(){

    const router = useRouter();
    const [userType, setUserType] = useState();

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

            <div onClick={CustomerRouter} className="flex items-center text-7xl bg-linear-to-b from bg-red-300 via-red-600 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer">
                <p className="text-8xl">Are you a customer?</p>
           
                <div className="absolute">
                    <div className="relative">
                        <User className="absolute scale-500 left-95 top-50"></User>
                    </div>
                </div>
           
            </div>


            <div className="flex justify-center items-center">
                <p style={{WebkitTextStroke: "1px black"}} className="text-6xl font-semibold">OR</p>
            </div>


            <div onClick={TruckRouter} className="flex flex-wrap items-center text-7xl bg-linear-to-b from bg-blue-300 via-blue-600 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer">
                <p className="text-8xl">Are you a Vendor?</p>
            
                <div className="absolute">
                    <div className="relative">
                        <Truck className="absolute scale-500 left-100 top-50"></Truck>
                    </div>
                </div>
                
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