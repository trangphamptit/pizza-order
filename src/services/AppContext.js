import React, { Component } from "react";

import { getProducts } from "./products";

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    products: [],
    categories: [],
    getProducts: async () => {
      const products = await getProducts();
      this.setState({ products });
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
