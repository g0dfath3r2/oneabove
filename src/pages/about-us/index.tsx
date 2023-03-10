import React from "react";
import About from "../../components/about";
// import Form from "./form";
import "./index.css";
// import MailAddress from "./mail-address";
// import OfficeAddress from "./office-address";
// import PhoneNumber from "./phone-number";
import TeamMembers from "../../components/team-members";
import Accordion from "../../components/accordion";

const AboutUs = () => {
  return (
    <div className="">
      <div className="bg-black">
        <img
          src="http://www.ennobleip.com/wp-content/uploads/2022/07/Header-07-scaled.jpg"
          alt=""
          className="opacity-30"
        />
        <div className="absolute inset-52">
          <h1 className="text-5xl text-white">About Us</h1>
          <p className="mt-8 text-2xl text-white justify-between">
            <span>Home</span> <span> {">"} </span> <span>About</span>
          </p>
        </div>
      </div>
      <About name="One Above" />

      <div style={{ backgroundColor: "#f7f7fe" }}>
        <Accordion />
      </div>

      <div>
        <div className="px-40 py-16">
          {/* <h1 className="text-xl" style={{color: "#2380c0"}}>Our Team Members</h1> */}
          <TeamMembers />
        </div>
        {/* <h1 className="text-5xl mt-2 font-bold text-gray-700">WE BRING A CORE TEAM<br/> OF EXPERTS</h1> */}
      </div>
      {/* <MailAddress />
        <OfficeAddress />
        <PhoneNumber />
        <Form /> */}
    </div>
  );
};

export default AboutUs;
