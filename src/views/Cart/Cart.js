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
            console.log("cart", cart);
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Giỏ hàng của bạn" />
                  <CartColumns />
                  <CartList value={cart} />
                  {/* <CartTotals value={value} history={this.props.history} /> */}
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
