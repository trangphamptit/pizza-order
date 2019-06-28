import React, { Component } from "react";
import Axios from "axios";
import { apiLinks } from "./APILinks";
const AppContext = React.createContext({
  products: [],
  categories: [],
  loadProducts: () => {}
});
// class AppProvider extends Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//       <AppContext.Provider
//         value={{
//           ...this.state
//         }}
//       >
//         {this.props.children}
//       </AppContext.Provider>
//     );
//   }
// }
// const AppConsumer = AppContext.Consumer;
export default AppContext;
