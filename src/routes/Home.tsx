import React from "react";
import bftfbanner from "../assets/bftfbanner.png";
import Accordion from "../components/Accordion.tsx";

const Home: React.FC = () => (
  <>
    <img
      className="mx-auto mb-6 rounded-lg bg-transparent bg-gradient-to-tr from-transparent via-primary-content/40 to-transparent"
      src={bftfbanner}
      alt="Brotherhood for the fallen banner"
    />

    <Accordion />
  </>
);

export default Home;
