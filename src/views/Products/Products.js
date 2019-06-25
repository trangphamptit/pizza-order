import "./Products.scss";
import React, { Component } from "react";
import pizza1 from "../../image/pizza1.jpg";
import product1 from "../../image/product1.png";
import Axios from "axios";
import { Link } from "react-router-dom";
class Products extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    Axios.get("https://api-mobile-shopping.herokuapp.com/api/products/").then(
      res => {
        const products = res.data.results;
        this.setState({ products });
        console.log(products);
      }
    );
  }
  render() {
    return (
      <div className="productspage">
        {/* banner */}
        <div className="products-banner">
          <img src={pizza1} />
        </div>

        {/* products */}
        <div className="products">
          <div className="product-item">
            <Link to="/details">
              <div className="product-image">
                <img src={product1} />
              </div>

              <div className="product-infor">
                <div className="product-name">PIZZA THẬP CẨM CAO CẤP</div>
                <div className="product-price">
                  Cỡ Vừa: 319,000đ Cỡ lớn: 419,000đ
                </div>
              </div>
              <button className="cart-btn" />
            </Link>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src={product1} />
            </div>

            <div className="product-infor">
              <div className="product-name">PIZZA THẬP CẨM CAO CẤP</div>
              <div className="product-price">
                Cỡ Vừa: 319,000đ Cỡ lớn: 419,000đ
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src={product1} />
            </div>

            <div className="product-infor">
              <div className="product-name">PIZZA THẬP CẨM CAO CẤP</div>
              <div className="product-price">
                Cỡ Vừa: 319,000đ Cỡ lớn: 419,000đ
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src={product1} />
            </div>

            <div className="product-infor">
              <div className="product-name">PIZZA THẬP CẨM CAO CẤP</div>
              <div className="product-price">
                Cỡ Vừa: 319,000đ Cỡ lớn: 419,000đ
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
