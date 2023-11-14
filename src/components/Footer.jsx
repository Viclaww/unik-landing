import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center flex w-full justify-around items-center py-10 px-6 sm:flex-col">
      <Link to="">Terms & Conditions</Link>
      <p>Copyright @ UnikCreativetech All Right Reserve</p>
      <Link to="">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
