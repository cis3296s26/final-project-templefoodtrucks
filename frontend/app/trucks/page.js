// imports from next

// importing components
import TruckCard from "../components/TruckCard";
import { PageMain } from "../components/PageMain";

const trucks = ["halal", "teppanyaki", "bagel hut", "bob"];

export default function AllTrucksPage() {
  return (
    <PageMain>
    <div>
      <h1>All Trucks</h1>
      <ul>
        {trucks.map((truck, i) => (
          <TruckCard key={i} truckName={truck} ></TruckCard>
        ))}
      </ul>
    </div>
    </PageMain>
  );
}
