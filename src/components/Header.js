"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ darkMode }) {
  const pathname = usePathname();

  const isActive = path => pathname === path;
  return (
    <div className="w-full p-2 flex  z-10 h-20 fixed backdrop-blur">
      <div
        className={`${darkMode
          ? "text-indigo-100"
          : " text-indigo-950"} font-[Struck] font-bold text-3xl  p-4 `}
      >
        Akshay
      </div>
      <ul className="ml-60 w-1/2 flex justify-between px-4 font-[Ubuntu] font-bold text-3xl border border-slate-500 border-solid rounded-full ">
        <Link href="/home" legacyBehavior>
          <li
            className={`${darkMode
              ? "text-indigo-100"
              : " text-indigo-950"} text-xl my-2 p-2 text-center  w-1/5 rounded-full cursor-pointer ${isActive(
              "/home"
            )
              ? "border border-slate-500 border-solid rounded-full"
              : ""}`}
          >
            Home
          </li>
        </Link>
        <Link href="/about" legacyBehavior>
          <li
            className={`${darkMode
              ? "text-indigo-100"
              : " text-indigo-950"} text-xl my-2 p-2 text-center  w-1/5 rounded-full cursor-pointer ${isActive(
              "/about"
            )
              ? "border border-slate-500 border-solid rounded-full"
              : ""}`}
          >
            About
          </li>
        </Link>
        <Link href="/tools" legacyBehavior>
          <li
            className={`${darkMode
              ? "text-indigo-100"
              : " text-indigo-950"}  text-xl my-2 p-2 text-center  w-1/5 rounded-full cursor-pointer ${isActive(
              "/tools"
            )
              ? "border border-slate-500 border-solid rounded-full"
              : ""}`}
          >
            Tools
          </li>
        </Link>
        <Link href="/projects" legacyBehavior>
          <li
            className={`${darkMode
              ? "text-indigo-100"
              : " text-indigo-950"}  text-xl my-2 p-2 text-center  w-1/5 rounded-full cursor-pointer ${isActive(
              "/projects"
            )
              ? "border border-slate-500 border-solid rounded-full"
              : ""}`}
          >
            Projects
          </li>
        </Link>
      </ul>
    </div>
  );
}
