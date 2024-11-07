"use client";
import React, { useState,useContext } from "react";
import Link from "next/link";
import { DarkModeContext } from "../app/clientlayout";
import { usePathname } from "next/navigation";
import { FaBarsProgress } from "react-icons/fa6";

export default function Header({ darkMode }) {
  const { screenSize } = useContext(DarkModeContext);
  const [openBar,setOpenBar]=useState(false);
  
  const pathname = usePathname();
  function handleOpenBar(){
    setOpenBar(prev => !prev)
  }

  const isActive = path => pathname === path;

  return (
    <>
    <div div className="w-full fixed backdrop-blur z-10 h-20  ">
    <div className="fixed">
       <button
        className={`${darkMode
          ? "text-indigo-100"
          : "text-indigo-950"} font-[Struck] font-bold text-3xl p-4`}
      >
        Akshay
      </button>
    </div>
    {screenSize > 900 ? (
    <div className="w-full p-2 flex justify-center  h-20 ">
      <ul className="flex justify-between px-4 font-[Ubuntu] font-bold text-3xl border border-slate-500 border-solid rounded-full ">
        <Link href="/home" legacyBehavior>
          <li
            className={`${darkMode
              ? "text-indigo-100"
              : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
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
              : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
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
              : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
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
              : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
              "/projects"
            )
              ? "border border-slate-500 border-solid rounded-full"
              : ""}`}
          >
            Projects
          </li>
        </Link>
      </ul>
    </div>):(<div className="flex justify-end text-3xl p-4 cursor-pointer">
      <FaBarsProgress onClick={()=>handleOpenBar()} />
    </div>)}
    </div>
    {openBar && (<div className=" w-full mt-20  fixed backdrop-blur z-10 h-60 ">
      <ul className="flex flex-col items-center  font-[Ubuntu] font-bold text-3xl border-b border-slate-500 border-solid ">
      <Link href="/home" onClick={()=>handleOpenBar()} >
      <li
      className={`${darkMode
      ? "text-indigo-100"
      : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
        "/home"
        )
        ? "border border-slate-500 border-solid rounded-full"
        : ""}`}
        >
        Home
        </li>
        </Link>
        <Link href="/about" onClick={()=>handleOpenBar()}>
        <li
        className={`${darkMode
        ? "text-indigo-100"
        : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
          "/about"
          )
          ? "border border-slate-500 border-solid rounded-full"
          : ""}`}
          >
          About
          </li>
          </Link>
          <Link href="/tools" onClick={()=>handleOpenBar()}>
          <li
          className={`${darkMode
          ? "text-indigo-100"
          : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
            "/tools"
            )
            ? "border border-slate-500 border-solid rounded-full"
            : ""}`}
            >
            Tools
            </li>
            </Link>
            <Link href="/projects" onClick={()=>handleOpenBar()}>
            <li
            className={`${darkMode
            ? "text-indigo-100"
            : "text-indigo-950"} text-xl my-2 p-2 text-center w-32 rounded-full cursor-pointer ${isActive(
              "/projects"
              )
              ? "border border-slate-500 border-solid rounded-full"
              : ""}`}
              >
              Projects
              </li>
              </Link>
              </ul>
              </div>)}
              </>
   
  );
}
