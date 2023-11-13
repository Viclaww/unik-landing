import React from "react";
import checkmark from "../assets/subtract.png";
const TuitionFee = () => {
  const listStyle = {
    listStyleImage: `url(${checkmark})`,
    listStylePosition: "inside",
  };
  return (
    <div className=" text-white font-Monstserrat py-[15vh] px-32 sm:px-0 flex flex-col text-center justify-center items-center">
      <h3 className=" text-4xl py-4 ">Explore our Tuition Fee</h3>
      <p className="opacity-80 py-3 w-2/3 sm:w-full">
        This game has six unique terrains, each with some exciting new features.
        Every terrain has its unique qualities and challenges to make your game
        more and more interesting.
      </p>
      <div className="flex sm:flex-col justify-around w-2/3 sm:w-4/5">
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
          <button className="Register-button bg-[#6B07C6]">Register Now</button>
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
          <button className="Register-button bg-black sm:mb-4">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TuitionFee;
