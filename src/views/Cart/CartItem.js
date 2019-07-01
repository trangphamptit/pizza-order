import React, { Component } from "react";
import product2 from "../../image/product2.png";
export default function CartItem({ item, value }) {
  const { _id, name, img, order } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center d-flex align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img ? img : product2}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {name}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {order.size.price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            {/* <span className="btn btn-black mx-1" onClick={() => decrement(_id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span> */}
            <span className="btn btn-black mx-1" onClick={() => increment(_id)}>
              +
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        {/* <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div> */}
        tt
      </div>

      <div className="col-10 mx-auto col-lg-2">
        {/* <strong> {total}đ</strong> */}
        tt
      </div>
    </div>
  );
}
