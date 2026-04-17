import { Search } from "lucide-react"

export default function SearchBar(){
    return(
        <div>
            <div className="flex justify-center gap-4">

                <div className="text-black p-2 bg-white rounded-4xl w-4/12 h-10 border-3">
                    <input placeholder="Search for foodtruck" className="focus:outline-none font-[Trebuchet MS] text-center"></input>
                </div>
                
                <div className="text-black p-2 bg-green-500 rounded-4xl w-2/12 h-10 border-3">
                    <div className="flex justify-center">
                        <button className="flex gap-2 focus:outline-none font-[Trebuchet MS] ">
                            Filter
                            <Search></Search>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}