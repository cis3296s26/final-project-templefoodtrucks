import IconCard from "./IconCard"
import Link from "next/link"
import StoreStatus from "./StoreStatus"

export default function TruckCard({truckName}){
    // hi
    
    return (
        <Link href={`/trucks/${truckName}`} className="bg-blue-500 mb-4 w-3/12 rounded-4xl border-4 m-4 overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div > {/* This is to stylize the content and the individual card */}
                <div className="bg-amber-800 h-64 rounded-t-4xl relative"> {/*this is an image placeholder*/}
                    <div className="w-30 h-10 absolute bottom-2 right-2"> {/* you need relative in the parent div with absolute as child to control the positioning */}
                        {/* <svg viewBox="0 0 24 24" className="w-20 h-7 stroke-1.3 stroke-black"> this creates a star for rating
                            <path fill="yellow" d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z"></path>
                        </svg> */}
                        <div className="flex flex-wrap justify-center absolute bottom-50 border-3 border-black bg-white w-30 h-10 rounded-2xl overflow-hidden">
                            <StoreStatus></StoreStatus>
                        </div>
                    </div>
                </div>

                {/* Below is the descriptions that are inside the box */}
                <div className="p-4">

                    <h1 className="text-center text-2xl p-2 font-bold">{truckName}</h1> {/*This is the parameter for the food truck*/}
                    <hr/>
                    <p className="wrap-break-word p-4">This is the description for the food truck. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio quis cum commodi ullam harum velit atque culpa quod molestias nihil amet quam sapiente, exercitationem sit optio saepe aliquam cupiditate.</p>
                </div>  

                    <hr/>
                <div className="p-4"> {/* this is for the icons popup: location, contacts, some sample of the menu */}
                    <IconCard location={"whatever"}></IconCard> {/* the deisgn of the icon will be in the IconCard component */}
                </div>
            </div>     
            
        </Link>
    )
}

// Name
// Icon: type of food (middle-eastern, smoothie), location
// open_status
