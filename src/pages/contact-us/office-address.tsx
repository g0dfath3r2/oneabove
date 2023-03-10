import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const OfficeAddress = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between w-5/12 border-2 p-6">
        <AiOutlineMail size={40} style={{ color: "#2380c0" }} />
        <div className="flex flex-col text-start">
          <h1 className="text-xl font-medium">Office Address</h1>
          <p className="mt-8">Noida Office:</p>
          <p className="text-gray-500">B-17, B Block, Sector 6, Noida, Uttar Pradesh (201301)</p>
          <p className="text-gray-500">B-26-27, Sector 1, Noida, Uttar Pradesh, 201301</p>

          <div className="flex flex-col text-start mt-8">
            <p className="">Dubai Office:</p>
            <p className="text-gray-500">
              Office No- 1113, Concord Tower, Media City, Palm Jumeirah, Dubai
            </p>
          </div>

          <div className="flex flex-col text-start mt-8">
            <p >Australia Office:</p>
            <p className="text-gray-500">25-31 mccubbin court, New beith, qld, 4124 Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfficeAddress;
