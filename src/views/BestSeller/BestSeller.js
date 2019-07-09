import "./BestSeller.scss";
import React, { Component } from "react";
import BestSellerProduct from "./BestSellerProduct";
import pizza1 from "../../image/pizza1.jpg";
import { AppContext } from "../../services/AppContext";
class BestSeller extends Component {
  componentDidMount() {
    this.context.getBestsellers();
  }
  render() {
    const { bestsellers } = this.context;
    // console.log(this.context);
    return (
      <div className="bestseller">
        <div className="products-banner">
          <div className="row">
            <img className="banner-img col-12" alt="pizza" src={pizza1} />
          </div>
        </div>
        <div className="row">
          {bestsellers.map((bestseller, index) => (
            <BestSellerProduct key={index} bestseller={bestseller} />
          ))}
        </div>
      </div>
    );
  }
}
BestSeller.contextType = AppContext;
export default BestSeller;
