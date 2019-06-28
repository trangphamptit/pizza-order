import React, { Component } from "react";
import product2 from "../../image/product2.png";
import "./Category.scss";
import AppContext from "../../services/AppContext";
class Category extends Component {
  render() {
    const { category } = this.props;
    const { _id, name, description, img } = category;
    return (
      <AppContext.Consumer>
        {value => {
          console.log("category", value);
          return (
            <div className=" col-12 col-md-6 col-sm-12 col-lg-3">
              <div className="categoryitem">
                <img src={img ? img : product2} className="category-image" />
                <label className="category-title">{name}</label>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Category;
