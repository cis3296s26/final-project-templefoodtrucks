import { Search } from "lucide-react";

export default function SearchBar({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
          name: formData.get("name"),
          foodtype: formData.get("foodtype"),
          status: formData.get("status") || "OPEN",
          popularity: formData.get("popularity") || 3,
          price: formData.get("priceRange") || 10, 
        };

        onSubmit(data);
      }}
    >
      <div className="min-w-full flex flex-col items-center gap-6">

        {/* Top row */}
        <div className="flex justify-center gap-4 w-full">
          <input
            name="name"
            placeholder="Name"
            className="text-black p-2 bg-white rounded-4xl w-4/12 h-10 border-3 focus:outline-none text-center"
          />

            <input
            name="foodtype"
            placeholder="Food Type"
            className="text-black p-2 bg-white rounded-4xl w-4/12 h-10 border-3 focus:outline-none text-center"
          />

          <select
            name="status"
            className="text-black p-2 bg-white rounded-4xl w-2/12 h-10 border-3 focus:outline-none text-center"
          >
            <option value="">Any Status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>

          <input
            name="popularity"
            type="number"
            min="1"
            max="5"
            step="0.1"
            placeholder="Min Rating"
            className="text-black p-2 bg-white rounded-4xl w-2/12 h-10 border-3 focus:outline-none text-center"
          />

          <input
            name="priceRange"
            type="number"
            min="1"
            max="50"
            step="0.1"
            placeholder="Price"
            className="text-black p-2 bg-white rounded-4xl w-2/12 h-10 border-3 focus:outline-none text-center"
          />
        </div>

        {/* Submit */}
        <button className="text-black p-2 hover:scale-110 transition-all duration-300 bg-green-500 rounded-4xl w-2/12 h-10 border-3 flex gap-2 justify-center items-center">
          <h1 className="text-2xl">Filter</h1>
          <Search />
        </button>
      </div>
    </form>
  );
}