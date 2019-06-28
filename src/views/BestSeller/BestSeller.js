import "./BestSeller.scss";
import React, { Component } from "react";
import Product from "../../components/Product/Product";
import pizza1 from "../../image/pizza1.jpg";
class Products extends Component {
  render() {
    return (
      <div className="bestseller">
        <div className="products-banner">
          <div className="row">
            <img className="banner-img col-12" src={pizza1} />
          </div>
        </div>
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default Products;
