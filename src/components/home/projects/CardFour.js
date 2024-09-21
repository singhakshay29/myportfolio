import React from "react";
import p1 from "../../../assets/project1.jpg";
import p2 from "../../../assets/project2.jpg";
import Image from "next/image";
import arrow from "../../../assets/arrow.svg";
import Link from "next/link";

export default function CardFour({ darkMode }) {
  return (
    <div
      className={` ${darkMode
        ? "bg-[#1f2937] bg-[url('../assets/Topographic.svg')] bg-cover"
        : "bg-[url('../assets/bg-white.png')] bg-cover"} relative h-[640px] m-2 border-none rounded-3xl `}
    >
      <div className="grid gap-5 grid-row-2 overflow-hidden h-[640px] ">
        <div
          className={`${darkMode
            ? "bg-white dark:bg-gray-700"
            : ""}  mt-20  rotate-[-35deg] rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image
            width={600}
            height={300}
            className="scale-125 "
            src={p1}
            alt="img"
          />
        </div>

        <div
          className={`${darkMode
            ? "bg-white dark:bg-gray-700"
            : ""} pt-6  rotate-[-35deg]  rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image
            width={600}
            height={300}
            src={p2}
            alt="img"
            className="scale-125 "
          />
        </div>
        <Link href="/projects">
          <div
            className={`${darkMode
              ? " bg-white dark:bg-gray-700"
              : " bg-white"} cursor-pointer
       w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 hover:transition duration-700 ease-in-out
      `}
          >
            <Image width={20} height={0} src={arrow} alt="img" />
          </div>
        </Link>
      </div>
    </div>
  );
}
