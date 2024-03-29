import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="w-full px-8 py-3">
        <p>India</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-1 px-8 py-3 md:grid-cols-2 lg:grid-cols-3 gap-y-4 ">
        <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Carbon neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
