import Head from "next/head";

const MetaTags = ({ title, description, children }) => {
  title = title ? title + " | Random BS Go!" : "Random BS Go!";
  description = description ? description : "Sell Random stuff online!";
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content={`/favicon.ico`} />
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      {children}
    </Head>
  );
};

export default MetaTags;
