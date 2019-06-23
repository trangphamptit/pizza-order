import React from "react";
import "./MainBlocks.scss";
import pizza from "../image/pizza.jpg";
import { Link } from "react-router-dom";

function MainBlocks() {
  return (
    <div className="mainBlocks">
      <Link to="/userprofile" className="block blockZoom">
        <img src={pizza} alt="" />
        <label className="blockLabel">Category</label>
      </Link>
      <Link to="/" className="block blockZoom">
        <img src={pizza} alt="" />
        <label className="blockLabel">Best Seller</label>
      </Link>
    </div>
  );
}

export default MainBlocks;
