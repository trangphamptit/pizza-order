import React from "react";
import { AppContext } from "../../services/AppContext";

export default function CartItem({ item, value }) {
  let total = 0;

  if (item.type === "pizza") {
    total = item.quantity * item.size.price;
  } else {
    total = item.quantity * item.price;
  }
  return (
    <AppContext.Consumer>
      {value => (
        <tr>
          <td> {item.name}</td>

          <td> {item.size && item.size.value}</td>

          <td>
            {" "}
            {item.size ? item.size.price - item.discountAmount : item.price}
          </td>

          <td className="d-flex ">
            <button
              className="btn btn-dark mx-1"
              onClick={() => value.decrement(item)}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <button className="btn btn-dark mx-1"> {item.quantity}</button>
            <button
              className="btn btn-dark mx-1"
              onClick={() => value.increment(item)}
            >
              +
            </button>
          </td>

          <td>$ {total}</td>

          <td className="cart-icon" onClick={() => value.removeItem(item._id)}>
            <i className="fas fa-trash" style={{ color: "yellow" }} />
          </td>
        </tr>
      )}
    </AppContext.Consumer>
  );
}
