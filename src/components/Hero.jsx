import React from "react";
import image1 from "../../public/assets/playlist-cover-1.jpg";
import image2 from "../../public/assets/playlist-cover-2.webp";
import image3 from "../../public/assets/playlist-cover-3.png";
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className="overflow-hidden md:hidden">
        <div className="flex w-full gap-4 overflow-x-scroll h-[250px]">
          <div className="relative min-w-full">
            <Image src={image1} alt="" className="absolute w-full h-full" />
          </div>
          <div className="relative  min-w-full">
            <Image src={image2} alt="" className="absolute w-full h-full" />
          </div>
          <div className="relative  min-w-full">
            <Image src={image3} alt="" className="absolute w-full h-full" />
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4 md:h-[150px] lg:h-[200px] xl:h-[300px]">
        <div className="relative hover:scale-105 transition-all duration-300">
          <Image src={image1} alt="" className="absolute w-full h-full" />
        </div>
        <div className="relative hover:scale-105 transition-all duration-300">
          <Image src={image2} alt="" className="absolute w-full h-full" />
        </div>
        <div className="relative hover:scale-105 transition-all duration-300">
          <Image src={image3} alt="" className="absolute w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default Hero;
