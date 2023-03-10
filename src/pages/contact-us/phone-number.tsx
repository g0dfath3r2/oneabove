import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const PhoneNumber = () => {
  return (
    <div className="p-10">
      <div className="flex w-5/12 border-2 p-6">
        <AiOutlineMail size={40} style={{color: "#2380c0"}} />
        <div className="flex flex-col text-start ml-6">
          <h1 className="text-xl font-medium">Phone Number</h1>
          <p className="text-gray-500">0120 421 0639</p>
        </div>
      </div>
    </div>
  );
};
export default PhoneNumber;
