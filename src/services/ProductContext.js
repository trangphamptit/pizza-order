// import React, { Component } from "react";
// import Axios from "axios";
// import { apiLinks } from "./APILinks";
// const ProductContext = React.createContext();
// class ProductProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       productsUrl: apiLinks.products
//     };
//   }

//   render() {
//     return (
//       <ProductContext.Provider value={{ ...this.state, getItem: this.getItem }}>
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }
// const ProductConsumer = ProductContext.Consumer;
// export { ProductProvider, ProductConsumer };
