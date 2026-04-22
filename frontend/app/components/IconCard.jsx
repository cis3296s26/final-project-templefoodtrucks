import {
    MapPin,
    Phone, 
    Hamburger
} from "lucide-react"

import IconPopup from "./IconPopup"

export default function IconCard({location, phoneNumber, foodType}){
    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-2 justify-center">
                <div className="relative">
                    <div className="group inline-block">
                        <MapPin className="w-20 h-10 cursor-pointer"></MapPin>
                        
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block transition-opacity  bg-white bg-gradient-to-b from to-gray-300 text-black text-2xl rounded-2xl px-2 py-2"> {/* this is for the hovering effect over the icon */}
                            <IconPopup value={location}></IconPopup>
                        </span>
                    </div>
                </div>
                {/* <p>{location}</p> this is to add text for whatever is in location in TruckCard.jsx */}

                <div className="relative">
                    <div className="group inline-block">
                        <Phone className="w-20 h-10 cursor-pointer"></Phone>
                        
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block transition-opacity  bg-white bg-gradient-to-b from to-gray-300 text-black text-2xl rounded-2xl px-2 py-2"> {/* this is for the hovering effect over the icon */}
                            <IconPopup value={phoneNumber}></IconPopup>
                        </span>
                    </div>
                </div>

                <div className="relative">
                    <div className="group inline-block">
                        <Hamburger className="w-20 h-10 cursor-pointer"></Hamburger>
                            
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block transition-opacity  bg-white bg-gradient-to-b from to-gray-300 text-black text-2xl rounded-2xl px-2 py-2"> {/* this is for the hovering effect over the icon */}
                            <IconPopup value={foodType}></IconPopup>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}