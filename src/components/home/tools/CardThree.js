import Image from "next/image";
import React from "react";
import html from "../../../assets/html5.svg";
import bootstrap from "../../../assets/bootstrap.svg";
import js from "../../../assets/js.svg";
import git from "../../../assets/github.svg";
import post from "../../../assets/postman.svg";
import tail from "../../../assets/tailwindcss.svg";
import mysql from "../../../assets/mysql.svg";
import mongo from "../../../assets/mongodb.svg";
import node from "../../../assets/nodejs.svg";
import css from "../../../assets/css3.svg";
import nextjs from "../../../assets/nextjs2.svg";
import vss from "../../../assets/vscode.svg";
import reactjs from "../../../assets/reactjs.svg";
import arrow from "../../../assets/arrow.svg";
import Link from "next/link";

export default function CardThree({ darkMode }) {
  return (
    <div className="relative  bg-[url('../assets/Topographic.svg')]  h-[640px]  border-none overflow-hidden  ">
      <div className="grid gap-5 grid-cols-3 rotate-[35deg] content-center absolute bottom-20 -right-5 ">
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={html} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={reactjs} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={git} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={js} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={30} height={0} src={mongo} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={reactjs} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={node} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={reactjs} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={git} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={css} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={tail} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={post} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={bootstrap} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={bootstrap} alt="img" />
        </div>
        <div
          className={`${darkMode
            ? "bg-gray-700"
            : "bg-[#ffffff]"} w-24 h-24 rounded-lg flex items-center justify-center drop-shadow-md hover:shadow-lg`}
        >
          <Image width={60} height={0} src={nextjs} alt="img" />
        </div>
      </div>
      <Link href="/tools">
        <div
          className={`${darkMode
            ? " bg-white dark:bg-gray-700"
            : " "} cursor-pointer
       w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 hover:transition duration-700 ease-in-out
      `}
        >
          <Image width={20} height={0} src={arrow} alt="img" />
        </div>
      </Link>
    </div>
  );
}
//animate-bounce w-10 h-10 border-[3px] border-white rounded-full
