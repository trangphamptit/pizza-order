import React from "react";

export default function CartItem({ item, value }) {
  // const { increment, decrement, removeItem, count } = value;
  console.log("item", item);

  return (
    <div className="row my-2 text-capitalize text-center d-flex align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">name:</span>
        {item.name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">size:</span>
        {item.size && item.size.value}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {item.size && item.size.price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">count:</span>
        {item.quantity && item.quantity}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          // onClick={() => removeItem(item._id)}
        >
          <i className="fas fa-trash" />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>
          {" "}
          {item.size
            ? item.quantity * item.size.price
            : item.quantity * item.price}
          $
        </strong>
      </div>
    </div>
  );
}
