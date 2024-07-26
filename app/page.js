"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { bgofgrand, grandbg, grandsvg, line } from "@/public/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { userAgent } from "next/server";
import { withRouter } from "next/router";
import { Main } from "next/document";
import Lenis from 'lenis'


const page = () => {
  const [icon, Seticon] = useState(false);
  const toggle = () => {
    Seticon(!icon);
  };
  const button = useRef();

  let logo = useRef(null);
  let imgref = useRef(null);
  let main = useRef(null);
  let secref = useRef(null);
  let onImg = useRef(null);
  let imgTry = useRef(null);
  let linetry = useRef(null);
  let logoText = useRef(null);
  
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
  
   gsap.registerPlugin(ScrollTrigger);
   gsap.set(".side", { autoAlpha: 0});

   window.onload = () => {
    window.scrollTo(0, 0);
  };
  
  if(window.innerWidth > 1200){
    gsap.to(logo, {
  scrollTrigger: {
    trigger: secref.current,
    start: 'top 20%',
    end: 'center 40%', // Adjust as needed
    scrub: true, 
    markers:true// Smooth scrolling effect
  },
  ease: "power3.inOut",
  width: 88,
  height: 60,
  x: 3,
  y: 99,
  scrollBehavior: "smooth",
  delay: 1,
  onComplete: () => {
    // Animation for logo text to fade in after logo animation completes
    gsap.to(".side", { autoAlpha: 1, opacity: 1, duration: 1 });
  }
});






      gsap.to('header', {
        scrollTrigger: {
          trigger: imgref,
          start: "center 55% ",
          end: "center 30%",
          scrub: true, // Smooth scrolling effect
          // Uncomment for debug markers
        },
        y:-200,
        reversed:true,
        delay:1,
        onStart: () => {
          gsap.to(logo,
          {
            y:-20,
          })
        }
   
      });
    

      gsap.to(imgref, {
        scrollTrigger: {
          trigger: imgref,
          start: "top 20%", // Adjust as needed
          end: "center 55%", // Adjust as needed
          scrub: true,
          // Smooth scrolling effec
        },
        width:'100%',

      });
      gsap.to(imgTry.current, {
        scrollTrigger: {
        trigger: "#te",
        start: "top 25%", // Adjust as needed
        end: "center ", // Adjust as needed
        scrub: true,
        // Optional, for debugging
       },
       x: "-200%", // Move from right
       duration: 100,
       delay: 1000, // Adjust as needed
       ease: "power3.out" // Easing function
       });
       

gsap.fromTo(
  logo,
  { opacity: 0 },
  { opacity: 1, duration: 2, delay: 0.5 }
);

// Animation for line
gsap.fromTo(
  linetry.current,
  { opacity: 0, height:0 },
  { opacity: 1, height:'8.3rem', duration: 1, delay: 1 }
);

// Animation for #te
gsap.fromTo(
  '#te',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 1.5 }
);

gsap.fromTo(
  imgref,
  { opacity: 0 },
  { opacity: 1, duration: 2 }
)
   }














   else if(window.innerWidth < 500){
    gsap.to(logo, {
     scrollTrigger: {
       trigger: secref.current,
       start: 'top 20%',
      end: 'center 40% ', // Adjust as needed
       scrub: true, // Smooth scrolling effect
 
     },
     ease: "power3.inOut",
     width: 66,                                    
     height: 60,
     x: 3,
     y: 99,
     scrollBehavior: "smooth",
     delay: 1,
     onComplete: () => {
       // Animation for logo text to fade in after logo animation completes
       gsap.to(
         ".side",
         {autoAlpha:1  ,opacity: 1, duration: 1 }
       );
     }
   });
  //  gsap.to('header', {
  //    scrollTrigger: {
  //      trigger: imgref,
  //      start: "center 35% ",
  //      end: "center 25%",
  //      scrub: true, // Smooth scrolling effect
  //        // Uncomment for debug markers
  //    },
  //    y:-200,
  //    reversed:true,
  //    delay:1
  //  });
 

   gsap.to(imgref, {
     scrollTrigger: {
       trigger: imgref,
       start: "top 90%", // Adjust as needed
       end: "bottom 40%", // Adjust as needed
       scrub: true,
       markers: true // Smooth scrolling effec
     },
     width:"100%"
   });

 gsap.to(imgTry.current, {
 scrollTrigger: {
 trigger: "#te",
 start: "top 35%", // Adjust as needed
 end: "bottom 0% ", // Adjust as needed
 scrub: true,
 // Optional, for debugging
},
x: "-200%", // Move from right
duration: 100,
delay: 1000, // Adjust as needed
ease: "power3.out" // Easing function
});

gsap.fromTo(
logo,
{ opacity: 0 },
{ opacity: 1, duration: 2, delay: 0.5 }
);

// Animation for line
gsap.fromTo(
  linetry.current,
  { opacity: 0, height:0 }, // Initial state: hidden and collapsed
  { opacity: 1, height: '8.3rem', duration: 1, delay: 1 } // Final state: visible and expanded
);

// Animation for #te
gsap.fromTo(
'#te',
{ opacity: 0 },
{ opacity: 1, duration: 1, delay: 1.5 }
);

gsap.fromTo(
imgref,
{ opacity: 0 },
{ opacity: 1, duration: 2 }
)


}

  
 }, []);



  return (
    <section 
    ref={main}  className="w-full bg-white xt-black mx-auto flex flex-col"> 
      <Navbar 
        main={main}
        secref={secref}
        logoText={logoText}
      />

<main className="h-[40rem]  lg:h-[20rem] 2xl:h-[30rem] w-full flex flex-col md:flex-row px-4 md:py-2 md:gap-8 lg:mt-0 ">
        <div className="image w-full my-auto sticky top-[-99px] lg:top-[-80px] px-4 lg:mr-[2rem] mx-auto lg:mx-0 ">
          <Image
            ref={(el) => (logo = el)}
            src={grandsvg}
            className="w-[100%] h-[100%]"
            alt="logo"
          />
        </div>
       

        <div className="w-[95%] md:w-[90%] lg:w-[40%]   flex  mb-20 md:mb-0 -mt-[5rem] md:mt-0 2xl:w-[56%]  ">
          <div className="mt-[5.8rem]  mr-4 2xl:mt-[10rem]">
            <Image
              className="w-[4px] h-[12rem] mb-[5.1rem] sm:w-[4px] sm:h-[10rem] md:w-[4px] md:h-[7.3rem] 2xl:h-[1.2rem] mt-[2px] "
              src={line}
              ref={linetry}
            />
          </div>
         

          <div id="te" className="flex flex-col my-auto h-fit " >
            <h2 className="text-[#4CA3FF] w-full 2xl:text-xl lg:w-[85%] mb-2 text-[18px] md:text-[22px] lg:text-sm">
              Transformeer jouw visie naar digitale realiteit
            </h2>
            <p className="w-full text-xs 2xl:text-base w-[80%] tracking-normal lg:w-[90%] text-[16px]  lg:text-[10px] text-black">
              Samen maken we van jouw visie een online realiteit. Onze expertise
              en creativiteit creëren een sterke digitale aanwezigheid die
              indruk maakt en groeit. Laat ons jouw digitale succesverhaal
              schrijven.
            </p>
          </div>
        </div>

      </main>

       <div
        ref={onImg}
        className="hero-img -mt-[40px] overflow-x-hidden  relative h-screen mx-auto md:mt-10 lg:mt-0"
      >
        <div ref={(el) => (imgref = el)} className="w-[90%] 2xl:w-[95%] h-[60%] lg:w-[95%] md:h-fit mx-auto ">
          <Image src={bgofgrand} className="w-screen h-[100%]" />
        </div>

        <div ref={imgTry}  className="absolute w-full top-[25%] -right-[100%] lg:top-[35%]">
        <h1 className="text-white font-medium text-8xl font-Poppins text-nowrap ">
         Grandsolution your business the digital boost it needs gives your business the digital boost it need.
         </h1>
        </div>   

        <div className="text absolute top-[40%] left-[30%]  lg:top-[52%] lg:left-[45%] z-10 lg:items-center">
          <button class="relative bg-blue-500 text-white font-bold py-3 px-6 rounded-full overflow-hidden transition-all duration-300 hover:px-10 hover:bg-blue-600">
            <span className="inline-block mr-4">Onzi Services</span>
            <span className="absolute right-0 top-0 bottom-0 flex items-center justify-center pr-3 transition-transform transform-gpu hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
