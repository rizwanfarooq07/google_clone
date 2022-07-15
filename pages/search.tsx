import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainHeader from "../components/MainHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

interface Props {
  results: any;
}

const Search = ({ results }: Props) => {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData: boolean = false;
  const startIndex = context.query.start || "0";
  const {
    query: { term },
  } = context;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${term}&start=${startIndex}`
      ).then((response) => response.json());

  // after the server has rendered... Pass the resutls to the client...

  return {
    props: {
      results: data,
    },
  };
};
