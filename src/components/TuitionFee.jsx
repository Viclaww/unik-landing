import React from "react";
import checkmark from "../assets/subtract.png";
const TuitionFee = () => {
  const listStyle = {
    listStyleImage: `url(${checkmark})`,
    listStylePosition: "inside",
  };
  return (
    <div
      id="fees"
      className="  text-white font-Monstserrat py-[15vh] px-32 sm:px-10 flex flex-col text-center justify-center items-center"
    >
      <h3 className=" text-4xl py-4 ">Explore our Tuition Fee</h3>
      <p className="opacity-80 py-3 w-2/3 sm:w-full">
        We strive to make quality education in graphic design and web
        development accessible to all, offering value for your investment. No
        hidden costs or surprises—just a clear pathway to acquiring valuable
        skills that will propel your career.
      </p>
      <div className="flex sm:flex-col justify-around w-2/3 sm:w-full items-center">
        <div className="creative-fee bg-[#6B07C633]">
          <h4 className="course-name bg-[#6B07C6]">CREATIVE DESIGN</h4>
          <div className="price">
            <p className="discount">N15,000</p>
            <p className="slashed">N35,000</p>
          </div>
          <ul className="course-features " style={listStyle}>
            <li>Understanding the general concept of Design</li>
            <li>Becoming a creative thinker</li>
            <li>Design tools, resources/principles</li>
            <li>Design as a business</li>
            <li>CorelDraw</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Impact of AI in Design Industry and how to leverage</li>
            <li>Branding/Design</li>
            <li>Setting up Portfolio</li>
            <li>Practice, Practice, Practice</li>
          </ul>
          <a
            href="https://forms.gle/8t6msQc7a7iSLMHs7"
            className="Register-button bg-[#6B07C6] hover:font-bold hover:bg-[#4905a1]"
          >
            Register Now
          </a>
        </div>
        <div className="web-fee bg-[#6B07C6]">
          <h4 className="course-name bg-[#261238]  ">WEB DEVELOPMENT</h4>
          <div className="price">
            <p className="discount">N50,000</p>
            <p className="slashed">N150,000</p>
          </div>
          <ul className="course-features " style={listStyle}>
            <li>Introduction to Web Development</li>
            <li>Overview of Web Development</li>
            <li>Introduction to Web Technologies</li>
            <li>Setting Up Your Web Development Environment</li>
            <li>HTML and CSS Fundamentals</li>
            <li>JavaScript Essentials/Enhancing Websites with JavaScript</li>
            <li>Introduction to Back-end Programming</li>
            <li>Databases and Data Management</li>
            <li>Responsive Web Design</li>
            <li>Single-Page Applications (SPAs)</li>
            <li>Testing and Debugging Web Applications</li>
          </ul>
          <a
            href="https://forms.gle/8t6msQc7a7iSLMHs7"
            className="Register-button bg-black hover:bg-slate-900 hover:font-bold sm:mb-4"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TuitionFee;
