import React from "react";

const WhyEnroll = () => {
  return (
    <div className="flex font-Monstserrat items-center flex-wrap justify-between  w-full py-20 px-24 sm:px-2 md:mt-[30vh]  sm:mt-[20vh] md:p-10 md: bg-[#D00FFC] md:flex-col sm:flex-col">
      <div className="text-white w-4/5 md:w-full sm:w-full p-10 ">
        <h3 className=" text-5xl mb-5">Why Enroll with Us?</h3>
        <p>
          Master the latest web development and graphic design tools and
          technologies. We offer comprehensive training on the latest web
          development and graphic design tools and technologies. This includes
          popular tools like HTML, CSS, JavaScript Frameworks/Libraries ,
          Photoshop, Illustrator, and more.
        </p>
      </div>
      <div className="bg-gradient-to-r from-[#D00FFC] to-[#3A7DFF] flex w-[88px] place-content-center rounded-xl items-center h-[50px] mb-5 p-[1px] ">
        <button className="bg-[#d00ffc] text-white p-2  rounded-xl">
          About us
        </button>
      </div>
      <hr />
    </div>
  );
};

export default WhyEnroll;
