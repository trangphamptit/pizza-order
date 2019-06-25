import React from "react";
import "./MainBlocks.scss";
import { withRouter } from "react-router-dom";
import product1 from "../image/product1.png";

function MainBlocks() {
  return (
    <div className="mainblocks">
      <div className="mainblock-item">
        <img src={product1} className="mainblock-image" />
        <label className="mainblock-title">BESTSELLER</label>

        <input type="submit" value="see more >>" />
      </div>

      <div className="mainblock-item">
        <img src={product1} className="mainblock-image" />
        <label className="mainblock-title">CATEGORY</label>

        <input type="submit" value="see more >>" />
      </div>
    </div>
  );
}

const MainBlocksWithRouter = withRouter(MainBlocks);
export default MainBlocksWithRouter;
