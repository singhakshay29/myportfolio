import Image from "next/image";
import React, { useContext } from "react";
import arrow from "../../assets/arrow.svg";
import { DarkModeContext } from "../../app/clientlayout";

export default function CardTwo({ img, heading, text, link }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="p-2 h-80">
      <div className="p-8 overflow-hidden h-28 ">
        <Image src={img} width={50} height={130} alt="logo" />
      </div>
      <div className=" min-h-32">
        <div className="font-[Ubuntu]  text-xl pl-6 ">
          {heading}
        </div>
        <div className="mt-4 pl-6 pr-2 text-sm font-[Ubuntu]">
          {text}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        className={`${darkMode
          ? " bg-white dark:bg-gray-700"
          : " "} cursor-pointer
       w-10 h-10 rounded-full bottom-0 left-0 m-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 hover:transition duration-700 ease-in-out
      `}
      >
        <Image width={20} height={0} src={arrow} alt="img" />
      </a>
    </div>
  );
}
