import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import "./Products.scss";
import Grid from "@material-ui/core/Grid";
class Products extends Component {
  componentDidMount() {
    this.context.getProducts();
  }

  render() {
    const { products } = this.context;
    // console.log(products);
    return (
      <Grid container className="products">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </Grid>
    );
  }
}

Products.contextType = AppContext;

export default Products;
