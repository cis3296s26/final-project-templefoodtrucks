"use client";

// imports from next
import axiosClient from "../axiosClient";
import { useEffect, useState } from "react";

// importing components
import TruckCard from "../components/TruckCard";
import { PageMain } from "../components/PageMain";
import SearchBar from "../components/SearchBar";

export default function AllTrucksPage() {
  const [trucks, setTrucks] = useState([])

  useEffect(() => {
    async function allTrucks() {
      const res = await axiosClient("foodtrucks/", null, "", "GET");
      console.log(res)
      setTrucks(res)
    }

    allTrucks();
  }, []);

  return (
    <PageMain>
      <SearchBar></SearchBar>
      <div className="flex flex-wrap justify-center m-20 gap-7">
        {" "}
        {/* Keep this for now so that the box is centered */}
        {/* <h1>All Trucks</h1> */}
        {trucks?.map((truck, i) => (
          <TruckCard key={i} truck={truck}></TruckCard> 
        ))}
      </div>
    </PageMain>
  );
}