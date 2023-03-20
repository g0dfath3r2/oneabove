import React from "react";
import { FaServicestack } from "react-icons/fa";
import "./index.css";

const TeamMembers = () => {
  return (
    <div className="team-members">
      <div
        className="flex items-center justify-center"
        style={{ color: "#2380c0" }}
      >
        <FaServicestack size={20} />
        <h3 className="text-xl ml-2">HeadLine 1</h3>
      </div>
      <h1 className="text-5xl mt-2 font-bold text-gray-700 leading-normal mb-8">
        Headline
        <br /> 2
      </h1>
      <div className="grid grid-cols-4 gap-6 team-section">
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/03/ss.jpg"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/07/Dinesh-Jotwanit-01-1.jpg"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/07/miten-mehta-jpg.webp"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/07/akram-jpg.webp"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>

        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/03/ss.jpg"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/07/Dinesh-Jotwanit-01-1.jpg"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/07/miten-mehta-jpg.webp"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://www.ennobleip.com/wp-content/uploads/2022/07/akram-jpg.webp"
            alt=""
          />
          <p className="text-xl font-medium text-gray-500 p-2">Name</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
