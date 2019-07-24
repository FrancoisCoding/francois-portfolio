import React from "react";
import Sidebar from "./Sidebar";
import SplitText from "react-pose-text";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

const Work = () => {
  return (
    <div className="workContainer">
      <Sidebar />
      <div className="projects projectCover">
        <img
          src={process.env.PUBLIC_URL + "/project1.png"}
          alt="reactLogo"
          class="card-img-top"
        />
        <img
          src={process.env.PUBLIC_URL + "/project2.png"}
          alt="reactLogo"
          class="card-img-top"
        />
        <img
          src={process.env.PUBLIC_URL + "/project3.png"}
          alt="reactLogo"
          class="card-img-top"
        />
        <img
          src={process.env.PUBLIC_URL + "/project4.png"}
          alt="reactLogo"
          class="card-img-top"
        />
      </div>
    </div>
  );
};

export default Work;
