import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const MainHeader = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const search = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search?term=${searchInput}&start=0`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        {" "}
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
          // layout="responsive"
        />
        <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
          <input
            type="text"
            value={searchInput}
            className="flex-grow w-full outline-none"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <XIcon
            className="h-6 text-gray-500 transition duration-100 ease-in-out transform cursor-pointer hover:scale-125 sm:mr-3"
            onClick={() => setSearchInput("")}
          />
          <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE"
          className="ml-auto"
        />
      </div>

      {/* Header options */}
      <HeaderOptions />
    </header>
  );
};

export default MainHeader;
