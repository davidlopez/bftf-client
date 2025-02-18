import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";

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
    <div className="sticky top-0 z-50 flex items-end p-3 text-xl font-bold xl:hidden dark:bg-dm-foreground/50">
      <Link
        to="/"
        className="mr-auto bg-gradient-to-r from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-transparent"
      >
        BFTF Colorado
      </Link>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="flex">
        <motion.button className="stroke-copy-lighter" whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
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
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.button>
        <motion.ul
          className="absolute right-0 top-12 grid w-fit gap-3 p-6 text-right text-sm dark:bg-dm-foreground/85"
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
              to="/supporters"
              className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
            >
              Supporters
            </Link>
          </motion.li>
          {/*<motion.li variants={itemVariants}>*/}
          {/*  <Link*/}
          {/*    to="/services"*/}
          {/*    className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"*/}
          {/*  >*/}
          {/*    Services*/}
          {/*  </Link>*/}
          {/*</motion.li>*/}
          <motion.li variants={itemVariants}>
            <Link
              to="/bod"
              className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
            >
              Board of Directors
            </Link>
          </motion.li>
          {/*<motion.li variants={itemVariants}>*/}
          {/*  <Link*/}
          {/*    to="/news"*/}
          {/*    className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"*/}
          {/*  >*/}
          {/*    In the News*/}
          {/*  </Link>*/}
          {/*</motion.li>*/}
          <motion.li className="ml-auto flex items-end" variants={itemVariants}>
            <a
              href="http://www.bitnermemorialfund.org/"
              target="_blank"
              className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
            >
              Bitner Memorial 5K/10K
            </a>
            <svg width="21" height="21" viewBox="0 0 21 21">
              <motion.path
                d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                fill="transparent"
                strokeWidth="2"
                stroke="#5e616e"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.li>
          <motion.li className="ml-auto flex items-end" variants={itemVariants}>
            <a
              href="http://www.odmp.org/"
              target="_blank"
              className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
            >
              ODMP
            </a>
            <svg width="21" height="21" viewBox="0 0 21 21">
              <motion.path
                d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                fill="transparent"
                strokeWidth="2"
                stroke="#5e616e"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a
              target="_blank"
              href="https://www.paypal.com/paypalme/brotherhoodaurora"
              className="rounded-md bg-primary px-4 py-3 dark:bg-dm-primary"
            >
              SUPPORT US
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default MobileNav;
