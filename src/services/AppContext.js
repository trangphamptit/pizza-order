import React, { Component } from "react";
import { getProducts } from "./products";
import { getCategories } from "./categories";
import { getBestsellers } from "./bestseller";
import { getProductscategory } from "./productscategory";
import { getOrdersCustomer } from "./getorderscustomer";
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
      user: null,
      modalOpen: false,
      orders: [],

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
      getProductscategory: async id => {
        const productscategory = await getProductscategory(id);
        this.setState({ productscategory });
      },
      getOrdersCustomer: async customerID => {
        const orders = await getOrdersCustomer(customerID);
        this.setState({ orders });
      }
    };
  }

  login = user => {
    this.setState({ user });
    localStorage.setItem("user", JSON.stringify(user));
  };

  logout = user => {
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addToCart = product => {
    this.setState({
      cart: this.state.cart.concat(product)
    });
    // console.log("cart", this.state.cart);
  };
  getTotal = cart => {
    let _total = 0;
    cart.map(item => {
      if (item.size) {
        _total += (item.size.price - item.discountAmount) * item.quantity;
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
    // console.log("hello");
  };
  componentDidMount = async () => {
    const user = await localStorage.getItem("user");
    this.setState({ user: JSON.parse(user) });
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
  openModal = () => {
    this.setState(() => {
      return { modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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
          login: this.login,
          logout: this.logout,
          increment: this.increment,
          decrement: this.decrement,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
