import React, { Component } from "react";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      img: "https://dominos.vn/Data/Sites/1/Product/584/veggie-mania.png",
      title: "PIZZA RAU CỦ",
      price: "59000đ",
      total: "59000đ",
      count: 1
    };
  }
  render() {
    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={this.state.img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product:</span>
          {this.state.title}
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price:</span>
          {this.state.price}
        </div>

        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span className="btn btn-black mx-1">-</span>
              <span className="btn btn-black mx-1">{this.state.count}</span>
              <span className="btn btn-black mx-1">+</span>
            </div>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon">
            <i className="fas fa-trash" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong> {this.state.total}đ</strong>
        </div>
      </div>
    );
  }
}
