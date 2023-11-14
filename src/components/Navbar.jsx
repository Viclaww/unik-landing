import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navlinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="#courses"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Programs
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Fees
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        FAQ's
      </NavLink>
    </>
  );
};
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="top-nav  ">
        <img src={logo} className="w-10 h-10" alt="" />
        <div className=" top-nav-links flex w-1/3 md:w-1/2 sm:hidden  justify-between">
          <Navlinks />
        </div>
        <div
          onClick={handleNavbar}
          className={`cursor-pointer hidden sm:block transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {isOpen && (
        <div
          className={`side-nav flex flex-col bg-black h-[100vh]  z-10   text-white font-bold items-start fixed top-0 py-10 px-5 left-0 ${
            isOpen ? "w-3/5 " : "w-0"
          }`}
        >
          <Navlinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
