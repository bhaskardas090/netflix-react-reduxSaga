import React from "react";
import "./heroVideo.scss";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const HeroVideo = () => {
  return (
    <div className="heroVideo">
      <img
        className="video"
        src="https://wallpapers.com/images/featured/squid-game-fvsfw2qlkey7u5o8.jpg"
        alt="hero-video"
      />
      <div className="heroVideoButtons">
        <button className="play">
          <FaPlay className="playIcon" />
          Play
        </button>
        <button className="info">
          <IoIosInformationCircleOutline className="infoIcon" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;
