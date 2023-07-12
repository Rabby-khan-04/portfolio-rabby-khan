"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo/logo.png";
import "./Navbar.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 p-3 z-50"
    >
      <nav className="rounded-xl p-4 navbar flex justify-between items-center">
        <Image src={logo} height={40} alt="logo" />

        <ul className="flex items-center gap-3">
          <li>
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Resume
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-8">
          <li>
            <a href="https://github.com/Rabby-khan-04">
              <FaGithub className="text-2xl text-light transition-all duration-300 hover:text-primary" />
            </a>
          </li>
          <li>
            <a href="mailto:ajrabbyk72@gmail.com" className="btn__sm">
              Lets Work
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
