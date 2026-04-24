"use client";

import { useState, useEffect } from "react";
import { Typefoodbutton } from "./Typefoodbutton";
import TruckAnimation from "./TruckAnimation";
import MiniPopUpInfo from "./MiniPopUpInfo";
import { useRouter } from "next/navigation";
import axiosClient from "../axiosClient";
import NotificationBanner from "./NotificationBanner";
import {
  Truck
} from 'lucide-react'

export default function SignUpInfoDesign({ truckData, typeOfRequest }) {
  const router = useRouter();

  const [typefood, settypefood] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [foodlist, setfoodlist] = useState([]);
  const [primage, setprimage] = useState(null);
  const [allimg, setallimg] = useState([null]);

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (Object.keys(truckData).length > 0) {
      // we got a real truck here
      console.log(truckData);
      truckData["minPrice"] = truckData["priceRangeArray"][0];
      truckData["maxPrice"] = truckData["priceRangeArray"][1];
      delete truckData.owner;
      delete truckData.popularity;
      delete truckData.priceRangeArray;

      let inputs = document.getElementsByTagName("input");
      for (let input of inputs) {
        if (input.name == "dietaryRestrictions") {
          for (const dietRestrict of truckData["dietaryRestrictions"]) {
            settypefood(dietRestrict);
            addFood();
          }
        } 
        else if (input.type == "file") {
          setprimage(truckData[input.name])
          input.src = truckData[input.name]
        }
        else{
          input.value = truckData[input.name];
        }
      }

      let textareas = document.getElementsByTagName("textarea");
      for (let textarea of textareas) {
        textarea.value = truckData[textarea.name];
      }
    }
  }, [truckData]);

  function addFood(e) {
    if (e) {
      e.preventDefault();
    }
    if (typefood.trim() === "") return;
    setfoodlist([
      ...foodlist,
      { name: typefood, color1: randomColor(), color2: randomColor() },
    ]);
    setDietaryRestrictions([...dietaryRestrictions, typefood]);
    settypefood("");
  }

  function removeFood(index) {
    setfoodlist(foodlist.filter((_, i) => i !== index));
    setDietaryRestrictions(dietaryRestrictions.filter((_, i) => i !== index));
  }

  function randomColor() {
    const colors = ["#40E0D0", "#00FFFF", "#00BFFF", "#7DF9FF", "#0070BB"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function importpriImg(e) {
    const file = e.target.files[0];
    if (!file) return;
    setprimage(URL.createObjectURL(file));
  }

  function handleAdditionalImage(index, file) {
    const newImgs = [...allimg];
    newImgs[index] = URL.createObjectURL(file);
    setallimg(newImgs);
  }

  function addImageField() {
    setallimg([...allimg, null]);
  }

  async function create_food_truck(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.delete("dietaryRestrictions");

    dietaryRestrictions.forEach((item) => {
      formData.append("dietaryRestrictions", item.toString().slice(0, 20));
    });

    formData.set("minPrice", Number(formData.get("minPrice")));
    formData.set("maxPrice", Number(formData.get("maxPrice")));

    formData.set("popularity", 0);

    const galleryInputs = document.querySelectorAll(
      'input[name="image_gallery_"]',
    );

    galleryInputs.forEach((input) => {
      if (input.files[0]) {
        formData.append("image_gallery", input.files[0]);
      }
    });

    // if truck data exists, its a put, else, it's a post

    try {
      const res = await axiosClient(
        "create_food_truck/",
        formData,
        localStorage.getItem("access_token"),
        typeOfRequest,
        true
      );

      let url = `/trucks/${res.id}`
      if(typeOfRequest=="PUT"){url += "?isNew=1"}
      
      router.push(url);
    } catch (err) {
      setNotification({
        message: "Sorry, Truck Was Not Created | " + err.message,
        color: "red",
        duration: 5000,
      });
    }
  }
  return (
    <div className="flex justify-center p-6 min-h-screen">
      {notification && (
        <NotificationBanner
          duration={notification.duration}
          color={notification.color}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="relative w-full px-25 max-w-8/12 bg-linear-to-b border-2 from-white/50 to-black/50 rounded-3xl shadow-xl/30 shadow-black pt-8 pb-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Food Truck Registration
        </h1>
        <Truck className="animate-pulse scale-200 relative bottom-2 left-10"></Truck>
        {/* <TruckAnimation className="animate-truck2 opacity-100" /> */}
        {/* <MiniPopUpInfo className="relative z-10"></MiniPopUpInfo> */}

        <form
          onSubmit={(e) => {
            create_food_truck(e);
          }}
          className="space-y-8 "
        >
          {/* General */}
          <Section title="Truck Information" color="bg-blue-500">
            <input name="name" type="text" placeholder="Truck Name" required />
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="input h-32 resize-none"
              required
            />
          </Section>

          {/* Dietary */}
          <Section title="Dietary Restrictions" color="bg-green-400">
            <div className="flex gap-2">
              <input
                name="dietaryRestrictions"
                value={typefood}
                onChange={(e) => settypefood(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addFood(e)}
                placeholder="Ex: Vegan"
                className="input flex-1"
              />
              <Typefoodbutton onClick={addFood}>Add</Typefoodbutton>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {foodlist.map((f, i) => (
                <span
                  key={i}
                  style={{
                    background: `linear-gradient(${f.color1}, ${f.color2})`,
                  }}
                  className="px-4 py-2 rounded-xl text-white relative group"
                >
                  {f.name}
                  <button
                    onClick={() => removeFood(i)}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 font-black cursor-pointer text-red-500 text-4xl"
                  >
                    X
                  </button>
                </span>
              ))}
            </div>
          </Section>

          {/* Price */}
          <Section title="Price Range" color="bg-orange-400">
            <div className="flex gap-4">
              <input
                name="minPrice"
                type="number"
                placeholder="Min"
                className="input w-24"
              />
              <span className="flex items-center">to</span>
              <input
                name="maxPrice"
                type="number"
                placeholder="Max"
                className="input w-24"
              />
            </div>
          </Section>

          {/* Time */}
          <Section title="Working Hours" color="bg-red-400">
            <div className="flex gap-4">
              <input
                name="openingTime"
                type="time"
                placeholder="Opening Time"
                className="input w-24"
              />
              <span className="flex items-center">to</span>
              <input
                name="closingTime"
                type="time"
                placeholder="Closing Time"
                className="input w-24"
              />
            </div>
          </Section>

          {/* Type of Food */}
          <Section title="Type Of Food" color="bg-lime-400">
            <input
              name="foodType"
              type="text"
              placeholder="Type Of Food"
              className="input w-24"
              required
            />
          </Section>

          {/* Location */}
          <Section title="Location" color="bg-teal-400">
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-24"
            />
          </Section>

          {/* Primary Image */}
          <Section title="Primary Image" color="bg-amber-400">
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={importpriImg}
            />
            {primage && (
              <img src={primage} className="mt-3 rounded-xl max-h-60" />
            )}
          </Section>

          {/* Additional Images */}
          <Section title="Additional Images" color="bg-violet-400">
            {allimg.map((img, index) => (
              <div key={index} className="flex flex-col gap-2">
                <input
                  name="image_gallery_"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleAdditionalImage(index, e.target.files[0])
                  }
                />
                {img && (
                  <img src={img} className="rounded-xl max-h-40 border" />
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addImageField}
              className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
            >
              + Add Another Image
            </button>
          </Section>

          {/* Submit */}
          <button className="w-full py-3 text-xl font-bold bg-black text-white rounded-xl hover:scale-105 border transition">
            Register
          </button>
        </form>
      </div>

      <style jsx>{`
        input,
        textarea {
          background: white;
          padding: 10px;
          border-radius: 20px;
          width: 100%;
          outline: none;
        }

        input[type="file"]::file-selector-button {
          border: 2px solid #000;
          padding: 5px 10px;
          border-radius: 15px;
          background-color: #fff;
          transition: 0.3s;
          cursor: pointer;
          margin-right: 25px;
        }
      `}</style>
    </div>
  );
}

function Section({ title, children, color }) {
  return (
    <div className={`${color} p-6 bg-opacity rounded-2xl shadow-lg/30`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
