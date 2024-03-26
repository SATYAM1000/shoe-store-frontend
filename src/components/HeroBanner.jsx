"use client"
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1280px] mx-auto">
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
        <div>
          <Image
            src={"/assets/slide-1.png"}
            alt="slide1"
            height={1000}
            width={1280}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[20px] py-[10px] md:py-[15px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] cursor-pointer hover:opacity-80 font-medium 
         text-[15px] md:text-[20px]"
          >
            Shop now
          </div>
        </div>

        <div>
          <Image
            src={"/assets/slide-2.png"}
            alt="slide1"
            height={1000}
            width={1280}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
           <div
            className="px-[15px] md:px-[20px] py-[10px] md:py-[15px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] cursor-pointer hover:opacity-80 font-medium 
         text-[15px] md:text-[20px]"
          >
            Shop now
          </div>
        </div>

        <div>
          <Image
            src={"/assets/slide-3.png"}
            alt="slide1"
            height={1000}
            width={1280}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[20px] py-[10px] md:py-[15px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] cursor-pointer hover:opacity-80 font-medium 
         text-[15px] md:text-[20px]"
          >
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
