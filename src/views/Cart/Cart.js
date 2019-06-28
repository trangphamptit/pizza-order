import React, { Component } from "react";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem.js";
import CartTotals from "./CartTotals.js";
class Cart extends Component {
  render() {
    return (
      <section>
        <CartColumns />
        <CartItem />
        <CartTotals />
      </section>
    );
  }
}
export default Cart;
