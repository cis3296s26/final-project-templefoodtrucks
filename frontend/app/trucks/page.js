"use client";

// imports from next
import { useState } from "react";

// importing components
import { PageMain } from "../components/PageMain";
import SearchBar from "../components/SearchBar";
import TruckCardList from "../components/TruckCardList";
import MainPageTitle from "../components/MainPageTitle";
import { setReactDebugChannelForHtmlRequest } from "next/dist/server/dev/debug-channel";

export default function AllTrucksPage() {
  const [request, setRequest] = useState("")
  return (
    <PageMain>
      <MainPageTitle
        title="All Trucks"
        description="The full list of every Food Truck that has registered with us. You can filter by name, type of truck to find exactly what you're looking for!"
      />

      <SearchBar onSubmit={(e) => {getRequestFromSearchBar(e, setRequest); console.log(request)}} />
      <TruckCardList
        title="All Trucks"
        request={[`foodtrucks/${request}`, null, "", "GET"]}
      />
    </PageMain>
  );
}

function getRequestFromSearchBar(formData, setRequest){
  let query = "?"
  for(let key in formData){
    let value = formData[key] || ""
    query += `${key}=${value}&`
  }
  setRequest(query)
}
