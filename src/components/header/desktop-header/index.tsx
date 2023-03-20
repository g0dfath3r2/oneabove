import React, { useState } from "react";
import OneAbove from "../../../assets/images/Oneabove.png";
import "./index.css";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavOpen, setIsnavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsnavOpen(!isNavOpen);
  };

  return (
    <div className="bg-black p-4 absolute w-full header">
      <nav className="fill flex justify-around items-center">
        <div className="w-2/12 header-logo">
          <img
            src={OneAbove}
            alt="Logo"
            className="object-contain h-48 ml-12"
          />
        </div>
        {isNavOpen ? (
          <AiOutlineClose
            size={25}
            className="text-white fixed top-2 right-4 z-50"
            onClick={handleNavOpen}
          />
        ) : (
          <AiOutlineBars
            size={25}
            className="nav-icon"
            onClick={handleNavOpen}
          />
        )}
        <ul className={`w-8/12 nav-links ${isNavOpen ? "open" : ""}`}>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="/">Home</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="/about-us">About Us</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">Services</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">Clients</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">Article/Blogs</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">External Links</a>
          </li>
        </ul>
        {/* -------------------------------------------------------------------------------------------------- */}

        {/* <ul className={`nav-links ${isNavOpen && "open"}`}>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="/">Home</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="/about-us">About Us</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">Services</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">Clients</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">Article/Blogs</a>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <a href="#">External Links</a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Header;
