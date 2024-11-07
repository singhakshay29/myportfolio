"use client";
import React, { useContext } from "react";
import { DarkModeContext } from "../clientlayout";
import CardOne from "@/components/tools/CardOne";
import CardTwo from "@/components/tools/CardTwo";
import react from "../../assets/reactjs.svg";
import js from "../../assets/js.svg";
import node from "../../assets/nodejs.svg";
import html from "../../assets/html5.svg";
import nextjs from "../../assets/nextjs2.svg";
import tailwind from "../../assets/tailwindcss.svg";
import Css from "../../assets/css3.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import materialUi from "../../assets/material-ui-1.svg";
import chakra from "../../assets/chakra-ui-icon.svg";
import git from "../../assets/github.svg";
import vscode from "../../assets/vscode.svg";
import vite from "../../assets/vitejs.svg";
import postman from "../../assets/postman.svg";
import mongo from "../../assets/mongodb.svg";
import mysql from "../../assets/mysql.svg";
import vercel from "../../assets/logo-vercel-svgrepo-com.svg";
import postgreSql from "../../assets/postgresql-logo-svgrepo-com.svg";
import antd from "../../assets/ant-design-seeklogo.svg";

export default function Contents({mob}) {
    const { screenSize,darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>
    {mob ? (<></>):( <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "} col-span-2   rounded-3xl`}
      >
        <CardOne />
      </div>) }
    
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}  rounded-3xl`}
      >
        <CardTwo
          img={react}
          heading={"React"}
          link={"https://react.dev/"}
          text={
            "React is a JavaScript library that helps to build user interfaces for web and native applications"
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={js}
          heading={"Javascript"}
          link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          text={
            "JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={node}
          heading={"Node Js"}
          link={"https://nodejs.org/en"}
          text={
            "Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={nextjs}
          heading={"Next Js"}
          link={"https://nextjs.org/"}
          text={
            "Next.js is a React framework that gives us building blocks to create web applications."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={tailwind}
          heading={"Tailwind Css"}
          link={"https://tailwindcss.com/"}
          text={
            "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={html}
          heading={"HTML5"}
          link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          text={
            "HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={Css}
          heading={"CSS3"}
          link={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          text={
            "CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={Bootstrap}
          heading={"Bootstrap"}
          link={"https://getbootstrap.com/"}
          text={
            "Bootstrap is a popular open-source CSS framework for developing responsive and mobile-first websites."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={materialUi}
          heading={"Material UI"}
          link={"https://mui.com/material-ui/getting-started/"}
          text={
            "Material UI is an open-source React component library that implements Google's Material Design."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={chakra}
          heading={"Chakra UI"}
          link={"https://v2.chakra-ui.com/"}
          text={
            "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={git}
          heading={"GitHub"}
          link={"https://github.com/"}
          text={
            "GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={vscode}
          heading={"Visual Studio Code"}
          link={"https://code.visualstudio.com/"}
          text={
            "Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={vite}
          heading={"Vite"}
          link={"https://vitejs.dev/"}
          text={
            "Vite is a modern build tool that provides a fast development environment and optimized builds."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={postman}
          heading={"Postman"}
          link={"https://www.postman.com/"}
          text={
            "Postman is a powerful tool for API development, testing, and monitoring, used by developers to streamline their workflow."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={mongo}
          heading={"MongoDB"}
          link={"https://www.mongodb.com/"}
          text={
            "MongoDB is an open-source, non-relational database management system (DBMS) that stores and processes data as documents instead of tables and rows"
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={mysql}
          heading={"MySql"}
          link={"https://www.mysql.com/"}
          text={
            "MySQL is an open-source relational database management system based on SQL (Structured Query Language)."
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={vercel}
          heading={"Vercel"}
          link={"https://vercel.com/"}
          text={
            "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web"
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={postgreSql}
          heading={"PostgreSQL"}
          link={"https://www.postgresql.org/"}
          text={
            "PostgreSQL is an object-relational database management system (ORDMBS), which means that it has relational capabilities and an object-oriented design"
          }
        />
      </div>
      <div
        className={`${darkMode
          ? "bg-[#1f2937] "
          : " bg-[#ffffff] "}   rounded-3xl`}
      >
        <CardTwo
          img={antd}
          heading={"Ant Design"}
          link={"https://ant.design/"}
          text={
            "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises."
          }
        />
      </div>
    </>
  )
}
