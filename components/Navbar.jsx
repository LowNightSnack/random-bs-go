import InAppLink from "./InAppLink";

const Navbar = ({}) => {
  const toggleSidebar = () => {
    console.log("menu pressed");
  };
  return (
    <div className="flex h-16 justify-between items-center bg-black text-white sticky top-0 p-4">
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
        <button onClick={toggleSidebar}>Menu</button>
      </div>
    </div>
  );
};

export default Navbar;
