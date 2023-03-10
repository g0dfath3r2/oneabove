import React from "react";

const Form = () => {
  return (
    <div className="p-10">
      <form action="" method="post">
        <div className="border-2 p-10 text-start">
          <h1 className="text-3xl font-medium mb-4 text-start">
            Drop Us A Line
          </h1>

          <div className="grid grid-cols-2 mb-6">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name*"
              className="p-4 border-2 w-2/4 mb-6"
            />
            <input
              className="p-4 border-2 w-2/4 mb-6"
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email*"
            />
            <input
              type="text"
              name="services"
              id=""
              placeholder="Services*"
              className="p-4 border-2 w-2/4"
            />
            <input
              className="p-4 border-2 w-2/4"
              type="number"
              name="phone_number"
              id=""
              placeholder="Enter Your Number*"
            />
          </div>

          <textarea
            className="p-4 border-2 w-full"
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder="Enter Your Message*"
          ></textarea>
          <button className="px-4 py-3 bg-black text-white rounded submit-button mt-4">SUBMIT NOW</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
