import React, { Component } from "react";
import { Link } from "react-router-dom";

import BillForm from "../BillForm";
import { AppContext } from "../../services/AppContext";
export default class CartTotals extends Component {
  constructor(props) {
    super(props);
  }

  checkLogin = () => {
    console.log(this.props.history);
    let user = localStorage.getItem("user");
    if (user) {
      this.props.history.push("/delivery");
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    const { clearCart } = this.props.value;
    return (
      <React.Fragment>
        {/* <div className="col-12 ">
          <div className="row"> */}
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
          <Link to="/cart">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </Link>
          {/* </div> */}
          <h5>
            <span className="text-title">total:</span>
            <strong>{this.props.total} $</strong>
          </h5>

          <h5>
            <span className="text-title">shipping fee:</span>
            <strong>1$</strong>
          </h5>

          <h5>
            <span className="text-title">Bill:</span>
            <strong>{this.props.total + 1}$</strong>
          </h5>
          <button
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            // onClick={() => clearCart()}
            onClick={this.checkLogin}
          >
            SUBMIT
          </button>
        </div>
      </React.Fragment>
    );
  }
}
