"use client"

import { useEffect, useState } from "react";

import Navbar from "./Navbar";

export function PageMain({children}) {
  const [bgColor, setBGColor] = useState(getBackgroundColor(0))

  useEffect(() => {
    const handleScroll = () => {
      setBGColor(getBackgroundColor(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div 
      style={{backgroundColor: bgColor}}
      className={`pt-18 relative flex min-h-screen flex-col items-center h-max pb-12 justify-center px-15`}
    >
      <Navbar></Navbar>
      <main className="grow my-5 text-center">{children}</main>
    </div>
    </>
  );  
}

const getBackgroundColor = (scroll) => {
  const min = 175;
  const max = 215;

  const speed = 0.05;

  let green = Math.floor(Math.min(max, min + scroll * speed));
  let blue = Math.floor(Math.max(min, max - scroll * speed))

  return `rgb(150, ${green}, ${blue})`;
};