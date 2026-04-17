"use client"

import { FolderDot } from "lucide-react";
import MiniPopUpInfo from "./MiniPopUpInfo";
import { useState } from "react";
import { Typefoodbutton } from "./Typefoodbutton";

export default function SignUpInfoDesign(){

    const [typefood, settypefood] = useState("");
    const [foodlist, setfoodlist] = useState([]);


    function addFood(){
        if(typefood.trim() === "") return;

        setfoodlist([...foodlist, typefood]);
        settypefood("");
    }


    return(
        <>
        <div className="flex flex-wrap justify-center relative m-4">
            <div className="relative bg-linear-to-r from transparent via-blue-300 to-transparent w-300 h-570 rounded-4xl m-10 p-25 shadow-2xl shadow-cyan-300"> {/*Relative allows the circle to be hidden behind the blue box */}
                {/* <div className="absolute top-0 left-0">
                    <TruckAnimation className=""></TruckAnimation>
                </div> */}
                <MiniPopUpInfo className="relative"></MiniPopUpInfo>
                <h1 className="font-[Georgia] font-bold text-4xl p-7">Food Truck Customization</h1>
                
                <div className="flex flex-col bg-green-500 rounded-3xl w-full m-2 p-10 overflow-hidden">
                    
                    <h1 className="font-[Georgia] font-semibold text-[30px]">Truck's Description</h1>
                    
                    <div className="flex flex-wrap justify-center m-2 p-7 gap-7">
                        <div className="bg-white w-150 h-10 rounded-4xl">
                            <input placeholder="Truck's Name" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <textarea placeholder="Description about the truck" required className="bg-white w-150 h-50 rounded-2xl text-black focus:outline-none flex p-2 resize-none"/>   
                    </div>

                </div>

                <div className="flex flex-col justify-center bg-red-300 w-full rounded-3xl m-2 overflow-hidden">
                        <h1 className="flex flex-wrap justify-center font-[Georgia] font-semibold text-[30px]">Type of Food</h1>
                    
                    <div className="flex flex-wrap justify-center m-2 p-7 gap-7">
                        
                        <div>
                            <div className="bg-white w-150 h-10 rounded-4xl">
                                <input 
                                    placeholder="Type of Food"
                                    type="text" 
                                    value={typefood} 
                                    onChange={(e) => settypefood(e.target.value)} 
                                    onKeyDown={(e) => e.key === "Enter" && addFood()} //This is for when the  user want to press the enter key instead of using the add button 
                                    className="text-black focus:outline-none flex p-2 w-full"/>
                            </div>
                            
                            <Typefoodbutton onClick={addFood}> Add </Typefoodbutton>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {foodlist.map((fooditem, index) => (
                                <span key={index} className="bg-white px-3 py-1 rounded-full text-black"> {fooditem} </span>
                            ))}
                        </div>
                    </div>

                </div>

                 <button className="absolute left-85 bg-black w-120 h-15 m-4 p-2 rounded-4xl overflow-hidden text-white flex justify-center hover:scale-110 hover:shadow-xl duration-300 transition-all hover:bg-white hover:text-black cursor-pointer">
                    <p className="font-bold text-3xl p-1.45">Register</p>
                </button>
    
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