"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      animate={{ y: visible ? 0 : -72 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0"
    >
      <h2 className="text-primary">Rabby Khan</h2>
    </motion.header>
  );
};

export default Navbar;
