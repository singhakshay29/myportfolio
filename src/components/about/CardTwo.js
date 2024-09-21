import React from "react";

export default function CardTwo() {
  return (
    <div className="p-8">
      <div className="font-pacifico font-bold text-3xl pb-8">
        Work Experience
      </div>
      <div className="flex justify-between font-[Ubuntu]">
        <div className="text-2xl ">Unipro World</div>
        <div className="font-[Ubuntu] text-sm pt-2">Jan 2024 - Present </div>
      </div>
      <div className="my-4 font-[Ubuntu]">Frontend Developer</div>
      <div className=" font-[Ubuntu]">Noida UP India</div>
      <div className=" font-[Ubuntu]">
        Tech and Tools:
        <span className="text-orange-300 tracking-wide">
          #react #nodejs #postgresql
        </span>
      </div>

      <div className="flex justify-between pt-16 font-[Ubuntu]">
        <div className="text-2xl ">Newton School</div>
        <div className="font-[Ubuntu] text-sm pt-2">Oct 2022 - Oct 2024 </div>
      </div>
      <div className="my-4 font-[Ubuntu]">Intern</div>
      <div className=" font-[Ubuntu]">Remote</div>
      <div className=" font-[Ubuntu]">
        Tech and Tools:{" "}
        <span className="text-orange-300 tracking-wide">
          #html #css #js #react #nodejs
        </span>{" "}
      </div>
      <div className="flex justify-between pt-16 font-[Ubuntu]">
        <div className="text-2xl ">Werfen</div>
        <div className="font-[Ubuntu] text-sm pt-2">Jan 2020 - May 2023 </div>
      </div>
      <div className="my-4 font-[Ubuntu]">Service Engineer</div>
      <div className=" font-[Ubuntu]">Lucknow UP India</div>
    </div>
  );
}
