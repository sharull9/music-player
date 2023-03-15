import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";

function Card({ name, time, src, alt, duration }) {
  return (
    <div className="grid grid-cols-4">
      <div className="relative w-[70px] object-cover">
        <Image className="absolute object-cover" src={src} alt={alt} />
      </div>
      <div className="col-span-2 flex justify-start flex-col">
        <h3>{name}</h3>
        <p className="text-xs">{time}</p>
      </div>
      <div className="grid grid-rows-3">
        <MoreHorizIcon />
        <p>{duration}</p>
      </div>
    </div>
  );
}

export default Card;
