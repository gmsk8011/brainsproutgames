"use client";

import Image from "next/image";
import logo from "@/public/assets/logo3.png";
import { useState } from "react";

const Nav = () => {
  const [menu, setmenu] = useState(false);
  return (
    <nav className="fixed w-full top-0 z-10 border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-4">
          <Image src={logo} width={60} alt="logo" />
          <span className="self-center text-2xl font-semibold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 text-transparent bg-clip-text">
            BrainSproutGames
          </span>
        </div>
        <div className="text-white max-sm:hidden">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>Games</li>
            <li>Our Story</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {menu ? (
          <div></div>
        ) : (
          <div
            className="text-white cursor-pointer"
            onClick={() => setmenu(!menu)}
          >
            Menu
          </div>
        )}
        <div
          className={`top-0 right-0 w-1/2 bg-gray-900 text-white p-6 fixed h-full z-40 ease-in-out duration-300
          ${menu ? "translate-x-0 " : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-4 w-full">
            <li
              className="self-end text-3xl cursor-pointer"
              onClick={() => setmenu(!menu)}
            >
              X
            </li>
            <li>Home</li>
            <li>Games</li>
            <li>Our Story</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
