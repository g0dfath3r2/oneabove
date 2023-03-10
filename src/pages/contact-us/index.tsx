import React from "react";
import Form from "./form";
import "./index.css";
import MailAddress from "./mail-address";
import OfficeAddress from "./office-address";
import PhoneNumber from "./phone-number";

const ContactUs = () => {
  return (
    <div className="">
      <div className="bg-black">
        <img
          src="http://www.ennobleip.com/wp-content/uploads/2022/07/Header-06-scaled.jpg"
          alt=""
          className="opacity-70"
        />
        <div className="absolute inset-52">
          <h1 className="text-5xl text-white">Contact Us</h1>
          <p className="mt-8 text-2xl text-white justify-between">
            <span>Home</span> <span> {">"} </span> <span>Contact</span>
          </p>
        </div>
      </div>
        <MailAddress />
        <OfficeAddress />
        <PhoneNumber />
        <Form />
    </div>
  );
};

export default ContactUs;
