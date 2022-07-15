import React from "react";

interface Props {
  url: string;
  className?: string;
}

const Avatar = ({ url, className }: Props) => {
  return (
    <img
      src={url}
      alt="Profile pic"
      loading="lazy"
      className={`w-10 h-10 rounded-full object-contain duration-150 transition transform hover:scale-110 cursor-pointer ${className}`}
    />
  );
};

export default Avatar;
