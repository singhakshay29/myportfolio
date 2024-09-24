"use client";
import React, { useState, useEffect } from "react";
import "./dark.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function CardNine({ setDarkMode, darkMode }) {
  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div
      className={`${darkMode
        ? "bg-gray-800"
        : "bg-white"} rounded-3xl p-6 md:p-10 flex flex-col justify-center hover:shadow-lg h-[310px]  dark:text-white items-center`}
    >
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={darkMode}
        size={120}
        sunColor={"#ff4d00"}
      />

      <label htmlFor="theme" className="theme ">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle cursor-pointer"
            type="checkbox"
            role="switch"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </span>
      </label>
    </div>
  );
}
