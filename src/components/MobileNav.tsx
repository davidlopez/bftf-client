// import "./styles.css";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MobileNav = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 flex items-end p-3 text-xl font-bold lg:hidden dark:bg-dm-foreground/50">
      <Link
        to="/"
        className="mr-auto bg-gradient-to-r from-primary-dark from-10% via-yellow-300 via-60% to-red-600 to-90% bg-clip-text text-transparent"
      >
        BFTF Colorado
      </Link>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="flex"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 100%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              d="M 2 9.423 L 20 9.423"
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 100%)"
              strokeLinecap="round"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M 2 9.423 L 20 9.423"
              fill="transparent"
              strokeWidth="3"
              stroke="hsl(0, 0%, 100%)"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.button>
        <motion.ul
          className="absolute right-0 top-12 w-fit p-6 text-right dark:bg-dm-foreground/85"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>
            <Link
              to="/"
              className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              to="/about"
              className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <button className="rounded-md bg-primary px-4 py-3 dark:bg-dm-primary">
              SUPPORT US
            </button>
          </motion.li>
          {/*<motion.li variants={itemVariants}>Item 4</motion.li>*/}
          {/*<motion.li variants={itemVariants}>Item 5 </motion.li>*/}
          {/*<motion.li variants={itemVariants}>*/}
          {/*  Item sdjflff reall long5{" "}*/}
          {/*</motion.li>*/}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default MobileNav;
