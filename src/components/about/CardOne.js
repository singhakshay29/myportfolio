"use client";
import React, { useState } from "react";
import me from "../../assets/Me.png";
import mePoper from "../../assets/mepopper.png";
import Image from "next/image";

export default function CardOne() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className="p-2"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div>
        {hover
          ? <Image src={mePoper} width={150} height={130} alt="logo" />
          : <Image src={me} width={150} height={130} alt="logo" />}
      </div>
      <div className="m-2 pt-6 font-[Ubuntu]">
        I’m an enthusiastic React developer with experience, keen to leverage
        my robust knowledge in React and related technologies to significantly
        contribute to the company’s success while continuously expanding my
        expertise.I enjoy creating solutions from scratch, exploring how things
        work, and am driven by curiosity to solve complex challenges.
      </div>
    </div>
  );
}
