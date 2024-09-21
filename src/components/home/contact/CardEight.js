import Image from "next/image";
import React from "react";
import poper from "../../../assets/Party popper.svg";

export default function CardEight() {
  return (
    <div className="p-4">
      <div className="pl-12 pt-8">
        <Image src={poper} width={80} height={10} alt="logo" />
      </div>
      <div className="pt-8 pl-12 text-3xl font-[Ubuntu]">Get In Touch :</div>
      <div className="pt-8 pl-12 text-xl font-[Ubuntu]">
        <a href="mailto:akshay2898.as@gmail.com">
          Contact: akshay2898.as@gmail.com ✉️
        </a>
      </div>
    </div>
  );
}
