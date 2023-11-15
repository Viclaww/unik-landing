import React from "react";
import design from "../assets/Creative-design.png";
import webDev from "../assets/webDev.png";
const Course = () => {
  return (
    <div
      id="courses"
      className="text-white  font-Monstserrat px-20 sm:px-10 py-24 sm:py-10 mt-[15vh] sm:mt-[5vh] w-full flex flex-col justify-around h-auto"
    >
      <div className="creative-design px-3 flex justify-between w-full flex-row md:flex-col-reverse sm:flex-col-reverse items-center">
        <div className=" flex flex-col sm:mt-12 justify-between  ">
          <h3 className="text-[66px] md:text-4xl sm:text-4xl font-extralight py-5 ">
            Creative Design
          </h3>
          <p className="w-10/12 opacity-70">
            This course will take you from beginner to advanced in graphic
            design. We will cover industry-standard tools, as well as the
            history, theory, practices, and principles of graphic design. You
            will learn how to use text and images to communicate effectively
            with your audience, the road to becoming a creative expert and much
            more. Don't miss out on this opportunity to gain a valuable new
            skill - sign up now!
          </p>
          <div className="apps flex w-1/5">
            <img
              className="mx-2 my-4 w-10 h-10"
              src="https://i.imgur.com/OilzbdT.png"
              alt=""
            />
            <img
              className="mx-2 my-4 w-10 h-10"
              src="https://i.imgur.com/B3D9RI4.png"
              alt=""
            />
            <img
              className="mx-2 my-4 w-10 h-10"
              src="https://i.imgur.com/Ydt4JIe.png"
              alt=""
            />
          </div>
        </div>
        <img src={design} alt="" />
      </div>
      <div className="flex justify-between md:flex-col sm:flex-col my-[20vh] h-[60vh] w-full items-center">
        <img className="w-2/5 md:w-full sm:w-full" src={webDev} alt="" />
        <div className="w-1/2 sm:w-full  sm:mt-12  sm:h-2/3 md:w-full ">
          <h3 className="text-[66px] md:text-4xl sm:text-4xl font-extralight py-5 ">
            Web Development
          </h3>
          <p className="opacity-70">
            Explore the core pillars of Web Development, including HTML, CSS,
            and JavaScript, gaining a solid understanding of their roles in
            crafting intuitive and dynamic web interfaces. Elevate your skills
            by delving into advanced concepts such as responsive design, user
            experience optimization, and frameworks/library with React,
          </p>
          <div className="languages-icon flex py-5 ">
            <img
              src="https://i.imgur.com/pyktAub.png"
              className="w-[100px]"
              alt=""
            />
            <img
              src="https://i.imgur.com/VpHw8BO.png"
              className="w-[40px] h-[40px] mt-3 md:w-1/3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
