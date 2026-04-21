"use client";
// import { Image, View, Text, StyleSheet } from "react-native";

import IconCard from "./IconCard";
import Link from "next/link";
import StoreStatus from "./StoreStatus";

import { Star } from "lucide-react";

export default function TruckCard({ truck }) {
  const truckName = truck.name;
  const isOpen = truck.status;
  const foodType = truck.foodType;
  const description = truck.description;
  const location = truck.location;
  const id = truck.id;
  const phoneNumber = truck.phoneNumber;
  const popularity = truck.popularity;

  return (
    <Link
      href={`/trucks/${id}`}
      className="bg-blue-500 mb-4 w-3/12 rounded-4xl border-4 m-4 overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl"
    >
      <div className="h-full flex flex-col justify-between">
        {" "}
        {/* This is to stylize the content and the individual card */}
        {/* Replace the bg-amber-800 div with this */}
        <div className="h-64 relative overflow-hidden">
          <div className="absolute bottom-2 border-1 left-1/2 transform -translate-x-1/2 bg-white/70 border-black px-3 py-1 rounded-xl  flex gap-1 ">
            {renderStars(popularity)}
          </div>
          {truck.image ? (
            <img
              src={truck.image}
              alt={truckName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-amber-800 w-full h-full flex items-center justify-center">
              <span className="text-white text-5xl font-bold">
                No Image Available
              </span>
            </div>
          )}

          {/* Your StoreStatus overlay stays exactly the same */}
          <div className="w-30 h-10 absolute bottom-2 right-2">
            <div className="flex flex-wrap justify-center absolute bottom-50 border-3 border-black bg-white w-30 h-10 rounded-2xl overflow-hidden">
              <StoreStatus isOpen={isOpen} />
            </div>
          </div>
        </div>
        {/* Below is the descriptions that are inside the box */}
        <h1 className="p-8 text-center text-3xl font-bold">{truckName}</h1>
        <hr />
        <p className="p-4 wrap-break-word">{description}</p>
        <hr />
        <IconCard
          location={location}
          phoneNumber={phoneNumber}
          foodType={foodType}
        ></IconCard>
      </div>
    </Link>
  );
}

const renderStars = (popularity) => {
  return Array.from({ length: 5 }, (_, i) => {
    const fill = Math.min(Math.max(popularity - i, 0), 1); // value between 0 and 1

    return (
      <div key={i} className="relative w-5 h-5">
        {/* Empty (background) star */}
        <Star className="w-5 h-5 text-gray-300 stroke-1 stroke-black absolute top-0 left-0" />

        {/* Filled portion */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${fill * 100}%` }}
        >
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 stroke-black stroke-1" />
        </div>
      </div>
    );
  });
};

// Name
// Icon: type of food (middle-eastern, smoothie), location
// open_status
