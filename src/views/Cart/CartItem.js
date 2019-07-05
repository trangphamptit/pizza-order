import React from "react";
import { AppContext } from "../../services/AppContext";
export default function CartItem({ item, value }) {
  const { removeItem } = value;

  return (
    <div className="col-12 my-2 text-capitalize text-center">
      <div className="row">
        <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
          <span className="d-lg-none"> {item.name}</span>
        </div>
        <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
          <span className="d-lg-none"> {item.size && item.size.value}</span>
        </div>

        <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
          <span className="d-lg-none">
            {" "}
            {item.size ? item.size.price : item.price}
          </span>
        </div>
        <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
          <span className="d-lg-none"> {item.quantity && item.quantity}</span>
        </div>

        <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
          <AppContext.Consumer>
            {value => (
              <div
                className="cart-icon"
                onClick={() => value.removeItem(item._id)}
              >
                <i className="fas fa-trash" style={{ color: "yellow" }} />
              </div>
            )}
          </AppContext.Consumer>
        </div>

        <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
          <span>
            {" "}
            {item.size
              ? item.quantity * item.size.price
              : item.quantity * item.price}
            vnđ
          </span>
        </div>
      </div>
    </div>
  );
}
