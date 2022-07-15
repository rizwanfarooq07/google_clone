import Link from "next/link";
import React from "react";
import PaginationButtons from "./PaginationButtons";

interface Props {
  results: any;
}

const SearchResults = ({ results }: Props) => {
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-gray-600 text-md">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result: any) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <Link href={result.link} className="text-sm">
              {result.formattedUrl}
            </Link>
            <Link href={result.link}>
              <h2 className="text-xl font-medium text-blue-800 truncate cursor-pointer group-hover:underline">
                {result.title}
              </h2>
            </Link>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
