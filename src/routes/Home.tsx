import React from "react";
import bftfbanner from "../assets/bftfbanner.png";
import Accordian from "../components/Accordian.tsx";

const Home = (): React.ReactElement => (
  <>
    <img
      className="mb-6 rounded-lg bg-transparent bg-gradient-to-tr from-transparent via-primary-content/40 to-transparent"
      src={bftfbanner}
      alt="Brotherhood for the fallen banner"
    />

    <Accordian />
  </>
);

export default Home;
