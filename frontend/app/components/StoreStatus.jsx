export default function StoreStatus(){
    return(
        <div>
            <div className="text-black font-mono bg-green-400 w-35 h-10">
                <p className="pt-1">Open</p>
            </div>

            <div className="text-black font-mono bg-red-500 w-35 h-10">
                <p className="pt-1">Closed</p>
            </div>
        </div>
    )
}