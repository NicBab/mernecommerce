import React from "react";
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
} from "../components/index";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
