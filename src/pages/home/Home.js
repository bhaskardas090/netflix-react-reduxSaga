import React from "react";
import Navbar from "../../common/Navbar";
import HeroVideo from "../../common/HeroVideo";
import List from "../../common/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroVideo />
      <List />
    </div>
  );
};

export default Home;
