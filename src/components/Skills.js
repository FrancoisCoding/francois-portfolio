import React from "react";
import Sidebar from "./Sidebar";
import SplitText from "react-pose-text";

const charPoses = {
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: {
      type: "spring",
      velocity: 12
    }
  }
};
const Skills = () => {
  return (
    <div className="skillsContainer">
      <Sidebar />
      <div className="homeInfo">
        <h1 className="text-header animated fadeInDown">
          {" "}
          <SplitText charPoses={charPoses}>Skills</SplitText>
        </h1>
        <div className="text">
          <SplitText charPoses={charPoses}>
            I design and code day in and day out creating beautiful designs, and
            I love what I do.
          </SplitText>
        </div>
      </div>
    </div>
  );
};

export default Skills;
