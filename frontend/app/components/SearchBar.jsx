import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="min-w-full">
      <div className="flex justify-center gap-4">
        <input
          placeholder="Filter Truck By Name or Type of Food"
          className="text-black p-2 bg-white rounded-4xl min-w-fit w-5/12 h-10 border-3 focus:outline-none font-[Trebuchet MS] text-center"
        />

        <button className="text-black p-2 bg-green-500 rounded-4xl text-center justify-center items-center cursor-pointer flex-row min-w-fit w-2/12 h-10 border-3 flex gap-2 focus:outline-none font-[Trebuchet MS] ">
          <h1 className="text-2xl">Filter</h1>
          <Search></Search>
        </button>
      </div>
    </div>
  );
}
