export default function TruckCard({truckName}){
    // hi
    
    return (
        <>
        <div className="flex justify-center bg-blue-500 mb-4 p-4 w-5/12 rounded-4xl"> 
            <div className="">

                <h1 className="text-center">{truckName}</h1> {/*This is the parameter for the food truck*/}
                <hr/>
                <p>This is the description for the food truck. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio quis cum commodi ullam harum velit atque culpa quod molestias nihil amet quam sapiente, exercitationem sit optio saepe aliquam cupiditate.</p>
            </div>  
        </div>      
        </>
    )
}

//name, type of food, open_status, location
