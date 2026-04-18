"use client";

// imports from next
import axiosClient from "../axiosClient";
import { useEffect, useState } from "react";

// importing components
import TruckCard from "./TruckCard";

// request example: ["foodtrucks/", null, "", "GET"]
export default function TruckCardList({ request }) {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    async function allTrucks() {
      const res = await axiosClient(...request);
      console.log(res);
      setTrucks(res || []);
    }

    allTrucks();
  }, []);

  return (
    <div className="flex flex-wrap justify-center m-20 gap-7">
      {trucks.map((truck, i) => (
        <TruckCard key={i} truck={truck}></TruckCard>
      ))}
    </div>
  );
}
