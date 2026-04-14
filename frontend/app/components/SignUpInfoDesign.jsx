import { FolderDot } from "lucide-react";
import MiniPopUpInfo from "./MiniPopUpInfo";

export default function SignUpInfoDesign(){
    return(
        <>
        
        <div className="flex justify-center relative m-4">
            <div className="relative bg-linear-to-r from transparent via-blue-300 to-transparent w-300 h-570 rounded-4xl m-10 p-25 shadow-2xl shadow-cyan-300"> {/*Relative allows the circle to be hidden behind the blue box */}
                {/* <div className="absolute top-0 left-0">
                    <TruckAnimation className=""></TruckAnimation>
                </div> */}
                    <MiniPopUpInfo className="relative"></MiniPopUpInfo>
                <h1 className="font-[Georgia] font-bold text-4xl">Interests</h1>
                <div className="flex flex-wrap justify-center m-2 p-5 gap-7">
                    <div className="bg-white w-120 h-10 rounded-4xl">
                        <input placeholder="Truck's Name" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div>

                    <div className="bg-white w-120 h-50 rounded-2xl">
                        <input placeholder="Description about the truck" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div>

                    {/* <div className="bg-white w-120 h-10 rounded-4xl">
                        <input type="password" placeholder="Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div>

                    <div className="bg-white w-120 h-10 rounded-4xl">
                        <input type="password" placeholder="Confirm Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div> */}

                    <div className="bg-black w-120 h-15 m-4 p-2 rounded-4xl overflow-hidden">
                        <button className="text-white flex justify-center p-1 w-full hover:scale-150 hover:shadow-xl duration-300 transition-all hover:bg-white hover:text-black">
                            <p className="font-bold text-3xl">Sign Up</p>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

/* 
Type of Food (String: "Halal" , "Korean" , "Breakfast")
Prob import some library that has types of food lol

Price Range (List: $5-$12)

Name (String: "Temple Teppanyaki")

Dietary Restrictions (String: "Vegetarian" , "Vegan")

Open/Closed Currently (Boolean)

Popularity (Float: 3.5 Stars)

Description (Bio about the truck, String)
*/