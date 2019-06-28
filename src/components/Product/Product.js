import React, { Component } from "react";
import "./Product.scss";
import product1 from "../../image/product.png";
import AppContext from "../../services/AppContext";
import { Link } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // inCart: true
    };
  }
  _renderSize(size) {
    console.log("size", size);
    return (
      <div className="mr-1">
        Size {size.value} - {size.price}
      </div>
    );
  }

  render() {
    const { product } = this.props;
    const { _id, img, name, description, variantProducts } = product;
    return (
      <div className="product col-12 col-md-6 col-lg-3 col-sm-12">
        <div className="card">
          <AppContext.Consumer>
            {value => {
              console.log("value", value);
              return (
                <div className="img-container">
                  <Link to={`/details/${_id}`}>
                    <img
                      src={img ? img : product1}
                      alt="product"
                      className="card-img-top"
                    />
                  </Link>

                  <button className="cart-btn">
                    {/* {this.state.inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      in Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )} */}
                  </button>
                </div>
              );
            }}
          </AppContext.Consumer>
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