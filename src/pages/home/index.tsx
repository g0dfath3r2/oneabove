import React from "react";
import About from "../../components/about";
import Carousel from "../../components/carousel";
import Services from "../../components/core-services";
import TeamMembers from "../../components/team-members";
import { BsArrowRight } from "react-icons/bs";
import Random from "../../assets/images/random.jpg";
import Solutions from "../../components/solutions";
import "./index.css";

const Home = () => {
  return (
    <div className="p-1">
      <Carousel />
      <About name="One Above" />
      <Services />
      <Solutions />
      <div className="px-40 py-20 team-members-container">
        <TeamMembers />
      </div>
      <div className="flex items-center justify-center p-10 relative w-full mb-4" style={{backgroundColor: "#f7f7fe"}}>
          <div className="flex items-center justify-center">
            <img
              src={Random}
              alt=""
              className="rounded rounded-full h-12 w-12"
            />
            <img
              src={Random}
              alt=""
              className="rounded rounded-full h-12 w-12 -ml-3"
            />
            <img
              src={Random}
              alt=""
              className="rounded rounded-full h-12 w-12 -ml-3"
            />
            <img
              src={Random}
              alt=""
              className="rounded rounded-full h-12 w-12 -ml-3"
            />
          </div>
          <div className=" flex justify-between items-center ml-2">
            <p className="mr-2 font-medium">More Members</p>
            <BsArrowRight style={{ color: "#2380c0" }} />
          </div>
        </div>
    </div>
  );
};

export default Home;
