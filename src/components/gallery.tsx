"use client";

import Image from "next/image";
import React from "react";
//import the images statically

import imageOne from "/public/images/events/1.png";
import imageTwo from "/public/images/events/2.png";
import imageThree from "/public/images/events/3.png";
import imageFour from "/public/images/events/4.png";
import imageFive from "/public/images/events/5.png";
import imageSix from "/public/images/events/6.png";
import imageSeven from "/public/images/events/7.png";
import imageNine from "/public/images/events/9.png";
import imageTen from "/public/images/events/10.png";
import imageEleven from "/public/images/events/11.png";
import imageTwelve from "/public/images/events/12.png";
import imageThirteen from "/public/images/events/13.png";
import imageFourteen from "/public/images/events/14.png";
import imageFifteen from "/public/images/events/15.png";
import imageSixteen from "/public/images/events/16.png";
import imageSeventeen from "/public/images/events/17.png";
import imageEighteen from "/public/images/events/18.png";


export default function Gallery() {
  const data = [
    {
      imgelink: imageTwo,
    },
    {
      imgelink: imageOne,
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
    {
      imgelink: imageNine,
    },
    {
      imgelink: imageTen,
    },
    {
      imgelink: imageEleven,
    },
    {
      imgelink: imageTwelve,
    },
    {
      imgelink: imageFifteen
    },
    {
      imgelink: imageSixteen
    },
    {
      imgelink: imageSeventeen
    },
    {
      imgelink: imageEighteen
    },
    {
      imgelink: imageThirteen,
    },
    {
      imgelink: imageFourteen
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
