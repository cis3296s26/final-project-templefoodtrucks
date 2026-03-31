import IconCard from "./IconCard"

export default function TruckCard({truckName}){
    // hi
    
    return (
        <>
        <div className="flex justify-center"> {/* Keep this for now so that the box is centered */}
            <div className="bg-blue-500 mb-4 w-4/12 rounded-4xl border-4 m-5 overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"> {/* This is to stylize the content and the individual card */}
                <div className="bg-amber-800 h-64 rounded-t-4xl"> {/*this is an image placeholder*/}
                </div>
                <div className="p-4">

                    <h1 className="text-center p-2">{truckName}</h1> {/*This is the parameter for the food truck*/}
                    <hr/>
                    <p className="wrap-break-word p-4">This is the description for the food truck. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio quis cum commodi ullam harum velit atque culpa quod molestias nihil amet quam sapiente, exercitationem sit optio saepe aliquam cupiditate.</p>
                </div>  

                    <hr/>
                <div className="p-4"> {/* this is for the icons popup: location, contacts, some sample of the menu */}
                    <IconCard></IconCard> {/* the deisgn of the icon will be in the IconCard component */}
                    <p> Add icon here </p>
                </div>
            </div>     
        </div> 
        </>
    )
}

//name, type of food, open_status, location
