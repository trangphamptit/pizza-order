import React from "react";
import "./Button.scss";

function Button() {
  return (
    <button type="button" className="generalButton">
      <span className="mr-2">
        <i className="fas fa-cart-plus" />
      </span>
      Your cart
    </button>
  );
}
export default Button;
