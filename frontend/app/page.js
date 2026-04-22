"use client";

import { PageMain } from "./components/PageMain";
import MainPageTitle from "./components/MainPageTitle";
import TruckCardList from "./components/TruckCardList";
import NotificationBanner from "./components/NotificationBanner";

import { useState } from "react";

export default function Home() {
  // const [showNotif, setShowNotif] = useState(true);

  return (
    <PageMain>
      {/* <NotificationBanner
        message="Truck added successfully!"
        color="red"
        show={showNotif}
        duration={4000}
        onClose={() => setShowNotif(false)}
      /> */}

      <MainPageTitle
        title="Temple Food Trucks!"
        description="Discover your new favorite spot to eat at Temple!"
      />

      <h1 className="text-4xl font-serif">Popular Trucks</h1>
      <TruckCardList
        request={["foodtrucks/?popularity=3.5", null, "", "GET"]}
      />
      <h1 className="text-1xl font-serif">
        <i>Listed Trucks have a rating of 3.5 or more</i>
      </h1>
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Halal Trucks</h1>
      <TruckCardList
        request={["foodtrucks/?foodtype=halal&status=open", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Mexican Trucks</h1>
      <TruckCardList
        request={["foodtrucks/?foodtype=mexican&status=open", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Breakfast Trucks</h1>
      <TruckCardList
        request={[
          "foodtrucks/?foodtype=breakfast&status=open",
          null,
          "",
          "GET",
        ]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Drink/Dessert Trucks</h1>
      <TruckCardList
        request={["foodtrucks/?foodtype=dessert&status=open", null, "", "GET"]}
      />
      <hr className="my-8 border-t border-gray-300" />

      <h1 className="text-4xl font-serif">Cheap Trucks</h1>
      <TruckCardList request={["foodtrucks/?price=5", null, "", "GET"]} />
      <h1 className="text-1xl font-serif">
        <i>These trucks are typically under $10</i>
      </h1>
    </PageMain>
  );
}
