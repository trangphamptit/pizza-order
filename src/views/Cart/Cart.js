import React, { Component } from "react";
import Title from "../../components/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { AppContext } from "../../services/AppContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <AppContext.Consumer>
          {value => {
            const { cart } = value;
            // console.log("cart", cart);
            // console.log("count", count);
            if (cart.length > 0) {
              const total = value.getTotal(cart);
              return (
                <React.Fragment>
                  <Title name="your cart" />
                  <CartColumns />
                  <CartList value={cart} />
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
