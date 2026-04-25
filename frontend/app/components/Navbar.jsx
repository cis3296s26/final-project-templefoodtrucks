"use client";

import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

import {
  CircleQuestionMark,
  ForkKnifeCrossedIcon,
  UserPlus,
  UserMinus,
  TruckIcon,
} from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  const [navLinks, setNavLinks] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    let isLoggedIn = !!localStorage.getItem("access_token");
    let loginOrCreateFoodTruck = isLoggedIn
      ? [
          {
            href: "/signup/signup_info",
            label: "Create A Food Truck",
            icon: TruckIcon,
          },
          { href: "/logout", label: "Log Out", icon: UserMinus},
        ]
      : [{ href: "/login", label: "Log In", icon: UserPlus }];

    let navLinksData = [
      { href: "/trucks", label: "All Trucks", icon: ForkKnifeCrossedIcon },
      { href: "/about", label: "About", icon: CircleQuestionMark },
      ...loginOrCreateFoodTruck,
    ];

    setNavLinks(navLinksData);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.75 after:bg-[#b50043]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="hidden sm:inline font-serif">
                Temple Food Trucks
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => getHTMLFromLinkData(link, pathname))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function getHTMLFromLinkData(link, pathname) {
  const isActive = pathname === link.href;

  return (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
        isActive
          ? "text-white  bg-green-500/50"
          : "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
      )}
    >
      {link.profile_pic ? (
        <img className="w-4 h-4" src={link.profile_pic} />
      ) : (
        <link.icon className="w-4 h-4"></link.icon>
      )}
      <span className="hidden sm:inline">{link.label}</span>
    </Link>
  );
}
