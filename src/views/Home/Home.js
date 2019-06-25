import React from "react";
import MainBlocks from "../MainBlocks";
import Slider from "../../components/Slider/Slider";
function Home() {
  return (
    <div className="homepage">
      {" "}
      <Slider />
      <MainBlocks />{" "}
    </div>
  );
}

export default Home;
