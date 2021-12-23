import InAppLink from "./InAppLink";
import { MenuAlt1Icon } from "@heroicons/react/solid";

const Navbar = ({}) => {
  const toggleSidebar = () => {
    console.log("menu pressed");
  };
  return (
    <header className="flex h-16 justify-between items-center bg-black text-white top-0 p-4">
      <InAppLink href="/">Home</InAppLink>
      <div className="flex items-center">
        <InAppLink
          href="/browse"
          className="mr-4 hover:bg-white hover:text-black transition rounded-md p-2"
        >
          Browse
        </InAppLink>
        <InAppLink
          href="/sell"
          className="mr-4 hover:bg-white hover:text-black transition rounded-md p-2"
        >
          Sell
        </InAppLink>
        <button onClick={toggleSidebar}>
          <MenuAlt1Icon className="h-10 w-10 hover:bg-white p-2 rounded-md transition hover:text-black" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
