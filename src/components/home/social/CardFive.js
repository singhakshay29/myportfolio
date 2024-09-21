"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";

export default function CardFive() {
  const slides = [
    {
      id: 1,
      url: linkedin,
      link: "https://www.linkedin.com/in/akshaysingh29",
      bgColor: "#0077b7"
    },
    {
      id: 2,
      url: instagram,
      link: "https://www.instagram.com/_a.k.s.h.a.y.s.i.n.g.h_/",
      bgImage:
        "https://preview.colorkit.co/gradient/f9ce34-ee2a7b-6228d7.png?static=true"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
    );
  };

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    },
    [slides.length]
  );

  return (
    <div id="default-carousel" className="relative rounded-3xl hover:shadow-md">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-3xl h-[310px]">
        {slides.map((slide, index) =>
          <a
            key={slide.id}
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentIndex === index
              ? "block"
              : "hidden"} duration-700 ease-in-out`}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundColor: slide.bgColor || "transparent",
                backgroundSize: "cover",
                backgroundImage: slide.bgImage
                  ? `url(${slide.bgImage})`
                  : "none"
              }}
            >
              {slide.isSvg
                ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80px"
                    height="80px"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                  >
                    <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352 8.087682L7.551414 1H1l8.589488 12.231093L1 23h1.940717  l7.509372-8.542861L16.448587 23H23L14.095479 10.316482z M11.436522 13.338465l-0.871624-1.218704-6.924311-9.68815h2.981339  l5.58978 7.82155l0.867949 1.218704l7.26506 10.166271h-2.981339L11.436522 13.338465z" />
                  </svg>
                : <Image className="w-28 lg:w-20" src={slide.url} alt="logo" />}
            </div>
          </a>
        )}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
