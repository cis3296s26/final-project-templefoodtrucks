import TruckCard from "../../components/TruckCard";
import { PageMain } from "../../components/PageMain";

export default async function TruckDetailPage({ params }) {
  const { truckDetail } = await params;
  return (
    <PageMain>
      <h1 className="text-5xl font-semibold" >{truckDetail}</h1>
      <hr className="m-10 text-gray-500 w-11/12"></hr>
    </PageMain>
  );
}
