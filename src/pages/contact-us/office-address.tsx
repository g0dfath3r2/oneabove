import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const OfficeAddress = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between w-5/12 border-2 p-6">
        <AiOutlineMail size={40} style={{ color: "#2380c0" }} />
        <div className="flex flex-col text-start">
          <h1 className="text-xl font-medium">Office Address</h1>
          <p className="mt-8">Office 1:</p>
          <p className="text-gray-500">address, B Block, Sector 26, address, address (133476)</p>
          <p className="text-gray-500">Plot 123, Sector 21, address, address, 155633</p>

          <div className="flex flex-col text-start mt-8">
            <p className="">Office 2:</p>
            <p className="text-gray-500">
              Office No- 1113, Concord Tower, Media City, address,address
            </p>
          </div>

          <div className="flex flex-col text-start mt-8">
            <p >Office 3:</p>
            <p className="text-gray-500">25-31 mccubbin court, New beith, address, 4124 address</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfficeAddress;
