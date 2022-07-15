import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PaginationButtons = () => {
  const router = useRouter();

  console.log(router.query);

  const startIndex: number = Number(router.query.start);

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-7">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        href={`/search?term=${router.query.term}&start=${
          parseInt(startIndex.toString()) + 10
        }`}
      >
        <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
