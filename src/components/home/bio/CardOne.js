"use client";
import React, { useState } from "react";
import me from "../../../assets/Me.png";
import meCloud from "../../../assets/mecloud.png";
import Image from "next/image";

export default function CardOne() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className="p-2"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div>
        {hover
          ? <Image src={meCloud} width={150} height={130} alt="logo" />
          : <Image src={me} width={150} height={130} alt="logo" />}
      </div>
      <div className="m-2 pt-6 font-[Ubuntu]">
        I am,{" "}
        <span className="font-pacifico font-bold text-3xl decoration-[#50d71e] ">
          Akshay Singh
        </span>{" "}
        an enthusiastic Developer from Lucknow, India. I’m passionate about
        React JS, Next JS, Tailwind CSS, technology, and I’m dedicated to using
        my skills to create impactful solutions.
      </div>
    </div>
  );
}
