import React, { Component } from "react";
import Product from "../../components/Product/Product";
import AppContext from "../../services/AppContext";
import { apiLinks } from "../../services/APILinks";
import Axios from "axios";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.loadProducts = products => {
      this.setState({
        products
      });
    };
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    // Axios.get(apiLinks.products, { pageSize: numberOfItem }).then(res => {
    Axios.get(apiLinks.products).then(res => {
      this.setState({ products: res.data });
      // console.log("test1", this.state.products);
      console.log("test1", res.data);
    });
  }

  render() {
    return (
      <div className="products">
        <div className="row">
          <AppContext.Consumer>
            {({ loadProducts }) => {
              loadProducts(this.state.products);
              this.state.products.map(product => (
                <Product key={product._id} product={product} />
              ));
            }}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
