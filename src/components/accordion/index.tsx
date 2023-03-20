import React, { useState } from "react";

const Accordion = () => {
  const [buttonToggle, setButtonToggle] = useState("mission");
  const handleToggle = (e: any) => {
    const { name } = e.target;
    if (name === "mission") {
      setButtonToggle(name);
    } else if (name === "vision") {
      setButtonToggle(name);
    }
  };
  console.log(buttonToggle, "<<<<<<buttonTogglebuttonTogglebuttonToggle");
  
  return (
    <div className="px-40 py-16 text-start">
      <div className="flex justify-between items-center">
        <div className="w-3/12 flex justify-between items-center mb-6">
          <button
            name="mission"
            onClick={handleToggle}
            style={
              `${buttonToggle === "mission"}`
                ? { backgroundColor: "#2380c0",color: "#fff" }
                : { backgroundColor: "#fff", color: "#000" }
            }
            className="px-6 py-2"
          >
            Mission
          </button>
          <button
            name="vision"
            onClick={handleToggle}
            style={
              `${buttonToggle === "vision"}`
                ? { backgroundColor: "#2380c0",color: "#fff" }
                : { backgroundColor: "#fff", color: "#000" }
            }
            className="px-6 py-2"
          >
            Vision
          </button>
        </div>
      </div>
      <div className={`${buttonToggle === "mission" ? "flex " : "hidden"}`}>
        <p>
          Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
          Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
          Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
          Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
        </p>
      </div>
      <div className={`${buttonToggle === "vision" ? "flex" : "hidden"}`}>
        <p>
        Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
        Lorem Ipsum rendom text is necessary for testing sometimes.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
