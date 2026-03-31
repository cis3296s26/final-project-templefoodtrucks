import Image from "next/image";
import TruckCard from "./components/TruckCard";
import { PageMain } from "./components/PageMain";

export default function Home() {
  return (
    <PageMain>
      <h1 className="text-5xl font-semibold" >Temple Food Trucks!</h1>
      <hr className="m-10 text-gray-500 w-11/12"></hr>
      <h1><b>TODO: </b>this page should show open trucks, with links to see all the trucks</h1>
    </PageMain>
  );
}
