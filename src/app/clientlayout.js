"use client";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import Header from "@/components/Header";
import React, { useState, createContext, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

export const DarkModeContext = createContext();

export default function ClientLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Ensure code only runs on client side
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
      
      const updateDimension = () => {
        setScreenSize(window.innerWidth);
      };
      
      window.addEventListener("resize", updateDimension);

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, []);
  
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <PacmanLoader  size={20} color="#000000" />
        </div>
      ) : (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode, screenSize }}>
          <div
            className={` ${loading ? 'fade-in' : 'show'} ${darkMode ? "dark" : "light"} bg-background text-foreground min-h-screen`}
          >
            <Header darkMode={darkMode} />
            <div className={`${darkMode ? "" : "text-gray-700"}`}>
              {children}
            </div>
            <Footer/>
          </div>
        </DarkModeContext.Provider>
      )}
    </>
  );
}
