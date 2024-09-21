import Image from "next/image";
import React from "react";
import meHigh from "../../assets/okeeeey.svg";

export default function CardOne() {
  return (
    <div className="p-2">
      <div>
        <Image src={meHigh} width={100} height={130} alt="logo" />
      </div>
      <div className="mt-8 pt-6 px-8 font-[Ubuntu]">
        I actively use a diverse set of cutting-edge technologies and tools in
        my daily work. From modern frameworks and languages to powerful
        platforms, my toolkit ensures high-quality and efficient development. 🚀
        🌟
      </div>
    </div>
  );
}
