import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <Head>
      <title>{title ? title : "Random BS Go!"}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaTags;
