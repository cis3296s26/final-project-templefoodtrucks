"use client";

// imports from next
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// imports from components
import axiosClient from "@/app/axiosClient";
import TruckCarousel from "../../components/TruckCarousel";
import { PageMain } from "../../components/PageMain";
import NotificationBanner from "@/app/components/NotificationBanner";

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
  const searchParams = useSearchParams();

  const [notification, setNotification] = useState(null);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [priceRangeArray, setPriceRangeArray] = useState(["?", "?"]);
  const [truck, setTruck] = useState({});
  const { id } = useParams();
  const newTruck = searchParams.get("isNew");

  useEffect(() => {
    async function getTruck() {
      const res = await axiosClient(`foodtrucks/${id}/`, null, "", "GET");
      setTruck(res || {});
      setDietaryRestrictions(res.dietaryRestrictions);
      setPriceRangeArray(res.priceRangeArray);
      console.log(truck);
    }

    getTruck();

    if (newTruck) {
      setNotification({
        message: "Created New Truck!",
        color: "green",
        duration: 5000,
      });
    }
  }, []);

  const listItems = [
    { icon: Info, label: truck.status },
    {
      icon: MapPin,
      label: truck.location,
      onclick: () => {
        window.open(
          `https://www.google.com/maps/search/${truck.location}`,
          "_blank",
        );
      },
    },
    { icon: Clock, label: `${truck.openingTime} - ${truck.closingTime}` },
    {
      icon: LucideCircleDollarSign,
      label: `$${priceRangeArray[0]} - $${priceRangeArray[1]}`,
    },
    {
      icon: Phone,
      label: truck.phoneNumber,
      onclick: () => {
        navigator.clipboard.writeText(truck.phoneNumber);
        setNotification({
          message: "Copied Phone Number To Clipboard!",
          color: "blue",
        });
      },
    },
    { icon: ForkKnife, label: truck.foodType },
    { icon: StarIcon, label: `${truck.popularity}/5` },
  ];

  const iconSize = 48;

  return (
    <PageMain>
      {notification && (
        <NotificationBanner
          duration={notification.duration}
          color={notification.color}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

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

        <div className="lg:col-span-2 bg-white/50 rounded-2xl max-w-1/2 shadow-md border p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {listItems.map(({ icon: Icon, label, onclick }, i) => (
              <li
                key={i}
                onClick={onclick}
                className={`flex items-center gap-2 m-2 border p-3 rounded-lg transition-transform duration-200 ${
                  onclick ? "hover:scale-105 cursor-pointer" : ""
                }`}
              >
                <div className="p-3 rounded-xl bg-gray-100">
                  <Icon size={iconSize} className="text-gray-700" />
                </div>
                <span className="text-3xl font-medium text-gray-800">
                  {label || "N/A"}
                </span>
              </li>
            ))}
          </ul>
        </div>
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
