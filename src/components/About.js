import React from "react";
import Sidebar from "./Sidebar";

const About = () => {
  return (
    <div className="aboutContainer">
      <Sidebar />
      <div className="homeInfo">
        <h1 className="text-header animated jackInTheBox">About</h1>
      </div>
    </div>
  );
};

export default About;
