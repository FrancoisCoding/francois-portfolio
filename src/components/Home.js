import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="homeContainer">
      <Sidebar />
      <div className="homeInfo">
        <h1 className="text-header animated lightSpeedIn">
          Hello, my name is Isaiah Francois.
        </h1>
        <p className="text animated fadeInLeftBig">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          voluptatibus corrupti atque repudiandae earum quasi, rerum aspernatur
          iste consectetur quibusdam in architecto tempore nihil quo, tempora
          soluta necessitatibus odio voluptate.
        </p>
        <div className="homeBtn">Contact Us</div>
      </div>
    </div>
  );
};

export default Home;
