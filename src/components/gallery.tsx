"use client";

import Image from "next/image";
import React from "react";
//import the images statically

import imageOne from "public/images/events/1.png";
import imageTwo from "public/images/events/2.png";
import imageThree from "public/images/events/3.png";
import imageFour from "public/images/events/4.png";
import imageFive from "public/images/events/5.png";
import imageSix from "public/images/events/6.png";
import imageSeven from "public/images/events/7.png";

export default function Gallery() {
  const data = [
    {
      imgelink: imageOne,
    },
    {
      imgelink: imageTwo,
    },
    {
      imgelink: imageThree,
    },
    {
      imgelink: imageFour,
    },
    {
      imgelink: imageFive,
    },
    {
      imgelink: imageSix,
    },
    {
      imgelink: imageSeven,
    },
  ];

  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="rounded-lg object-cover object-center h-auto w-full"
          src={data[0].imgelink}
          alt=""
          height={1600}
          width={900}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.splice(1, data.length).map(({ imgelink }, index) => (
          <div key={index}>
            <Image
              src={imgelink}
              className="h-[400px] w-full rounded-lg object-cover object-center"
              alt="gallery-image"
              height={1600}
              width={900}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
