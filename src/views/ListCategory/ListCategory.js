import React, { Component } from "react";
import "./ListCategory.scss";
import product2 from "../../image/product2.png";
class ListCategory extends Component {
  render() {
    return (
      <div className="listcategory">
        <div className="category-item">
          <img src={product2} className="category-image" />
          <label className="category-title">durian pizza</label>

          <input type="button" value="see more >>" />
        </div>
        <div className="category-item">
          <img src={product2} className="category-image" />
          <label className="category-title">durian pizza</label>

          <input type="button" value="see more >>" />
        </div>
        <div className="category-item">
          <img src={product2} className="category-image" />
          <label className="category-title">durian pizza</label>
          <div className="middle-btn">
            <input type="button" value="see more >>" />
          </div>
        </div>
        <div className="category-item">
          <img src={product2} className="category-image" />
          <label className="category-title">durian pizza</label>
          <div className="middle-btn">
            <input type="button" value="see more >>" />
          </div>
        </div>
      </div>
    );
  }
}

export default ListCategory;
