import React from "react";
import { FaServicestack } from "react-icons/fa";


const TeamMembers = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center" style={{color: "#2380c0"}}>
      <FaServicestack size={20} />
      <h3 className="text-xl ml-2">Our Team Members</h3>

      </div>
      <h1 className="text-5xl mt-2 font-bold text-gray-700 leading-normal mb-8">We Bring Our Core Team<br/> Of Experts</h1>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/03/ss.jpg" alt="" />
          <h1>Name</h1>
        </div>
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/07/Dinesh-Jotwanit-01-1.jpg" alt="" />
          <h1>Name</h1>
        </div>
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/07/miten-mehta-jpg.webp" alt="" />
          <h1>Name</h1>
        </div>
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/07/akram-jpg.webp" alt="" />
          <h1>Name</h1>
        </div>

        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/03/ss.jpg" alt="" />
          <h1>Name</h1>
        </div>
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/07/Dinesh-Jotwanit-01-1.jpg" alt="" />
          <h1>Name</h1>
        </div>
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/07/miten-mehta-jpg.webp" alt="" />
          <h1>Name</h1>
        </div>
        <div className="flex flex-col">
          <img src="https://www.ennobleip.com/wp-content/uploads/2022/07/akram-jpg.webp" alt="" />
          <h1>Name</h1>
        </div>

      </div>
    </div>
  );
};

export default TeamMembers;
