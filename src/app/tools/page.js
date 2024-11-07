"use client";
import { useContext } from "react";
import { DarkModeContext } from "../clientlayout";
import CardOne from "@/components/tools/CardOne";
import Contents from "./Contents";

export default function Tools() {
  const { screenSize,darkMode } = useContext(DarkModeContext);

  return (
    <>
    {screenSize > 1000 && (
      <div className="grid grid-cols-3 gap-6 pt-32 px-32 pb-16 place-content-center">
     <Contents/>
    </div>
    )}
    {screenSize <=1000 && screenSize >750 && (
       <div className="grid grid-cols-2 gap-6 pt-32 px-32 pb-16 place-content-center">
      <Contents/>
     </div>
    )}
    {screenSize < 750 && 
     <div className="grid gap-6 pt-32 px-32 pb-16 place-content-center">
       <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardOne />
      </div>
    <Contents mob="true"/>
   </div>
    }
    </>
  );
}
