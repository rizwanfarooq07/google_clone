import React from "react";
import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <header className="flex justify-between w-full p-5 text-sm text-gray-700">
      {/* left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icons */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        {/* Avatar */}
        <Avatar url="https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE" />
      </div>
    </header>
  );
};

export default Header;
