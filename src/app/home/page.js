"use client";
import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";

export default function Home() {
  const [showCardThree, setShowCardThree] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        // For lg screens (1024px <= width < 1280px)
        setShowCardThree(false); // Hide CardThree
      } else {
        setShowCardThree(true); // Show CardThree
      }
    };
    const handleResizeTwo = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        // For sm screens (640px <= width < 1024px)
        setIsSmallScreen(true); // Small screen
      } else {
        setIsSmallScreen(false); // Other screen sizes
      }
    };
    handleResize();
    handleResizeTwo();
    
    window.addEventListener("resize", handleResize);
    window.addEventListener('resize', handleResizeTwo);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('resize', handleResizeTwo);
    };
  }, []);
  return (
    <>
    <div className="grid pt-32 p-16 place-content-center gap-6 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto">
        <CardSection  showCardThree={showCardThree} isSmallScreen={isSmallScreen}/>
      </div>
    </>
    
  );
}
