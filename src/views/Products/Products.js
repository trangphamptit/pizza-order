import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { AppContext } from "../../services/AppContext";

class Products extends Component {
  componentDidMount() {
    this.context.getProducts();
  }

  render() {
    const { products } = this.context;
    return (
      <div className="products">
        <div className="row">
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

Products.contextType = AppContext;

export default Products;
