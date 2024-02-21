import React from "react";
import { Link } from "react-router-dom";

const Nav = (): React.ReactElement => (
  <nav className="sticky top-0 hidden p-6 text-xl font-bold lg:block dark:bg-dm-foreground/50">
    <ul className="flex items-center gap-6 dark:text-dm-primary-content">
      <li className="mr-auto">
        <Link
          to="/"
          // className="bg-gradient-to-r from-primary-dark via-primary-content to-primary-dark bg-clip-text text-3xl text-transparent"
          className="bg-gradient-to-r from-primary-dark from-10% via-yellow-300 via-60% to-red-600 to-90% bg-clip-text text-transparent"
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
          to="/about"
          className="text-copy-lighter transition delay-100 duration-300 ease-in hover:text-primary-content"
        >
          About
        </Link>
      </li>
      <li className="">
        <button className="rounded-md bg-primary px-4 py-3 dark:bg-dm-primary">
          SUPPORT US
        </button>
      </li>
    </ul>
  </nav>
);

export default Nav;
