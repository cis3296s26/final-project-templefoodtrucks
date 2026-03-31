// imports from next

// importing components
import TruckCard from "../components/TruckCard";

const trucks = ["halal", "teppanyaki", "bagel hut", "bob"];

export default function AllTrucksPage() {
  return (
    <div>
      <h1>All Trucks</h1>
      <ul>
        {trucks.map((truck, i) => (
          <TruckCard key={i} truckName={truck} ></TruckCard>
        ))}
      </ul>
    </div>
  );
}
