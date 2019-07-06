import React, { Component } from "react";
import product3 from "../../image/product3.png";
import "./Category.scss";

import { Link } from "react-router-dom";
class Category extends Component {
  render() {
    const { category } = this.props;
    const { _id, name, img } = category;
    return (
      <div className="category col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div className="categoryitem">
          <Link to={`/details/${_id}`}>
            <img
              src={img ? img : product3}
              alt="categoryimg"
              className="category-image"
            />
          </Link>
          <label className="category-title">{name}</label>
        </div>
      </div>
    );
  }
}

export default Category;
