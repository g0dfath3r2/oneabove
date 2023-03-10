import React from "react";
import OneAbove from "../../assets/images/Oneabove.png";
import "./index.css"

const Header = () => {
  return (
    <div className="bg-black p-4 bg-opacity-0 absolute w-full header">
      <section className="container">
        <nav className="fill flex justify-around items-center">
        <div className="w-2/12">
          <img src={OneAbove} alt="Logo" className="object-contain h-48 ml-12" />
        </div>
          <ul className="w-8/12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
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
      </section>
    </div>
  );
};

export default Header;
