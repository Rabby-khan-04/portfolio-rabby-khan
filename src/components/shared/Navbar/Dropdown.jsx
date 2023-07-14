import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Link as SmootScroll } from "react-scroll";
import "./Dropdown.css";
import { FaGithub } from "react-icons/fa";

const Dropdown = ({ open, setOpen }) => {
  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  console.log(isOpen);

  return (
    <div className="block lg:hidden">
      <button type="button btn__rounded" onClick={isOpen}>
        <HiOutlineMenuAlt2 className="text-white text-2xl" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
            className=""
          >
            <div
              className="h-14 w-14 bg-white text-accent rounded-full absolute top-5 right-5 cursor-pointer text-lg z-20 flex justify-center items-center"
              onClick={closeMenu}
            >
              <span> X</span>
            </div>
            <ul className="absolute top-0 left-0 right-0 mx-auto w-full h-[60vh] bg-black flex flex-col justify-center gap-5 items-center">
              <motion.li
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <Link
                  onClick={closeMenu}
                  className="dropdown__nav__link"
                  href="/"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <SmootScroll
                  className="dropdown__nav__link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closeMenu}
                >
                  About
                </SmootScroll>
              </motion.li>
              <motion.li
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <SmootScroll
                  className="dropdown__nav__link"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closeMenu}
                >
                  Portfolio
                </SmootScroll>
              </motion.li>
              <motion.li
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <SmootScroll
                  className="dropdown__nav__link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closeMenu}
                >
                  Contact
                </SmootScroll>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <a onClick={closeMenu} href="https://github.com/Rabby-khan-04">
                  <FaGithub className="text-2xl text-light transition-all duration-300 hover:text-primary" />
                </a>

                <a
                  onClick={closeMenu}
                  href="mailto:ajrabbyk72@gmail.com"
                  className="btn__sm"
                >
                  Lets Work
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
