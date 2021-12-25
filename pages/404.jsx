import MetaTags from "../components/MetaTags";
import { useRouter } from "next/router";

const Error404 = () => {
  const router = useRouter();

  return (
    <>
      <MetaTags title={404} />
      <div className="h-screen background flex items-center justify-center flex-col text-white">
        <p className="text-3xl md:text-5xl mb-3 md:mb-4">¯\_(ツ)_/¯</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          Error 404
        </h1>
        <div className="mb-3 md:mb-4 text-xl md:text-3xl">
          We can&apos;t find what you are looking for
        </div>
        <p className="text-3xl md:text-5xl mb-3 md:mb-4">¯\_(ツ)_/¯</p>
        <button
          className="p-2 text-lg md:text-2xl font-semibold hover:bg-white hover:text-black transition rounded-md animate-pulse hover:animate-none"
          onClick={() => router.back()}
        >
          Want to go back you came from?
        </button>
      </div>
    </>
  );
};

export default Error404;
