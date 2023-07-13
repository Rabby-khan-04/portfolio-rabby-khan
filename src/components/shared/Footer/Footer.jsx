import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="line__brake"></div>
      <div className="container py-5 relative flex justify-between items-center">
        <div>
          <p className="text-light-gray text-sm">
            &copy; 2023 Arifujjaman Rabby Khan. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/rabbykhan17/" target="_blank">
            <FaLinkedin className="text-light-gray hover:text-primary text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/rabbykhan17/" target="_blank">
            <FaGithub className="text-light-gray hover:text-primary text-2xl" />
          </a>
          <a href="https://www.facebook.com/rabbykhan04/" target="_blank">
            <FaFacebook className="text-light-gray hover:text-primary text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
