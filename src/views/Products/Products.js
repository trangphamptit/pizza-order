import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";
import Grid from "@material-ui/core/Grid";

import "./Products.scss";

class Products extends Component {
  componentDidMount() {
    this.context.getProducts();
  }

  render() {
    const { products } = this.context;
    return (
      <Grid container spacing={4} className="products">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </Grid>
    );
  }
}

Products.contextType = AppContext;

export default Products;
