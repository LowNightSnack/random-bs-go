import MetaTags from "../MetaTags";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DefaultLayout = ({ siteTitle, siteDescription, children }) => {
  return (
    <>
      <MetaTags title={siteTitle} description={siteDescription} />
      <div className="h-screen w-full flex flex-col justify-center overflow-hidden relative">
        <Navbar />
        <main className="p-10  flex-1 overflow-auto">
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
