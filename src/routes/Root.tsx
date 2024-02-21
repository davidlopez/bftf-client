import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import MobileNav from "../components/MobileNav.tsx";

const Root = (): React.ReactElement => {
  return (
    <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative min-h-screen bg-white dark:bg-dm-background dark:text-dm-primary-content">
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black/80"></div>
      <div className="relative">
        <Nav />
        <MobileNav />
        <div className="h-6 lg:h-12" />
        <div className="mx-auto px-6 lg:w-3/5 lg:p-0">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
