"use client"

import { FolderDot } from "lucide-react";
import MiniPopUpInfo from "./MiniPopUpInfo";
import { useState } from "react";
import { Typefoodbutton } from "./Typefoodbutton";
import TruckAnimation from "./TruckAnimation";

export default function SignUpInfoDesign(){

    const [typefood, settypefood] = useState("");
    const [foodlist, setfoodlist] = useState([]);
    const [primage, setprimage] = useState(null);
    const [allimg, setallimg] = useState([]);


    function addFood(){
        if(typefood.trim() === "") return;

        setfoodlist([...foodlist, {name: typefood, color1: randomColor(), color2: randomColor() }]);
        settypefood("");
    }

    function removeFood(index){
        setfoodlist(foodlist.filter((_, i) => i !== index)); 
    }

    function randomColor(){
        const colors = [
            "#40E0D0", "#00FFFF", "#00BFFF", "#7DF9FF",
            "#0070BB"
        ]

        return colors[Math.floor(Math.random() * colors.length)];
    }

    function importpriImg(e){
        const file = e.target.files[0];
        if(!file){
            setError("No file selected");
            return;
        }
        else{
            setprimage(URL.createObjectURL(file));
        }
    }

    function addmoreimg(e){
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));

        setallimg(prev => [...prev, ...imageUrls]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return(
        <>
        <div className="flex flex-wrap justify-center relative m-4">
            <div className="relative bg-linear-to-r from-transparent via-blue-300 to-transparent w-300 h-570 rounded-4xl m-5 p-25 shadow-2xl shadow-cyan-300"> {/*Relative allows the circle to be hidden behind the blue box */}
                {/* <div className="absolute top-0 left-0">
                    <TruckAnimation className=""></TruckAnimation>
                </div> */}
                <div className="absolute z-0 left-85 top-65">
                    <h1 className="font-[Georgia] font-bold text-4xl p-7">Food Truck Customization</h1>
                </div>
                <TruckAnimation className="animate-truck2 overflow-hidden z-0"/>
                <MiniPopUpInfo className="relative z-10"></MiniPopUpInfo>
                
                <form>
                    {/* Name (String: "Temple Teppanyaki"), Description (Bio about the truck, String), Phone Number */}
                    <div className="flex flex-col bg-blue-500 rounded-3xl w-full m-2 p-10 overflow-hidden">
                        
                        <h1 className="font-[Georgia] font-semibold text-[30px]">Truck's Description</h1>
                        
                        <div className="flex flex-wrap justify-center m-2 p-7 gap-7">
                            <div className="bg-white w-150 h-10 rounded-4xl">
                                <input placeholder="Truck's Name" required className="text-black focus:outline-none flex p-2 w-full"></input>
                            </div>

                            <div className="bg-white rounded-4xl">
                                <input required type="tel" placeholder="Phone-Number" className="text-black focus:outline-none flex p-2 w-full"></input>
                            </div>

                            <textarea placeholder="Description about the truck" required className="bg-white w-150 h-50 rounded-2xl text-black focus:outline-none flex p-2 resize-none"/>   
                        </div>

                    </div>

                    {/* Type of Food */}
                    <div className="mt-10">
                        <div className="flex flex-col bg-red-500 rounded-3xl w-full m-2 p-10 overflow-hidden">
                            
                            <h1 className="font-[Georgia] font-semibold text-[30px]">Type of Foods</h1>
                            
                            <div className="flex flex-wrap justify-center m-2 p-7 gap-7">
                                <div className="bg-white w-150 h-10 rounded-4xl">
                                    <input placeholder="Ex: Halal, Korean, Breakfast" required className="text-black focus:outline-none flex p-2 w-full"></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dietary Restrictions */}
                    <div className="mt-10">
                        <div className="flex flex-col justify-center bg-green-300 w-full rounded-3xl m-2 p-4 overflow-hidden">
                            <h1 className="font-[Georgia] font-semibold text-[30px]">Dietary Restrictions</h1>
                            
                            <div className="flex flex-col items-center justify-center m-2 p-5 gap-5">
                                
                                <div className="bg-white w-150 h-10 rounded-4xl">
                                    <input 
                                        placeholder="Ex: Vegetarian, Vegan"
                                        type="text" 
                                        value={typefood} 
                                        onChange={(e) => settypefood(e.target.value)} 
                                        onKeyDown={(e) => e.key === "Enter" && addFood()} // This is for when the  user want to press the enter key instead of using the add button 
                                        className="text-black focus:outline-none flex p-2 w-full"/>
                                </div>
                                
                                <Typefoodbutton onClick={addFood}> Add </Typefoodbutton>

                                <div className="flex flex-wrap gap-2">
                                    {foodlist.map((fooditem, index) => (
                                        <span key={index} style={{ background: `linear-gradient(to top left, ${fooditem.color1}, ${fooditem.color2})` }} className="relative group px-5 p-4 border-4 border-cyan-100 rounded-2xl text-white text-2xl"> 
                                            <button className="group-hover:opacity-0">{fooditem.name} </button>
                                            <button onClick={() => removeFood(index)} className="absolute left-1/2 -translate-x-1/2 cursor-pointer font-bold opacity-0 group-hover:opacity-100 hover:scale-200 duration-300"> X </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mt-10">
                        <div className="flex flex-col bg-orange-500 rounded-3xl w-full m-2 p-10 overflow-hidden">
                            
                            <h1 className="font-[Georgia] font-semibold text-[30px]">Price Range($)</h1>
                            
                            <div className="flex flex-wrap justify-center m-2 p-7 gap-7">
                                <div className="bg-white w-20 h-10 rounded-4xl flex flex-wrap">
                                    <input type="number" min="0" max="9999" placeholder="Min" required className="text-black focus:outline-none flex p-2 w-full"></input>
                                </div>
                                
                                <p className="flex flex-wrap justify-center items-center text-2xl">to</p>

                                <div className="bg-white w-20 h-10 rounded-4xl flex flex-wrap">
                                    <input type="number" min="0" max="9999" placeholder="Max" required className="text-black focus:outline-none flex p-2 w-full"></input>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Primary Image */}
                    <div className="mt-10 bg-yellow-400 p-4 rounded-4xl">
                        <h1 className="font-[Georgia] font-semibold text-[30px] m-2">Truck's Image</h1>
                        <div className="flex flex-wrap justify-center items-center bg-gray-400 rounded-3xl w-full h-50 overflow-hidden">
                            
                        <input type="file" accept="image/*" onChange={importpriImg} className="cursor-pointer"/>

                        {primage && (
                            <img src={primage} alt="Upload Preview" className="w-full" />
                        )}
                        </div>
                    </div>

                    {/* All Images */}
                    <div className="mt-10 bg-purple-400 p-4 rounded-4xl">
                        <h1 className="font-[Georgia] font-semibold text-[30px] m-2">Additional Truck Images</h1>
                        <div className="flex flex-wrap justify-center items-center bg-gray-400 rounded-3xl w-full h-50 overflow-hidden">
                            
                        <input type="file" accept="image/*" onChange={importpriImg} className="cursor-pointer"/>

                        {allimg.map((img, index) => (
                            <img key={index} src={img} alt="Upload Preview" className="w-full" />
                        ))}
                        </div>
                    </div>

                </form>

                 <button className="absolute left-85 bg-black w-120 h-15 m-4 p-2 rounded-4xl overflow-hidden text-white flex justify-center hover:scale-110 hover:shadow-xl duration-300 transition-all hover:bg-white hover:text-black cursor-pointer">
                    <p className="font-bold text-3xl p-1.45">Register</p>
                </button>
                
    
            </div>
        </div>
        </>
    )
}

// Type of Food (String: "Halal" , "Korean" , "Breakfast")
// Prob import some library that has types of food lol

// Price Range (List: $5-$12)

// Name (String: "Temple Teppanyaki")

// Dietary Restrictions (String: "Vegetarian" , "Vegan")

// Phone Number

// Description (Bio about the truck, String)

// Primary image (String)

// All images (Array of Strings)