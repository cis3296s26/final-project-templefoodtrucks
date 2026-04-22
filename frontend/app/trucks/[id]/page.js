"use client";

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
} from "lucide-react";

export default function TruckDetailPage() {
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [priceRangeArray, setPriceRangeArray] = useState(['?', '?']);
  const [truck, setTruck] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getTruck() {
      const res = await axiosClient(`foodtrucks/${id}/`, null, "", "GET");
      setTruck(res || {});
      setDietaryRestrictions(res.dietaryRestrictions);
      setPriceRangeArray(res.priceRangeArray);
      console.log(truck);
    }

    getTruck();
  }, []);

  const listItems = [
    { icon: Info, label: truck.status },
    { icon: MapPin, label: truck.location },
    { icon: Clock, label: `${truck.openingTime} - ${truck.closingTime}` },
    { icon: LucideCircleDollarSign, label: `$${priceRangeArray[0]} - $${priceRangeArray[1]}` },
    { icon: Phone, label: truck.phoneNumber },
    { icon: ForkKnife, label: truck.foodType },
    { icon: StarIcon, label: `${truck.popularity}/5` },
  ];

  const iconSize = 48;
  const iconColor = "black";

  return (
    <PageMain>
      <h1 className="text-5xl font-semibold">{truck.name}</h1>
      <hr className="my-10 text-gray-500 w-full"></hr>
      <div className="flex flex-row items-center justify-around">
        <h2 className="w-2/3 text-3xl leading-relaxed">{truck.description}</h2>
        {/* The Dynamic Image Container */}
        <div className="w-3/12 h-auto border-2 border-black rounded-xl overflow-hidden shadow-lg bg-amber-800">
          {truck.image ? (
            <img
              className="w-full h-full object-cover"
              src={truck.image}
              alt={truck.name}
            />
          ) : (
            <div className="bg-amber-800 w-full h-64 flex items-center justify-center text-white italic">
              No Image Available
            </div>
          )}
        </div>
      </div>

      <hr className="my-10 text-gray-500 w-full"></hr>

      <div className="flex gap-10 max-h-150">
        <div className="flex-1 min-w-0 overflow-hidden rounded-3xl border-2 border-black">
          <TruckCarousel images={truck.gallery_images} />
        </div>

        <ul className="basis-1/3 flex flex-col justify-evenly">
          {listItems.map(({ icon: Icon, label }, i) => (
            <li key={i} className="flex items-center gap-16 mb-8 text-4xl">
              <Icon size={iconSize} color={iconColor} className="shrink-0" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-10 text-gray-500 w-full"></hr>

      <h1 className="text-3xl mb-6">Dietary Restrictions</h1>

      <div className="flex flex-wrap gap-3 justify-center">
        {dietaryRestrictions.map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-green-100 text-green-800 text-lg font-medium rounded-full shadow-sm border border-green-300"
          >
            {item}
          </span>
        ))}
      </div>
    </PageMain>
  );
}
