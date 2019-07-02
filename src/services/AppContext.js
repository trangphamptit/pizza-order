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
      cartSubTotal: 0,
      cartTotal: 0,
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
    this.setState({
      cart: this.state.cart.concat(product)
    });
    console.log("cart", this.state.cart);
  };

  // addTotals = () => {
  //   let subTotal = 0;
  //   this.state.cart.map(item => (subTotal += item.total));

  //   const total = subTotal + 30;
  //   this.setState(() => {
  //     return {
  //       cartSubTotal: subTotal,
  //       cartTotal: total
  //     };
  //   });
  // };
  // increment = _id => {
  //   let tempCart = [...this.state.cart];
  //   const selectedProduct = tempCart.find(item => item._id === _id);
  //   const index = tempCart.indexOf(selectedProduct);
  //   const product = tempCart[index];
  //   console.log("hi", product);
  //   let count = 0;
  //   let total = 0;
  // product.count = product.length + 1;
  // product.total = product.count * product.price;
  // this.setState(
  //   () => {
  //     return {
  //       count: product.length + 1,
  //       total: product.count * product.price
  //     };
  //   },
  //   () => {
  //     this.addTotals();
  //   }
  // );
  // };

  // decrement = _id => {
  //   let tempCart = [...this.state.cart];
  //   const selectedProduct = tempCart.find(item => item.id === id);
  //   const index = tempCart.indexOf(selectedProduct);
  //   const product = tempCart[index];
  //   product.count = product.count - 1;
  //   if (product.count === 0) {
  //     this.removeItem(id);
  //   } else {
  //     product.total = product.count * product.price;
  //     this.setState(
  //       () => {
  //         return { cart: [...tempCart] };
  //       },
  //       () => {
  //         this.addTotals();
  //       }
  //     );
  //   }
  // };

  // removeItem = _id => {
  //   let tempProducts = [...this.state.products];
  //   let tempCart = [...this.state.cart];
  //   tempCart = tempCart.filter(item => item.id !== id);
  //   const index = tempProducts.indexOf(this.getItem(id));
  //   let removedProduct = tempProducts[index];
  //   removedProduct.inCart = false;
  //   removedProduct.count = 0;
  //   removedProduct.total = 0;
  //   this.setState(
  //     () => {
  //       return {
  //         cart: [...tempCart],
  //         products: [...tempProducts]
  //       };
  //     },
  //     () => {
  //       this.addTotals();
  //     }
  //   );
  // };

  // clearCart = () => {
  //   console.log("clear");
  //   this.setState(
  //     () => {
  //       console.log("clear");
  //       return { cart: [] };
  //     },
  //     () => {
  //       this.setProducts();
  //       this.addTotals();
  //     }
  //   );
  // };
  // openModal=(id)=> {
  //   const product = this.getItem(id);
  //   this.setState(() => {
  //     return {modalProduct: product, modalOpen: true}
  //   })
  // }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
