import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const MailAddress = () => {
  return (
    <div className="p-10">
      <div className="flex w-5/12 border-2 p-6">
        <AiOutlineMail size={40} style={{color: "#2380c0"}} />
        <div className="flex flex-col text-start ml-6">
          <h1 className="text-xl font-medium">Mail Address</h1>
          <p className="text-gray-500">users@email.com</p>
        </div>
      </div>
    </div>
  );
};
export default MailAddress;
