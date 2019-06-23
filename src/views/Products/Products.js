import "./Products.scss";
import React, { Component } from "react";
import pizza1 from "../../image/pizza1.jpg";
import product1 from "../../image/product1.png";
class Products extends Component {
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
