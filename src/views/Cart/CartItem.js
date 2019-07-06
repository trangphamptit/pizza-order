import React from "react";
import { AppContext } from "../../services/AppContext";
export default function CartItem({ item, value }) {
  const { removeItem, increment, decrement } = value;
  console.log("item", item);
  return (
    <div className="col-12 my-2 text-capitalize text-center">
      <AppContext.Consumer>
        {value => (
          <div className="row">
            <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
              <span> {item.name}</span>
            </div>
            <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
              <span> {item.size && item.size.value}</span>
            </div>

            <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
              <span> {item.size ? item.size.price : item.price}</span>
            </div>

            <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
              <div className="d-flex justify-content-center">
                <div>
                  <button
                    className="btn btn-dark mx-1"
                    onClick={() => value.decrement(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="btn btn-dark mx-1"> {item.quantity}</span>
                  <button
                    className="btn btn-dark mx-1"
                    onClick={() => value.increment(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-auto col-lg-2 col-xl-2 col-md-2 col-sm-2">
              <div
                className="cart-icon"
                onClick={() => value.removeItem(item._id)}
              >
                <i className="fas fa-trash" style={{ color: "yellow" }} />
              </div>
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
        )}
      </AppContext.Consumer>
    </div>
  );
}
