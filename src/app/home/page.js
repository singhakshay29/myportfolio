"use client";
import "../globals.css";
import Header from "@/components/Header";
import React, { useContext } from "react";
import { DarkModeContext } from "../clientlayout";
import CardTwo from "@/components/home/map/CardTwo";
import CardFive from "@/components/home/social/CardFive";
import CardSeven from "@/components/home/github/CardSeven";
import CardEight from "@/components/home/contact/CardEight";
import CardNine from "@/components/home/darkmode/CardNine";
import CardFour from "@/components/home/projects/CardFour";
import CardSix from "@/components/home/shortbio/CardSix";
import CardThree from "@/components/home/tools/CardThree";
import CardOne from "@/components/home/bio/CardOne";

export default function Home() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-6 pt-32 p-16 place-content-center">
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} col-span-2   rounded-3xl`}
      >
        <CardOne />
      </div>
      <div className="  rounded-3xl">
        <CardTwo />
      </div>
      <div
        className={`${darkMode ? "bg-[#1f2937] " : ""} row-span-2  rounded-3xl`}
      >
        <CardThree darkMode={darkMode} />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardNine darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className=" rounded-3xl">
        <CardFive />
      </div>
      <div className=" row-span-2  rounded-3xl">
        <CardFour darkMode={darkMode} />
      </div>
      <div className=" col-span-2  rounded-3xl">
        <CardSix darkMode={darkMode} />
      </div>
      <div className="bg-[#1f2937]  rounded-3xl">
        <CardSeven />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937]"
          : "bg-[#ffffff] ` 1"} col-span-2   rounded-3xl`}
      >
        <CardEight />
      </div>
    </div>
  );
}
