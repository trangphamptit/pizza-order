import React from "react";
import { AppContext } from "../../services/AppContext";

export default function CartItem({ item, value }) {
  return (
    <AppContext.Consumer>
      {value => (
        <tr>
          <td> {item.name}</td>

          <td> {item.size && item.size.value}</td>

          <td> {item.size ? item.size.price : item.price}</td>

          <td className="d-inline ">
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

          <td>
            {" "}
            {item.size
              ? item.quantity * item.size.price
              : item.quantity * item.price}
          </td>

          <td className="cart-icon" onClick={() => value.removeItem(item._id)}>
            <i className="fas fa-trash" style={{ color: "yellow" }} />
          </td>
        </tr>
      )}
    </AppContext.Consumer>
  );
}
