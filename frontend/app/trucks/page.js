// imports from next

// importing components
import TruckCard from "../components/TruckCard";
import { PageMain } from "../components/PageMain";

const trucks = ["halal", "teppanyaki", "bagel hut", "bob", "test1", "test2", "test3"];

export default function AllTrucksPage() {
  return (
    <PageMain>
      <div className="flex flex-wrap justify-center m-20 gap-7"> {/* Keep this for now so that the box is centered */}
        {/* <h1>All Trucks</h1> */}
        
        {trucks.map((truck, i) => (
          <TruckCard key={i} truckName={truck} ></TruckCard>
        ))}
      
      </div>
    </PageMain>
  );
}
