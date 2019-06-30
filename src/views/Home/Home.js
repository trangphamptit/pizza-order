import React, { Component } from "react";

import Slider from "../../components/Slider/Slider";

import { Link } from "react-router-dom";
import ListCategory from "../ListCategory/ListCategory";
import BestSeller from "../BestSeller/BestSeller";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";
class Home extends Component {
  componentDidMount() {
    this.context.getProducts();
  }

  render() {
    const { products } = this.context;

    return (
      <div className="home">
        <Slider />
        <h1>
          <Link to="/bestseller">bestseller >></Link>
        </h1>
        <div className="row">
          <AppContext.Consumer>
            {value => {
              let homeProducts = value.products.slice(0, 4);
              return homeProducts.map(product => (
                <Product key={product._id} product={product} />
              ));
            }}
          </AppContext.Consumer>
        </div>

        <h1>
          <Link to="/listcategory">category >></Link>
        </h1>
        <ListCategory />
        <h1>
          <Link to="/products">products >></Link>
        </h1>
        <div className="row">
          <AppContext.Consumer>
            {value => {
              let homeProducts = value.products.slice(0, 4);
              console.log("home products", homeProducts);
              return homeProducts.map(product => (
                <Product key={product._id} product={product} />
              ));
            }}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}
Home.contextType = AppContext;
export default Home;
