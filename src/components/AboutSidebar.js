import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const AboutSidebar = React.memo(() => {
  return (
    <div className="aboutSidebar">
      <div className="sidebar-top">
        <Tooltip title="Home" placement="right">
          <Link to="/" className="navLinks">
            <FaHome />
          </Link>
        </Tooltip>
        <Tooltip title="About" placement="right">
          <Link to="/about" className="navLinks">
            <FaUser />
          </Link>
        </Tooltip>
        <Tooltip title="Work" placement="right">
          <Link to="/work" className="navLinks">
            <FaBriefcase />
          </Link>
        </Tooltip>
        <Tooltip title="Contact" placement="right">
          <Link to="/contact" className="navLinks">
            <FaEnvelope />
          </Link>
        </Tooltip>
      </div>
      <div className="sidebarSocials">
        <a
          href="https://twitter.com/FrancoisCoding"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/isaiah-francois-56a5b4188/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/FrancoisCodingj"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/FrancoisCoding"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
});

export default AboutSidebar;
