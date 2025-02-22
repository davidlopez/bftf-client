import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 hidden p-6 text-lg font-bold xl:block dark:bg-dm-foreground/50">
      <ul className="flex items-center gap-6 dark:text-dm-primary-content">
        <li className="mr-auto text-2xl">
          <Link
            to="/"
            className="bg-gradient-to-r from-primary-dark from-25% via-red-500 via-60% to-yellow-300 to-90% bg-clip-text text-transparent"
          >
            BFTF Colorado
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/supporters"
            className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
          >
            Supporters
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link*/}
        {/*    to="/services"*/}
        {/*    className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"*/}
        {/*  >*/}
        {/*    Services*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li>
          <Link
            to="/bod"
            className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
          >
            Board of Directors
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link*/}
        {/*    to="/news"*/}
        {/*    className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"*/}
        {/*  >*/}
        {/*    In the News*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <motion.nav
          onHoverStart={() => setIsOpen(true)}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="relative flex"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 fill-copy-lighter text-copy-lighter"
          >
            Events & Partners
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            onHoverEnd={() => setIsOpen(false)}
            className="absolute right-0 top-6 grid w-max gap-3 p-6 text-right text-sm dark:bg-dm-foreground/85"
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
          </motion.ul>
        </motion.nav>
        <li>
          <a
            target="_blank"
            href="https://www.paypal.com/paypalme/brotherhoodaurora"
            className="rounded-md bg-primary px-4 py-3 dark:bg-dm-primary"
          >
            SUPPORT US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
