import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-center text-gray-500 text-sm glow">
        Made with NextJs and Tailwind
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-4 h-4 text-red-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </p>
      <p className="text-center text-gray-500 text-sm pb-3 glow">
        &#64; 2024 Akshay
      </p>
    </div>
  );
}