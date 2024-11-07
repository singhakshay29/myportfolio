"use client";
import CardOne from "../../components/about/CardOne";
import React, { useContext } from "react";
import { DarkModeContext } from "../clientlayout";
import CardTwo from "@/components/about/CardTwo";
import CardThree from "@/components/about/CardThree";

export default function About() {
  const { screenSize,darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 px-8  md:px-16 lg:px-32 pt-32 pb-12   place-content-cente
  
  ">
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} col-span-2 row-span-2  rounded-3xl`}
      >
        <CardOne />
      </div>
      {screenSize < 800 ?( <>
        <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} col-span-2   rounded-3xl`}
      >
        <CardTwo />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} col-span-2   rounded-3xl`}
      >
        <CardThree />
      </div>
      </> ):(
        <>
        <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} row-span-2   rounded-3xl`}
      >
        <CardTwo />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} row-span-2   rounded-3xl`}
      >
        <CardThree />
      </div>
        </>
        
      )}
      
    </div>
  );
}
