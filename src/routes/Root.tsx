import React from "react";
import { Outlet } from "@tanstack/react-router";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import MobileNav from "../components/MobileNav.tsx";

const Root: React.FC = () => {
  return (
    <div className="relative bg-white bg-dot-black/[0.2] dark:bg-dm-background dark:text-dm-primary-content dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black/80"></div>
      <div className="relative flex min-h-screen flex-col">
        <Nav />
        <MobileNav />
        <div className="h-6 lg:h-12" />
        <div className="mx-auto mb-12 flex-grow px-6 lg:w-3/5 lg:p-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
