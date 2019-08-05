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
const Home = React.memo(() => {
  return (
    <div className="homeContainer">
      <Sidebar />
      <div className="homeInfo">
        <h1 className="text-header animated lightSpeedIn">
          <SplitText charPoses={charPoses}>
            Front-end Developer & Game Designer
          </SplitText>
        </h1>
        <div className="text">
          <p>
            <SplitText charPoses={charPoses}>
              I design and code day in and day out creating beautiful designs,
              and I love what I do.
            </SplitText>
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/portrait.png"}
          alt="Cartoon Portrait"
          className="cartoonPortrait"
        />
        {/* <div className="homeBtn">Contact Us</div> */}
      </div>
    </div>
  );
});

export default Home;
