import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import OneAbove from "../../../assets/images/Oneabove.png";
import "./index.css";

const Mobileheader = () => {
  const [isNavOpen, setIsnavOpen] = useState(true);

  const handleNavOpen = () => {
    setIsnavOpen(!isNavOpen);
  };

  return (
    <>
      <div
        className={`bg-black p-4 bg-opacity-0 absolute w-full header ${
          isNavOpen && "opacity-50"
        }`}
      >
        <section className="container">
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
            <div
              className={
                isNavOpen ? "mobile-nav-active" : "mobile-nav-inactive"
              }
            >
              <div className="mobile-nav-section">
                <nav>
                  <ul className={`nav-links ${isNavOpen && "open"}`}>
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
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Article/Blogs</a>
                    </li>
                    <li>
                      <a href="#">External Links</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Mobileheader;
