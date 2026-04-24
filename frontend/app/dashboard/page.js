"use client";

import { useEffect, useState } from "react";
import { PageMain } from "../components/PageMain";
import SignUpInfoDesign from "../components/SignUpInfoDesign";
import { useSearchParams } from "next/navigation";
import axiosClient from "../axiosClient";
import { Suspense } from 'react'; 

// move logic into separate component
function DashboardInner() {
  // State to hold truck data
  const [truck, setTruck] = useState({});
  // Get search parameters from the URL
  const searchParams = useSearchParams();

  // Fetch truck data when component mounts or when searchParams changes
  useEffect(() => {
    async function getTruck() {
      // Extract truckId from search parameters
      const truckId = searchParams.get("truckId");
      if (!truckId) return; // case if no ID is available for some reason
      
      // Make API call to fetch truck details
      const res = await axiosClient(`foodtrucks/${truckId}/`, null, "", "GET");
      // Update state with fetched truck data
      setTruck(res || {});
      // debug
      console.log(res);
    }

    getTruck();
  }, [searchParams]); 

  return (
    <SignUpInfoDesign truckData={truck} typeOfRequest="PUT" />
  );
}

// wrap logic in suspense to handle loading state
export default function DashboardPage() {
  return (
    <PageMain>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen text-white">
          Loading Truck Details...
        </div>
      }>
        <DashboardInner />
      </Suspense>
    </PageMain>
  );
}