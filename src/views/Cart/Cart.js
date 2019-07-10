import React, { Component } from "react";

import EmptyCart from "./EmptyCart";
import { AppContext } from "../../services/AppContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import "./Cart.scss";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <AppContext.Consumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              const total = value.getTotal(cart);
              return (
                <React.Fragment>
                  <h1 style={{ textAlign: "center" }}>your cart</h1>

                  <div id="table" className="table-hover">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Size</th>
                          <th>Price</th>
                          <th>Count</th>
                          <th>Total</th>
                          <th />
                        </tr>
                      </thead>

                      <CartList value={cart} />
                    </table>
                  </div>

                  <CartTotals
                    value={value}
                    total={total}
                    history={this.props.history}
                  />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </AppContext.Consumer>
      </section>
    );
  }
}
