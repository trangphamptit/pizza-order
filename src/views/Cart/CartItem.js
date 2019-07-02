import React from "react";

export default function CartItem({ item, value }) {
  // const { increment, decrement, removeItem, count } = value;
  console.log("item", item);
  // console.log("value", value);

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
        {item.quantity}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            {/* <span className="btn btn-black mx-1" onClick={() => decrement(_id)}>
              -
  </span>*/}
            <span className="btn btn-black mx-1" />
            {/* <span className="btn btn-black mx-1" onClick={() => increment(_id)}>
              +
            </span> */}
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        {/* <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div> */}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong> {item.quantity * item.price}$</strong>
        tt
      </div>
    </div>
  );
}
