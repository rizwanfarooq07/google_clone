import React from "react";

interface Props {
  url: string;
  title: string;
}

const IconCard = ({ url, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-md cursor-pointer w-28 hover:bg-gray-200">
      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full">
        <img src={url} alt={title} className="object-contain w-8 h-8" />
      </div>
      <p className="mt-3 text-sm font-light text-center line-clamp-1">
        {title}
      </p>
    </div>
  );
};

export default IconCard;
