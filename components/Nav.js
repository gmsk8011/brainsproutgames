import Image from "next/image";
import logo from "@/public/assets/logo3.png";

const Nav = () => {
  return (
    <nav className="fixed w-full z-10 border-gray-200 bg-gray-900">
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
        <div className="absolute text-white w-1/2 p-6 lg:hidden flex right-0 top-0 h-full bg-gray-900">
          <ul className="flex flex-col gap-4 w-full">
            <li className="self-end">X</li>
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
