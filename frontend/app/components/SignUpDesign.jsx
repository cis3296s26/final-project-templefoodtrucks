"use client"

import ColorChange from "./ColorChange";
import TruckAnimation from "./TruckAnimation";
import { useRouter } from "next/navigation";

export default function SignUpDesign(){

    {/* This is for nagivating to another page using next.js router function */}
    const router = useRouter();

    function SignUp_info(e){ 
        e.preventDefault();
        router.push("/signup_info");
    }

    return(
        <>
        <div className="flex justify-center relative m-4 overflow-y-clip">
            <div className="absolute top-0 left-0">
                <ColorChange/>
            </div>
            {/* <div className="absolute top-0 left-0">
                <TruckAnimation></TruckAnimation>
            </div> */}
                <div className="relative bg-linear-to-r from transparent via-blue-300 to-transparent w-200 h-170 rounded-4xl m-10 p-25 shadow-2xl shadow-cyan-300"> {/*Relative allows the circle to be hidden behind the blue box */}
                    <div className="absolute top-0 left-0">
                        <TruckAnimation className=""></TruckAnimation>
                    </div>
                    <h1 className="font-[Georgia] font-bold text-4xl">Sign Up</h1>
                    <form onSubmit={SignUp_info} className="flex flex-wrap justify-center m-2 p-5 gap-7">
                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input placeholder="Full Name" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input type="email" placeholder="Email Address" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input type="password" placeholder="Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input type="password" placeholder="Confirm Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-black w-120 h-15 m-4 p-3 rounded-4xl overflow-hidden">
                            <input 
                                type="submit"
                                value="Sign Up"
                                className="text-white text-2xl cursor-pointer font-bold w-full h-full hover:scale-170 hover:shadow-xl duration-300 transition-all hover:bg-white hover:text-black"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

