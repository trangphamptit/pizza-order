import React, { Component } from "react";

class CartColumns extends Component {
  render() {
    return (
      <div className="col-12 text-center ">
        <div className="row">
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">name </p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">size</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">price</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">count</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartColumns;
