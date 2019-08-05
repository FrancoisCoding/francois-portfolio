import React from "react";
import Sidebar from "./Sidebar";
import FlipPage from "react-flip-page";
import { FaGithub } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";

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

const flipBookStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

const Work = () => {
  return (
    <div className="workContainer">
      <Sidebar />
      <div>
        <FlipPage
          height="700"
          width="1150"
          pageBackground="#f2f3ee"
          showSwipeHint="true"
        >
          <section style={flipBookStyles}>
            <img src={process.env.PUBLIC_URL + "/project1.png"} />
            <div class="imageButtons">
              <button className="workButtons">Code</button>
              <button className="workButtons">View Project</button>
            </div>
          </section>
          <section style={flipBookStyles}>
            <img src={process.env.PUBLIC_URL + "/project2.png"} />
            <div class="imageButtons">
              <button className="workButtons">Code</button>
              <button className="workButtons">View Project</button>
            </div>
          </section>
          <section style={flipBookStyles}>
            <img src={process.env.PUBLIC_URL + "/project3.png"} />
            <div class="imageButtons">
              <button className="workButtons">Code</button>
              <button className="workButtons">View Project</button>
            </div>
          </section>
        </FlipPage>
      </div>
    </div>
  );
};

export default Work;
