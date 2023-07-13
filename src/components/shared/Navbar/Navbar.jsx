"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo/logo.png";
import "./Navbar.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { Link as SmootScroll } from "react-scroll";
import Link from "next/link";

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

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      path: "/resume",
      title: "Resume",
    },
  ];

  // to="test1" spy={true} smooth={true} offset={50} duration={500}

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
          {/* {navLinks.map((link) => (
            <li key={link.path}>
              <NavLinks href={link.path} title={link.title} />
            </li>
          ))} */}

          <li>
            <Link href="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <SmootScroll
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nav__link"
            >
              About
            </SmootScroll>
          </li>
          <li>
            <SmootScroll
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nav__link"
            >
              Portfolio
            </SmootScroll>
          </li>
          <li>
            <SmootScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nav__link"
            >
              Contact
            </SmootScroll>
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
