import React, { Component } from "react";
import { getProducts } from "./products";
import { getCategories } from "./categories";

export const AppContext = React.createContext();
class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      cart: [],
      count: 0,
      total: 0,

      getProducts: async () => {
        const products = await getProducts();
        this.setState({ products });
      },
      getCategories: async () => {
        const categories = await getCategories();
        this.setState({ categories });
      }
    };
  }

  addToCart = product => {
    console.log("product", product);
    this.setState({ cart: this.state.cart.concat(product) });
  };

  // openModal=(id)=> {
  //   const product = this.getItem(id);
  //   this.setState(() => {
  //     return {modalProduct: product, modalOpen: true}
  //   })
  // }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, addToCart: this.addToCart }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
