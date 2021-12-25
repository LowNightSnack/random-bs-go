import InAppLink from "./InAppLink";
import { MenuAlt1Icon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = ({}) => {
  const [sidebarToggle, setSidebarToogle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToogle(!sidebarToggle);
    console.log("menu pressed");
  };

  return (
    <>
      <header className="flex h-20 justify-between items-center bg-black text-white top-0 p-4">
        <InAppLink
          href="/"
          className="h-full hover:bg-white hover:text-black transition rounded-md p-2 flex items-center"
        >
          Home
        </InAppLink>
        <div className="flex h-full items-center">
          <InAppLink
            href="/browse"
            className="mr-4 h-full hover:bg-white hover:text-black transition rounded-md p-2 flex items-center"
          >
            Browse
          </InAppLink>
          <InAppLink
            href="/sell"
            className="mr-4 h-full hover:bg-white hover:text-black transition rounded-md p-2 flex items-center"
          >
            Sell
          </InAppLink>
          <button
            onClick={toggleSidebar}
            className="h-full hover:bg-white hover:text-black transition rounded-md px-2 flex items-center"
          >
            <MenuAlt1Icon className="h-7 w-7" />
          </button>
        </div>
      </header>
      <div
        className={`fixed top-20 h-full w-full transition bg-black${
          sidebarToggle
            ? " pointer-events-auto bg-opacity-50"
            : " pointer-events-none bg-opacity-0"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
