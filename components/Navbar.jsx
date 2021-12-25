import InAppLink from "./InAppLink";
import {
  CurrencyRupeeIcon,
  DocumentSearchIcon,
  HomeIcon,
  MenuAlt1Icon,
} from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = ({}) => {
  const [sidebarToggle, setSidebarToogle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToogle(!sidebarToggle);
    console.log("menu pressed");
  };

  return (
    <>
      <header className="background flex text-sm h-16 md:text-lg md:h-20 justify-between items-center text-white top-0 p-3 md:p-4">
        <InAppLink
          href="/"
          className="h-full hover:bg-white hover:text-black transition rounded-md p-2 flex items-center"
        >
          <HomeIcon className="h-7 w-7 mr-1" />
          Home
        </InAppLink>
        <div className="flex h-full items-center">
          <InAppLink
            href="/browse"
            className="mr-4 h-full hover:bg-white hover:text-black transition rounded-md p-2 flex items-center"
          >
            <DocumentSearchIcon className="h-7 w-7 md:mr-1" />
            <span className="hidden md:block">Browse</span>
          </InAppLink>
          <InAppLink
            href="/sell"
            className="mr-4 h-full hover:bg-white hover:text-black transition rounded-md p-2 flex items-center"
          >
            <CurrencyRupeeIcon className="h-7 w-7 md:mr-1" />
            <span className="hidden md:block">Sell</span>
          </InAppLink>
          <button
            onClick={toggleSidebar}
            className="h-full hover:bg-white hover:text-black transition rounded-md px-2 flex items-center"
          >
            <MenuAlt1Icon className="h-7 w-7 md:mr-1" />
            <span className="hidden md:block">Menu</span>
          </button>
        </div>
      </header>
      <div
        className={`fixed top-16 md:top-20 h-full w-full transition bg-black${
          sidebarToggle
            ? " pointer-events-auto bg-opacity-50"
            : " pointer-events-none bg-opacity-0"
        }`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Navbar;
