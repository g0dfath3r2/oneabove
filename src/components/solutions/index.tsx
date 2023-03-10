import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";

const Solutions = () => {
  return (
    <div className="px-40 py-16 solutions">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col text-start leading-relaxed">
          <div>
            <h1 style={{color: "#2380c0"}} className="text-xl">Our</h1>
            <p className="text-5xl font-bold my-2">Solutions For</p>
          </div>
          <p>
            Innovation is the mainstay for every business that leads to
            development of intellectual property. Identifying, developing, and
            leveraging innovation provides competitive edge and aids in long
            term success of the organization. We at Ennoble IP understand that
            despite of different structure and capacity every business need to
            protect and value there IP assets and so we cater to all major
            fields.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded relative -top-10">
            <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
              <h1>Corporate</h1>
              <p>Services our Services</p>
              <p className="flex items-center">
                <span className="mr-2">View Subject</span>
                <BsArrowRight />
              </p>
            </div>
          </div>

          <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded">
            <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
              <h1>University</h1>
              <p>E-suite e-Suite...</p>
              <p className="flex items-center">
                <span className="mr-2">View Subject</span>
                <BsArrowRight />
              </p>
            </div>
          </div>

          <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded relative -top-10">
          <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
            <h1>Startups & MSME</h1>
            <p>Services our Services</p>
            <p className="flex items-center">
              <span className="mr-2">View Subject</span>
              <BsArrowRight />
            </p>
            </div>
          </div>

          <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded">
          <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
            <h1>Legal Firms</h1>
            <p>Services our Services</p>
            <p className="flex items-center">
              <span className="mr-2">View Subject</span>
              <BsArrowRight />
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
