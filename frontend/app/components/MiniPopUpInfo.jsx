"use client"

import { useEffect, useState } from "react"

export default function MiniPopUpInfo(){

    const [visible, setVisible] = useState(true);
    
    const OKbutton = () => {
        setVisible(false);
    }

    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        setloaded(true);
    }, []);

    return( 
        <>
        <div className="animate-signupPop"> 
            <div className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
                <div className={`transition-opacity duration-500 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="fixed w-150 h-100 scale-200 bg-red-500 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-2xl border-8 border-green-400 p-3">
                        <h1 className="font-bold text-5xl m-5">FOOD TRUCK CUSTOMIZATION</h1>
                        <p className="text-3xl m-4">You will now be customizing your personal Food Truck</p>
                        <p className="text-3xl m-4">Have Fun!</p>
                        <button onClick={OKbutton} className="bg-blue-500 cursor-pointer rounded w-50 h-20 text-4xl font-semibold" >OK</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}