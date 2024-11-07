"use client";
import CardOne from "@/components/project/CardOne";
import React, { useContext } from "react";
import { DarkModeContext } from "../clientlayout";
import p1 from "../../assets/project1.jpg";
import p2 from "../../assets/project2.jpg";
import p3 from "../../assets/p3.png";
import react from "../../assets/reactjs.svg";
import js from "../../assets/js.svg";
import materialUI from "../../assets/material-ui-1.svg";
import css3 from "../../assets/css3.svg";
import chakra from "../../assets/chakra-ui-icon.svg";
import nextjs from "../../assets/nextjs2.svg";
import tailwind from "../../assets/tailwindcss.svg";
import Content from "./Content";

export default function Projects() {
  const { screenSize,darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>
    {screenSize > 1000 ?(<div className="grid grid-cols-2 gap-6 pt-32 px-32 pb-16 place-content-center">
     <Content/>
    </div>):(
      <div className="grid  gap-6 pt-32 px-8 sm:px-16 pb-16 place-content-center">
        <Content/>
    </div>)
    
  }
    </>
    
  );
}
