import React, { Component } from "react";
import Title from "../../components/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { AppContext } from "../../services/AppContext";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  getTotal(cart) {
    let _total = 0;
    cart.map(item => {
      if (item.size) {
        _total += item.size.price * item.quantity;
      } else {
        _total += item.price;
      }
      // if (item.size && item.size.price && item.order.size.price) {
      //   _total += item.order.size.price;
      // }
    });
    return _total;
  }

  render() {
    return (
      <section>
        <AppContext.Consumer>
          {value => {
            const { cart, count } = value;
            console.log("cart", cart);
            console.log("count", count);
            if (cart.length > 0) {
              const total = this.getTotal(cart);
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
