"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { logo } from "@/public/assets";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Navbar = ({main,secref}) => {
  const [menu, SetMenu] = useState(false);

  const togglemenu = () => {
    SetMenu(!menu);
  };

  const navbarRef = useRef(null);
  const headerRef = useRef(null);
  const logoText = useRef(null);

  return (
    <>
    <div ref={headerRef}  className="sticky top-0 mobile   ">

   
      <header className=" flex  w-full px-4 relative py-2 md:px-10 md:py-6 justify-between items-center border-b border-[#C0E6FF80] bg-white">
        <div className="side">
           <h1 ref={logoText} className=" text-[#3898EC] mx-[5.3rem] font-Poppins font-medium text-xl mt-[0.55rem] lg:text-2xl lg:mt-[0.3rem] ">solution</h1>
        </div>
        <div
          className="mobile lg:hidden text-black text-2xl "
          onClick={togglemenu}
        >
        {menu? <IoCloseOutline />: <IoIosArrowDown width={80} />}
         
        </div>

        <div className="link text-[#91A3B1] hidden lg:block">
          <Link href={"/services"} className="mr-4">
            Services
          </Link>
          <Link href={"/Anpak"} className="mr-4">
            Anpak
          </Link>
          <Link href={"/Portfolio"} className="mr-4">
            Portfolio
          </Link>
          <Link href={"/Blog"} className="mr-4">
            Blog
          </Link>
          <Link href={"/Over Ons"} className="mr-4">
            Over Ons
          </Link>
        </div>
        <div className="cta hidden lg:block">
          <button className="bg-white border border-blue-400 text-[#91A3B1] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
            Seo Check
          </button>
          <button
            type="button"
            className="text-white bg-[#3898EC] hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#3898EC] dark:hover:bg-blue-400 dark:focus:ring-blue-800"
          >
            Contact
          </button>
        </div>
      </header>

      {menu && (
        <div className="mobnav relative text-2xl lg:hidden w-full h-screen bg-gray-800 text-white font-sans flex flex-col">
          <ul className="flex flex-col mt-8 ml-4 flex-start">
            <Link
              href={"/services"}
              className="ml-4 mb-4 mt-8 text-3xl flex items-center hover:text-gray-800"
            >
              <span className="mr-1 ">Services</span>
              <IoIosArrowForward />
            </Link>
            <Link
              href={"/Anpak"}
              className="ml-4 mb-4 text-3xl flex items-center"
            >
              <span className="mr-1 ">Anpak</span>

              <IoIosArrowForward />
            </Link>
            <Link
              href={"/Portfolio"}
              className="ml-4 mb-4 text-3xl flex items-center"
            >
              <span> Portfolio</span>
              <IoIosArrowForward />
            </Link>
            <Link
              href={"/Blog"}
              className="ml-4 mb-4 text-3xl flex items-center"
            >
              <span className="mr-1 "> Blog</span>
              <IoIosArrowForward />
            </Link>
            <Link
              href={"/Over Ons"}
              className="ml-4 mb-4 text-3xl flex items-center"
            >
              <span className="mr-1">Over Ons</span>
              <IoIosArrowForward />
            </Link>
          </ul>


          <div className="flex absolute bottom-[40px] left-[5rem]">
          <button className="bg-white border border-blue-400 text-[#91A3B1] font-medium rounded-full text-sm px-8 py-5 text-center me-2 mb-2 ">
            Seo Check
          </button>
          <button
            type="button"
            className="text-white bg-[#3898EC] hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-5  text-center me-2 mb-2 dark:bg-[#3898EC] dark:hover:bg-blue-400 dark:focus:ring-blue-800 "
          >
            Contact
          </button>
         
          </div>
        </div>
        
      )}

      <div className="next">

      </div>


      </div>
    </>
  );
};

export default Navbar;
