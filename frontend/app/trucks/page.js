// imports from next

// importing components
import TruckCard from "../components/TruckCard";

const trucks = ["halal", "teppanyaki", "bagel hut"];

export default function AllTrucksPage() {
  return (
    <div>
      <h1>All Trucks</h1>
      <ul>
        {trucks.map((truck) => (
          <li key={truck}>
            <a href={`/trucks/${truck}`}>{truck}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
