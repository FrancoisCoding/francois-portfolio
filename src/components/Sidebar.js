import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/about">
          <FaUser />
        </Link>
        <Link to="/skills">
          <FaCog />
        </Link>
        <Link to="/work">
          <FaBriefcase />
        </Link>
        <Link to="/contact">
          <FaEnvelope />
        </Link>
      </div>
      <div className="sidebarSocials">
        <FaTwitter />
        <FaLinkedinIn />
        <FaFacebookF />
        <FaGithub />
      </div>
    </div>
  );
};

export default Sidebar;
