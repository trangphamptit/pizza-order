import React, { Component } from "react";

// import Slider from "../../components/Slider/Slider";

import { Link } from "react-router-dom";
import ListCategory from "../ListCategory/ListCategory";
import BestSellerProduct from "../BestSeller/BestSellerProduct";
import Product from "../../components/Product/Product";

import { AppContext } from "../../services/AppContext";
class Home extends Component {
  componentDidMount() {
    this.context.getProducts();
    this.context.getBestsellers();
  }

  render() {
    return (
      <div className="home col-12">
        {/* <Slider /> */}
        <div className="title-nav">
          <h1>bestseller</h1>

          <Link to="/bestseller">
            {" "}
            <button className="btn btn-outline-danger px-2 mx-15">
              view more >>{" "}
            </button>
          </Link>
        </div>

        <div className="bestseller row">
          <AppContext.Consumer>
            {value => {
              let homeBestsellers = value.bestsellers.slice(0, 4);
              return homeBestsellers.map(bestseller => (
                <BestSellerProduct
                  key={bestseller._id}
                  bestseller={bestseller}
                />
              ));
            }}
          </AppContext.Consumer>
          {/* <BestSeller /> */}
        </div>

        <div className="title-nav">
          <h1>categories</h1>

          <Link to="/listcategory">
            {" "}
            <button className="btn btn-outline-danger px-2 mx-15">
              view more >>{" "}
            </button>
          </Link>
        </div>
        <ListCategory />

        <div className="title-nav ">
          <h1>products</h1>

          <Link to="/products">
            {" "}
            <button className="btn btn-outline-danger px-2 mx-15">
              view more >>{" "}
            </button>
          </Link>
        </div>

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
      </div>
    );
  }
}
Home.contextType = AppContext;
export default Home;
