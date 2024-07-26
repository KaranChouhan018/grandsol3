"use client";
import { bgofgrand, grandbg } from "@/public/assets";
import clsx from "clsx";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Imagehero = () => {
  const [icon, Seticon] = useState(false);
  const toggle = () => {
    Seticon(!icon);
  };
  const button = useRef();
  return (
    <div className="bg-white border  relative ">
      <div className="w-full flex mx-auto">
        <Image src={bgofgrand} width={"100%"} height={"100%"} />
      </div>
      <div className="text absolute  top-[72%] left-[45%] z-10 ">
        <button
          ref={button}
          className={clsx(
            "bg-blue-500 hover:bg-blue-400 hover:text-gray-300  text-white rounded-full px-4 py-2 flex justify-center items-center"
          )}
        >
          <span className="mr-2">Onze Services</span>

          <FaArrowRightLong width={20} className={""} />
        </button>
      </div>
    </div>
  );
};

export default Imagehero;
