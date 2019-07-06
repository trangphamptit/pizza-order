import React, { Component } from "react";
import "./BestSellerProduct.scss";
import product1 from "../../image/product.png";
import { Link } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  _renderSize(size) {
    // console.log("size", size);
    return (
      <div className="mr-1">
        Size {size.value} - {size.price}
      </div>
    );
  }

  render() {
    const { bestseller } = this.props;
    console.log(bestseller);
    const { _id, img, name, description, variantProducts } = bestseller;
    return (
      <div className="product col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <div className="card ">
          <div className="img-container">
            <Link to={`/details/${_id}`}>
              <img
                src={img ? img : product1}
                alt="product"
                className="card-img-top"
              />
            </Link>
            <Link to={`/details/${_id}`}>
              <button className="cart-btn">
                <i className="fas fa-cart-plus" />
              </button>
            </Link>
          </div>
        </div>
        <div className="card-footer ">
          <p className="product-name ">{name}</p>
          <h5 className="product-price ">
            {variantProducts &&
              variantProducts[0] &&
              this._renderSize(variantProducts[0])}
          </h5>
        </div>
      </div>
    );
  }
}

export default Product;