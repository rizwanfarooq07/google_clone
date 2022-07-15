import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import IconCard from "./IconCard";

const Body = () => {
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;

    if (!term) return;

    router.push(`/search?term=${term}&start=0`);
  };

  return (
    <form
      className="flex flex-col items-center flex-grow w-4/5 mt-24"
      onSubmit={search}
    >
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
        // layout="responsive"
      />
      <div className="flex items-center w-full max-w-md px-5 py-3 mt-2 border border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search Google or type a URL"
          className="flex-grow outline-none placeholder:text-gray-500"
        />
        <MicrophoneIcon className="h-5 text-blue-500" />
      </div>

      <div className="flex flex-col justify-center w-1/2 mt-4 space-y-2 sm:space-y-0 lg:flex-row sm:space-x-2">
        <IconCard url="/logos/epl.png" title="Premier League" />
        <IconCard url="/logos/twitter.png" title="Twitter" />
        <IconCard url="/logos/gmail.png" title="Gmail" />
        <IconCard url="/logos/facebook.png" title="Facebook" />
        <button type="submit" hidden className="btn">
          Google Search
        </button>
        {/* <button onClick={search} className="btn">
          I'm Feeling Lucky
        </button>  */}
      </div>
    </form>
  );
};

export default Body;
