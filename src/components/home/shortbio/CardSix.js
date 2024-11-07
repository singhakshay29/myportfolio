import React from "react";
import bg from "../../../assets/doodle.png";

export default function CardSix({ darkMode }) {
  return (
    <div
      className={`${darkMode
        ? " bg-white dark:bg-gray-800"
        : "bg-white "}  rounded-3xl  p-10 min-h-[310px] flex flex-col justify-between hover:shadow-lg bg-cover bg-center bg-[url('../assets/doodle.png')]`}
    >
      <div className=" pt-8 font-pacifico font-bold text-4xl">
        How it started vs. how it&apos;s going
      </div>
      <div className=" font-[Ubuntu] text-2xl">
        A short personal history as it relates to design and development,and how
        I&apos;ve found value in the cross-section between both disciplines.
      </div>
    </div>
  );
}
