import type { NextPage } from "next";
import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
