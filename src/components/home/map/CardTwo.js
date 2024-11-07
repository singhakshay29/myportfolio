import Image from "next/image";
import React from "react";
import meCool from "../../../assets/memoji-1.png";

export default function CardTwo() {
  return (
    <>
      <div className="absolute inset-0 m-auto w-28 h-28 border-[5px] border-white rounded-full flex items-center justify-center bg-sky-400/95 dark:bg-slate-500">
        <Image src={meCool} width={50} alt="logo" />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.9384694943506!2d80.9427430560678!3d26.93374074275614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957019f9bc41f%3A0xef685b1db542c154!2s100K%2C%20Sector%205%20Rd%2C%20Sector%205%2C%20Jankipuram%20Vistar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226031!5e0!3m2!1sen!2sin!4v1726733685405!5m2!1sen!2sin"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="rounded-3xl h-full w-full"
      />
    </>
  );
}
