"use client"

import { useState } from "react";
import ColorChange from "./ColorChange";
import TruckAnimation from "./TruckAnimation";
import { useRouter } from "next/navigation";

// We pass 'onSubmit' as a prop so the parent (page.js) can handle the API call
export default function SignUpDesign({ onSubmit }) {
    // Collects the user's inputted data
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Handles the form submission logic
    const handleSubmit = (e) => {
        // Prevents the page from refreshing
        e.preventDefault();
        e.stopPropagation();

        // Debugging statement
        console.log("Form Data Submitted:", formData);
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Passes the data back up to the parent component
        onSubmit(formData);
    };

    return (
        <div className="flex justify-center relative m-4 overflow-y-clip">
            <div className="absolute top-0 left-0">
                <ColorChange />
            </div>

            <form onSubmit={handleSubmit} className="relative bg-linear-to-r from transparent via-blue-300 to-transparent w-200 h-170 rounded-4xl m-10 p-25 shadow-2xl shadow-cyan-300">
                <div className="absolute top-0 left-0">
                    <TruckAnimation className="" />
                </div>
                
                <h1 className="font-[Georgia] font-bold text-4xl">Sign Up</h1>
                
                <div className="flex flex-wrap justify-center m-2 p-5 gap-7">

                    {/* Email Input */}
                    <div className="bg-white w-120 h-10 rounded-4xl">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            required 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="text-black focus:outline-none flex p-2 w-full bg-transparent"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="bg-white w-120 h-10 rounded-4xl">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required 
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className="text-black focus:outline-none flex p-2 w-full bg-transparent"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="bg-white w-120 h-10 rounded-4xl">
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            required 
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            className="text-black focus:outline-none flex p-2 w-full bg-transparent"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="bg-black w-120 h-15 m-4 p-2 rounded-4xl overflow-hidden">
                        <button 
                            type="submit"
                            className="text-white flex justify-center p-1 w-full hover:scale-150 hover:shadow-xl duration-300 transition-all hover:bg-white hover:text-black"
                        >
                            <p className="font-bold text-3xl">Sign Up</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
