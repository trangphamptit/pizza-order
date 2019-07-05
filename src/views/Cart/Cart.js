import React, { Component } from "react";
import Title from "../../components/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { AppContext } from "../../services/AppContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  // getTotal(cart) {
  //   let _total = 0;
  //   cart.map(item => {
  //     if (item.size) {
  //       _total += item.size.price * item.quantity;
  //     } else {
  //       _total += item.price * item.quantity;
  //     }
  //   });
  //   return _total;
  // }

  render() {
    return (
      <section>
        <AppContext.Consumer>
          {value => {
            const { cart, count, getTotal } = value;
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
