import React from "react";

export default function CardThree() {
  return (
    <div className="p-8">
      <div className="font-pacifico font-bold text-3xl pb-8">Education</div>
      <div className="flex justify-between font-[Ubuntu]">
        <div className="text-2xl ">Bachelor of Technology</div>
        <div className="font-[Ubuntu] text-sm pt-2"> 2015 - 2019 </div>
      </div>
      <div className="my-4 font-[Ubuntu] w-[18rem]">
        Babu Banarasi Das National Institute of Technology and Management
      </div>
      <div className=" font-[Ubuntu]">Electrical Engineer</div>
      <div className=" font-[Ubuntu]">Lucknow UP India</div>

      <div className="flex justify-between pt-16 font-[Ubuntu]">
        <div className="text-2xl ">Intermediate</div>
        <div className="font-[Ubuntu] text-sm pt-2">2015 </div>
      </div>
      <div className="my-4 font-[Ubuntu]">St.Antony Inter College,Lucknow</div>

      <div className="flex justify-between pt-16 font-[Ubuntu]">
        <div className="text-2xl ">Matriculation</div>
        <div className="font-[Ubuntu] text-sm pt-2">2013 </div>
      </div>
      <div className="my-4 font-[Ubuntu]">Lucknow Public College,Lucknow</div>
    </div>
  );
}
