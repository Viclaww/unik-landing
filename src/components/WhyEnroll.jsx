import React from "react";

const WhyEnroll = () => {
  return (
    <div className="flex font-Monstserrat items-center flex-wrap justify-between  w-full py-20 px-24 sm:px-2 md:mt-[10vh]  sm:mt-[30vh] md:p-10 md: bg-[#D00FFC] md:flex-col sm:flex-col">
      <div className="text-white w-4/5 md:w-full sm:w-full p-10 ">
        <h3 className=" text-5xl mb-5">Why Enroll with Us?</h3>
        <p>
          Enroll with us for an unparalleled learning experience in graphic
          design and web development. Benefit from expert guidance, a
          cutting-edge curriculum, and interactive learning that allows you to
          progress at your own pace. Gain practical experience through hands-on
          projects, connect with a supportive community, and receive
          comprehensive career development resources. Our flexible schedules
          cater to diverse lifestyles, ensuring that you acquire the skills
          needed to thrive in the ever-evolving tech landscape.
        </p>
      </div>
      <div className="bg-gradient-to-r from-[#D00FFC] to-[#3A7DFF] flex w-[88px] place-content-center rounded-xl items-center h-[50px] mb-5 p-[1px] ">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1tHj8bqeYigyx5Wg2qPo5CERHXnUUBgfs/view?usp=drive_link"
          className="bg-[#d00ffc] text-white p-2  rounded-xl"
        >
          About us
        </a>
      </div>
      <hr />
    </div>
  );
};

export default WhyEnroll;
