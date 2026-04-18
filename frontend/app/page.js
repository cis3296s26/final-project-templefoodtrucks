"use client";

import { PageMain } from "./components/PageMain";
import MainPageTitle from "./components/MainPageTitle";
import TruckCardList from "./components/TruckCardList";

export default function Home() {
  return (
    <PageMain>
      <MainPageTitle
        title="Temple Food Trucks!"
        description="Discover your new favorite spot to eat at Temple!"
      />

      <h1 className="text-4xl font-serif">Popular Trucks</h1>
      <TruckCardList
        request={["filter_trucks?search=icantdothisyet", null, "", "GET"]}
      />
      <h1 className="text-1xl font-serif">Rate Your Favorites!!!</h1>
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Halal Trucks</h1>
      <TruckCardList
        request={["filter_trucks?search=halal", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Mexican Trucks</h1>
      <TruckCardList
        request={["filter_trucks?search=mexican", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Breakfast Trucks</h1>
      <TruckCardList
        request={["filter_trucks?search=breakfast", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Drink/Dessert Trucks</h1>
      <TruckCardList
        request={["filter_trucks?search=dessert", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Cheap Trucks</h1>
      <TruckCardList
        request={["filter_trucks?search=cheap", null, "", "GET"]}
      />
      <h1 className="text-1xl font-serif">
        These trucks are typically under $10
      </h1>
    </PageMain>
  );
}
