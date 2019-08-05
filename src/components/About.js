import React from "react";
import AboutSidebar from "./AboutSidebar";
import SplitText from "react-pose-text";
import LanguageModel from "./LanguagesModel";

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
const About = React.memo(() => {
  return (
    <div className="aboutContainer">
      <AboutSidebar />
      <div className="homeInfo">
        <h1 className="text-header animated lightSpeedIn">
          <SplitText charPoses={charPoses}>
            Hello, my name is Isaiah Francois.
          </SplitText>
        </h1>
        <div className="text">
          <p>
            <SplitText charPoses={charPoses}>
              Since beginning my journey as a fullstack developer, I've created
              many sites, designed games/apps , and have built and modified
              backend servers. I'm confident in my skills, always learning, and
              can teach what i know to others.
            </SplitText>
          </p>
        </div>
      </div>
      <div className="models">
        <LanguageModel className="models" />
      </div>
    </div>
  );
});

export default About;
