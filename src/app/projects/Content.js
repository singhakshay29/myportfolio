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

export default function Content() {
    const { screenSize,darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>
     <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}  rounded-3xl`}
      >
        <CardOne
          darkMode={darkMode}
          proImg={p1}
          link={"https://amazonmusic.vercel.app/"}
          gitlink={"https://github.com/singhakshay29/amazonmusic"}
          name={"Amazon Music"}
          desc={
            "A clone of Amazon Music,which is a music streaming service that offers access to a large library of music and podcasts"
          }
          toolImgOne={react}
          toolImgTwo={js}
          toolImgThree={materialUI}
          toolImgFour={css3}
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}  rounded-3xl`}
      >
        <CardOne
          darkMode={darkMode}
          proImg={p2}
          link={"https://the-soul-store.vercel.app/"}
          gitlink={"https://github.com/singhakshay29/the_soul_store"}
          name={"Souled Store"}
          desc={
            "A clone of The Souled Store,which is an online store that sells a variety of merchandise, including t-shirts"
          }
          toolImgOne={react}
          toolImgTwo={js}
          toolImgThree={chakra}
          toolImgFour={css3}
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} rounded-3xl`}
      >
        <CardOne
          darkMode={darkMode}
          proImg={p3}
          link={""}
          gitlink={""}
          name={"Portfolio"}
          desc={
            "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in React, and more."
          }
          toolImgOne={nextjs}
          toolImgTwo={react}
          toolImgThree={tailwind}
        />
      </div>
    </>
  )
}
