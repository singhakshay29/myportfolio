"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Confetti from "react-confetti";
import { Navbar } from "flowbite-react";
import { FaBars } from "react-icons/fa";

export default function Header({ darkMode }) {
  const [isExploding, setIsExploding] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = path => pathname === path;

  const handleConfetti = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 8000);
  };
  
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the navbar collapse
  };

  useEffect(() => {
    const handleResizeTwo = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        // For sm screens (640px <= width < 1024px)
        setIsSmallScreen(true); // Small screen
      } else {
        setIsSmallScreen(false); // Other screen sizes
      }
    };
    handleResizeTwo();

    window.addEventListener("resize", handleResizeTwo);
    return () => {
      window.removeEventListener("resize", handleResizeTwo);
    };
  }, []);

  return (
    <>
    {isSmallScreen?( 
     <Navbar fluid rounded className="custom-navbar">
     <button
       onClick={handleConfetti}
       className={`${darkMode ? "text-indigo-100" : "text-indigo-950"} font-[Struck] font-bold text-3xl p-4`}
     >
       Akshay
     </button>
     {isExploding && <Confetti />}
     
     <Navbar.Toggle className="custom-navbar-toggle"  onClick={handleToggle} />
     
     {isOpen && (
      
        <Navbar.Collapse className="custom-navbar-collapse">
          <Link href="/home" className="custom-navbar-link">
            Home
          </Link>
          <Link href="/about" className="custom-navbar-link">
            About
          </Link>
          <Link href="/tools" className="custom-navbar-link">
            Tools
          </Link>
          <Link href="/projects" className="custom-navbar-link">
            Projects
          </Link>
        </Navbar.Collapse>
      )}
   </Navbar>
    ):(
       <div className="w-full p-2 flex z-10 h-20 fixed backdrop-blur">
       <button
         onClick={handleConfetti}
         className={`${darkMode
           ? "text-indigo-100"
           : "text-indigo-950"} font-[Struck] font-bold text-3xl p-4`}
       >
         Akshay
       </button>
       {isExploding && <Confetti />}
       <ul className="ml-60 w-1/2 flex justify-between px-4 font-[Ubuntu] font-bold text-3xl border border-slate-500 border-solid rounded-full ">
         <Link href="/home" legacyBehavior>
           <li
             className={`${darkMode
               ? "text-indigo-100"
               : "text-indigo-950"} text-xl my-2 p-2 text-center w-1/5 rounded-full cursor-pointer ${isActive(
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
               : "text-indigo-950"} text-xl my-2 p-2 text-center w-1/5 rounded-full cursor-pointer ${isActive(
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
               : "text-indigo-950"} text-xl my-2 p-2 text-center w-1/5 rounded-full cursor-pointer ${isActive(
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
               : "text-indigo-950"} text-xl my-2 p-2 text-center w-1/5 rounded-full cursor-pointer ${isActive(
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
      )}
    </>
   
  );
}
