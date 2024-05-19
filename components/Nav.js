"use client";

import Image from "next/image";
import logo from "@/public/assets/logo3.png";
import { useState } from "react";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

const Nav = () => {
  const [menu, setmenu] = useState(false);
  return (
    <nav className="fixed w-full top-0 z-10 border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex items-center gap-4 max-sm:justify-between max-md:justify-between mx-auto p-4">
        <div className="flex gap-4">
          <Image src={logo} width={60} alt="logo" />
        </div>
        <div className="start-0 max-sm:self-center text-2xl font-semibold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 text-transparent bg-clip-text">
          BrainSproutGames
        </div>
        <div className="flex justify-end text-white max-sm:hidden max-md:hidden w-full">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>Games</li>
            <li>Our Story</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {menu ? (
          <div
            className="lg:hidden flex text-4xl text-white items-center cursor-pointer fixed right-5 top-6 z-50"
            onClick={() => setmenu(!menu)}
          >
            <IoMdCloseCircle></IoMdCloseCircle>
          </div>
        ) : (
          <div
            className="text-3xl cursor-pointer text-blue-400 md:hidden lg:hidden"
            onClick={() => setmenu(!menu)}
          >
            <RiMenuUnfold4Fill></RiMenuUnfold4Fill>
          </div>
        )}
        <div
          className={`lg:hidden top-0 right-0 w-1/2 bg-gray-900 text-white p-6 fixed h-full z-40 ease-in-out duration-300
          ${menu ? "translate-x-0 " : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-4 w-full">
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
