// imports from next

// importing components
import TruckCard from "../components/TruckCard";
import { PageMain } from "../components/PageMain";

const trucks = ["halal", "teppanyaki", "bagel hut", "bob", "test"];

export default function AllTrucksPage() {
  return (
    <PageMain>
      <h1 className="text-5xl font-semibold" >All Trucks</h1>
      <hr className="m-10 text-gray-500 w-11/12"></hr>
      <ul className="flex justify-center flex-wrap gap-10 basis-52">
        {trucks.map((truck, i) => (
          <TruckCard key={i} truckName={truck}></TruckCard>
        ))}
      </ul>

      <ul>
        {trucks.map((truck, i) => (
          <a className="m-5" key={i} href={"/trucks/" + truck}>{truck}</a>
        ))}
      </ul>
    </PageMain>
  );
}
