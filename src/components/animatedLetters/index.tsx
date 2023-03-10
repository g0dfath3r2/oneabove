import React from "react";
import "./index.scss";

type interfaceAnimatedLetters = {
  letterClass: string;
  strArray: Array<string>;
  idx: number;
};

const AnimatedLetters = (props: interfaceAnimatedLetters) => {
  const { letterClass, idx, strArray } = props;
  return (
    <span className="w-7/12 mb-8">
      {strArray.map((ele, i) => (
        <span key={ele + i} className={`${letterClass} _${i + idx}`}>
          {ele}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
