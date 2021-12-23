import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTags;
