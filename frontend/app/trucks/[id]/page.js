"use client"

// imports from next
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// imports from components
import axiosClient from "@/app/axiosClient";
import TruckCarousel from "../../components/TruckCarousel";
import { PageMain } from "../../components/PageMain";

import {
  MapPin,
  Clock,
  LucideCircleDollarSign,
  Phone,
  ForkKnife,
  StarIcon,
  Info,
  Mail, 
} from "lucide-react";

export default function TruckDetailPage() {
  const [truck, setTruck] = useState({});
  const {id} = useParams()

  useEffect(() => {
    async function getTruck() {
      const res = await axiosClient(`foodtrucks/${id}`, null, "", "GET");
      console.log(res);
      setTruck(res || {});
      console.log(truck)
    }

    getTruck();
  }, []);

  const listItems = [
    { icon: Info, label: truck.status},
    { icon: MapPin, label: truck.location },
    { icon: Clock, label: `${truck.openingTime} - ${truck.closingTime}` },
    { icon: LucideCircleDollarSign, label: truck.priceRange },
    { icon: Phone, label: "test" },
    { icon: ForkKnife, label: truck.foodType }, 
    { icon: StarIcon, label: "test" },
    { icon: Mail, label: truck.owner}
  ];

  const iconSize = 48;
  const iconColor = "black";

  return (
    <PageMain>
      <h1 className="text-5xl font-semibold">{truck.name}</h1>
      <hr className="my-10 text-gray-500 w-full"></hr>
      <div className="flex flex-row items-center justify-around">
        <h2 className="w-2/3 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h2>
        <img
          className="w-3/12 h-3/12 border-2 border-black"
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
        ></img>
      </div>
      <hr className="my-10 text-gray-500 w-full"></hr>
      <div className="flex gap-6 ">
        <div className="flex-1 min-w-0 overflow-hidden">
          <TruckCarousel />
        </div>

        <ul className="basis-1/3 flex flex-col justify-between items-center">
          {listItems.map(({ icon: Icon, label }, i) => (
            <li key={i} className="flex items-center gap-2 m-5 text-5xl">
              <Icon size={iconSize} color={iconColor} />
              <span className="mx-5">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageMain>
  );
}
