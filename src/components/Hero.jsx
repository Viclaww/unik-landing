import React from "react";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="flex relative sm:flex-col px-32 md:h-[80vh] sm:px-10 font-Monstserrat text-white h-[90vh] sm:h-[80vh] sm:justify-center justify-normal items-center ">
      <div className="hero-text w-1/2 sm:w-full flex flex-col h-[50vh] sm:h-[30vh] md:w-full justify-between items-start ">
        <h2 className="text-[60px] md:text-5xl sm:text-3xl leading-[70px] font-thin ">
          Master the Latest Skills with{" "}
          <span className="font-extrabold">Expert Guidance</span>
        </h2>
        <p className="opacity-70 my-3">
          Acquire the essential skills required to thrive in continually
          evolving tech spheres from industry experts.
        </p>
        <div className="flex w-full sm:flex-col sm:w-auto relative justify-between text-xs">
          <div className="bg-gradient-to-r  from-[#D00FFC] to-[#3A7DFF] cursor-pointer flex justify-center p-1 sm:w-7/12 rounded-full mt-12 ">
            <a
              href="#fees"
              className="bg-[#151515]  hover:opacity-80 px-6 py-3 rounded-full cursor-pointer"
            >
              Enroll Now
            </a>
          </div>
          <div className="bg-gradient-to-r flex from-[#D00FFC] to-[#3A7DFF] p-1 rounded-full mt-12 ">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1tHj8bqeYigyx5Wg2qPo5CERHXnUUBgfs/view?usp=drive_link"
              className="bg-[#151515] px-6 py-3 rounded-full cursor-pointer hover:opacity-80"
            >
              Download our success story
            </a>
          </div>
        </div>
      </div>

      <img
        src={hero}
        className="w-2/3 md:hidden sm:hidden absolute right-0 -z-10"
        alt=""
      />
    </div>
  );
};

export default Hero;
