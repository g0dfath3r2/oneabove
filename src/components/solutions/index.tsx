import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";

const Solutions = () => {
  return (
    <div className="px-40 py-16 solutions">
      <div className="solutions-section">
        <div className="flex flex-col text-start leading-relaxed">
          <div className="w-6/12 m-auto text-center mb-6">
            <div>
              <p style={{ color: "#2380c0" }} className="text-xl">
                Headline 1
              </p>
              <h1 className="text-5xl font-bold my-2">Headline 2</h1>
            </div>
            <p>
              Lorem Ipsum rendom text is necessary for testing sometimes.Lorem
              Ipsum rendom text is necessary for testing sometimes. Lorem Ipsum
              rendom text is necessary for testing sometimes.Lorem Ipsum rendom
              text is necessary for testing sometimes.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 solutions-card-section">
            <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded solutions-card">
              <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
                <h1>Service 1</h1>
                <p>Service Brief</p>
                <p className="flex items-center">
                  <span className="mr-2">View Subject</span>
                  <BsArrowRight />
                </p>
              </div>
            </div>

            <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded solutions-card">
              <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
                <h1>Service 2</h1>
                <p>Service Brief...</p>
                <p className="flex items-center">
                  <span className="mr-2">View Subject</span>
                  <BsArrowRight />
                </p>
              </div>
            </div>

            <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded solutions-card">
              <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
                <h1>Service 3</h1>
                <p>Service Brief</p>
                <p className="flex items-center">
                  <span className="mr-2">View Subject</span>
                  <BsArrowRight />
                </p>
              </div>
            </div>

            <div className="flex flex-col text-start p-4 shadow-md bg-white h-72 rounded solutions-card">
              <div className="my-auto h-1/4 flex flex-col p-4 leading-10">
                <h1>Service 4</h1>
                <p>Service Brief</p>
                <p className="flex items-center">
                  <span className="mr-2">View Subject</span>
                  <BsArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
