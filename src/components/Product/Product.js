import React, { Component } from "react";
import "./Product.scss";
import product1 from "../../image/product.png";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
class Product extends Component {
  _renderSize(size) {
    // console.log("size", size);
    return (
      <div className="mr-1">
        Size {size.value} - {size.price}
      </div>
    );
  }

  render() {
    const { product } = this.props;
    const { _id, img, name, variantProducts } = product;
    return (
      <Grid xl={3} lg={3} md={4} sm={12} className="product">
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
      </Grid>
    );
  }
}

export default Product;
