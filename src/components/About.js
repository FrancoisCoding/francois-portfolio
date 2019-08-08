import React from "react";
import AboutSidebar from "./AboutSidebar";
import SplitText from "react-pose-text";
import LanguageModel from "./LanguagesModel";
import Sidebar from "./Sidebar";

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
  if (window.innerWidth > 1000) {
    return (
      <div className="aboutContainer">
        <AboutSidebar />
        <div className="homeInfo">
          <h1 className="text-header animated lightSpeedIn aboutHeader">
            <SplitText charPoses={charPoses}>
              Hello, my name is Isaiah Francois.
            </SplitText>
          </h1>
          <div className="text">
            <p className="aboutText">
              <SplitText charPoses={charPoses}>
                Since beginning my journey as a fullstack developer, I've
                created many sites, designed games/apps , and have built and
                modified backend servers. I'm confident in my skills, always
                learning, and can teach what i know to others.
              </SplitText>
            </p>
          </div>
        </div>
        <div className="models">
          <LanguageModel className="models" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="aboutContainer">
        <Sidebar />
        <div className="aboutInnerContainer">
          <h1 className="text-header animated lightSpeedIn">
            <SplitText charPoses={charPoses}>
              Hello, my name is Isaiah Francois.
            </SplitText>
          </h1>
          <div className="text">
            <p className="aboutText">
              <SplitText charPoses={charPoses}>
                Since beginning my journey as a fullstack developer, I've
                created many sites, designed games/apps , and have built and
                modified backend servers. I'm confident in my skills, always
                learning, and can teach what i know to others.
              </SplitText>
              <br />
              <br />
              <SplitText charPoses={charPoses}>
                Everything started with a passion for learning advanced
                technologies.
              </SplitText>
              <br />
              <SplitText charPoses={charPoses}>
                2016 - Devloped an interest for coding an began studying HTML &
                CSS.
              </SplitText>
              <br />
              <SplitText charPoses={charPoses}>
                2018 - Started developing computer game in unity while learning
                C#.
              </SplitText>
              <br />
              <SplitText charPoses={charPoses}>
                2019 - Finished unity game and ported to Android. Also, joined
                Lambda School to further my technoligical studies
              </SplitText>
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
});

export default About;
