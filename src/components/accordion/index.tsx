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
          An “En-Noble” lends greater dignity or nobility in innovation through
          novelty that triggers the journey of an idea en route to a path
          breaking Innovation. At Ennoble IP, we endeavor to encourage, protect
          and commercialize Innovations. Our mission is to become one-stop
          solution for all kind of IP & research services of the highest quality
          at reasonable cost. Our customers can recognize their IP asset and
          relish the worldwide protection of their IP rights. We Individualized
          legal advice, assistance, generating value for customers and the
          company alike. Behind these goals stands the philosophy that the key
          to our success is the experience gathered, the stability that
          accompanied the consolidation of our business, and the young, driven
          and innovative spirit that characterizes our undertakings. We protect
          your intellectual assets and help increase their value.
        </p>
      </div>
      <div className={`${buttonToggle === "vision" ? "flex" : "hidden"}`}>
        <p>
          Our vision provides a direction and goal for all our undertakings. We
          aspire to become the market leader in Research and Analytics by
          delivering state-of-the-art services and setting the industry standard
          for quality, security, stability and value on a worldwide scale.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
