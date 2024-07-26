import { grandsvg, grandtext, line } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex mt-[3rem] h-screen bg-white text-black px-10 py-4 md:mt-32 gap-20 -mb-60  md:-mb-10  lg:-mb-[20rem] flex-col lg:flex-row" >
      <div className="w-[90%] lg:w-full md:w-[70%] mr-6 -mt-[40px] p-0">
        {/* <Image src={grandtext} className="w-[1300px] h-[250px]" href="/" width={1600} height={1000} /> */}
        <Image src={grandsvg} className=" w-[20rem] h-[15rem] md:w-[1400px] md:h-[240px] sm: md-[0rem]" />
        {/* <h1 className="font-quicksand text-[14rem]">Grand</h1> */}
      </div>
      <div className="w-[90%] lg:w-[40%] flex justify-end mb-20 md:mb-0 -mt-[5rem] md:mt-0 sm: mb-0">
        <div className=" mt-2 mr-4 ">
          <Image 
          className="w-[4px] h-[14.5rem] sm:w-[4px] sm:h-[11.3rem]"
            src={line}
            ref={linetry}
           
          />
        </div>
       
        <div class="flex flex-col h-20rem w-30rem">
  <h2 class="text-[#4CA3FF] w-full mb-2 text-[16px]">
    Transformeer jouw visie naar digitale realiteit
  </h2>
  <p class="w-full">
    Samen maken we van jouw visie een online realiteit. Onze expertise en
    creativiteit creëren een sterke digitale aanwezigheid die indruk maakt
    en groeit. Laat ons jouw digitale succesverhaal schrijven.
  </p>
</div>
        
      </div>
    </div>
  );
};

export default Hero;
