import React from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import git from "../../assets/github.svg";

export default function CardOne({
  proImg,
  name,
  darkMode,
  link,
  gitlink,
  desc,
  toolImgOne,
  toolImgTwo,
  toolImgThree,
  toolImgFour
}) {
  return (
    <div className="flex">
      <div>
        <div className=" object-contain rounded-3xl p-2  pt-20">
          <Image
            src={proImg}
            alt="project1"
            layout="responsive"
            height={900}
            className="rounded-lg"
          />
        </div>
        <div className="flex">
          <a
            href={link}
            target="_blank"
            className={`${darkMode
              ? " bg-white dark:bg-gray-700"
              : " "} cursor-pointer
       w-10 h-10 rounded-full bottom-0 left-0 m-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 hover:transition duration-700 ease-in-out
      `}
          >
            <Image width={20} height={0} src={arrow} alt="img" />
          </a>
          <a href={gitlink} target="_blank" className="pt-4 cursor-pointer">
            <Image width={40} height={0} src={git} alt="img" />
          </a>
        </div>
      </div>

      <div>
        <div className="font-[Ubuntu] text-2xl pt-8 pl-4">
          {name}
        </div>
        <div className="text-base p-4 font-[Ubuntu]">
          {desc}
        </div>
        <div className="flex justify-between px-4">
          {toolImgOne && <Image src={toolImgOne} width={30} alt="logo" />}
          {toolImgTwo && <Image src={toolImgTwo} width={30} alt="logo" />}
          {toolImgThree && <Image src={toolImgThree} width={30} alt="logo" />}
          {toolImgFour && <Image src={toolImgFour} width={30} alt="logo" />}
        </div>
      </div>
    </div>
  );
}
