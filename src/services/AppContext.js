import React, { Component } from "react";
import { getProducts } from "./products";
import { getCategories } from "./categories";
import { getBestsellers } from "./bestseller";
export const AppContext = React.createContext();
class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      bestsellers: [],
      cart: [],
      isLogin: false,
      // cartSubTotal: 0,
      // cartTotal: 0,
      // total: 0,

      getProducts: async () => {
        const products = await getProducts();
        this.setState({ products });
      },
      getCategories: async () => {
        const categories = await getCategories();
        this.setState({ categories });
      },
      getBestsellers: async () => {
        const bestsellers = await getBestsellers();
        this.setState({ bestsellers });
      }
    };
  }

  setLoginState = state => {
    this.setState({ isLogin: state });
  };

  addToCart = product => {
    this.setState({
      cart: this.state.cart.concat(product)
    });
    console.log("cart", this.state.cart);
  };
  getTotal = cart => {
    let _total = 0;
    cart.map(item => {
      if (item.size) {
        _total += item.size.price * item.quantity;
      } else {
        _total += item.price * item.quantity;
      }
    });
    return _total;
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };
  removeItem = _id => {
    let tempCart = this.state.cart.filter(item => item._id !== _id);
    this.setState({ cart: tempCart });
    console.log("hello");
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          getTotal: this.getTotal,
          clearCart: this.clearCart,
          removeItem: this.removeItem,
          setLoginState: this.setLoginState
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
