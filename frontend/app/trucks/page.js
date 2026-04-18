"use client";

// imports from next

// importing components
import { PageMain } from "../components/PageMain";
import SearchBar from "../components/SearchBar";
import TruckCardList from "../components/TruckCardList";
import MainPageTitle from "../components/MainPageTitle";

export default function AllTrucksPage() {
  return (
    <PageMain>
      <MainPageTitle
        title="All Trucks"
        description="The full list of every Food Truck that has registered with us. You can filter by name, type of truck to find exactly what you're looking for!"
      />

      <SearchBar />
      <TruckCardList
        title="All Trucks"
        request={["foodtrucks/", null, "", "GET"]}
      />
    </PageMain>
  );
}
