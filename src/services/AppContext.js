import React, { Component } from "react";
import { getProducts } from "./products";
import { getCategories } from "./categories";
import { getBestsellers } from "./bestseller";
import { getProductscategory } from "./productscategory";
export const AppContext = React.createContext();
class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      bestsellers: [],
      productscategory: [],
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
      },
      getProductscategory: async () => {
        const productscategory = await getProductscategory();
        this.setState({ productscategory });
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
  increment = item => {
    let tempCart = [...this.state.cart];
    let index = tempCart.indexOf(item);
    tempCart[index].quantity += 1;

    this.setState({ cart: [...tempCart] });
  };
  decrement = item => {
    let tempCart = [...this.state.cart];
    let index = tempCart.indexOf(item);
    tempCart[index].quantity -= 1;
    this.setState({ cart: [...tempCart] });
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
          setLoginState: this.setLoginState,
          increment: this.increment,
          decrement: this.decrement
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
