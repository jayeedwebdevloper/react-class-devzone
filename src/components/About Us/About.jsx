import React, { useEffect } from "react";
import AboutBanner from "./AboutBanner";
import MoreAbout from "./MoreAbout";
import OurSarvice from "./OurSarvice";
import Counter from "./Counter";
import MultisliderSwiper from "../../shared/Sliders/MultisliderSwiper";
import { teamData } from "../../util/teamData";
import ShortContact from "./ShortContact";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutBanner />
      <MoreAbout />
      <OurSarvice />
      <Counter />
      <MultisliderSwiper data={teamData} />
      <ShortContact />
    </div>
  );
};

export default About;
