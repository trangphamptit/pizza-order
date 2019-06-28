import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends Component {
  constructor(props) {
    super(props);
  }

  // checkLogin = () => {
  //   console.log(this.props.history);
  //   if (!Object.keys(this.props.value.customer).length) {
  //     this.props.history.push("/login");
  //   } else {
  //     this.props.history.push("/billForm");
  //   }
  // };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right" />
            <Link to="/cart">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
              >
                Xóa giỏ hàng
              </button>
            </Link>
          </div>
          <h5>
            <span className="text-title">total:</span>
            <strong>59000 đ</strong>
          </h5>

          <h5>
            <span className="text-title">shipping:</span>
            <strong>30000đ</strong>
          </h5>

          <h5>
            <span className="text-title">Bill:</span>
            <strong>89000đ</strong>
          </h5>
          <button
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            // onClick={() => clearCart()}
            // onClick={this.checkLogin}
          >
            Thanh toán
          </button>
        </div>
      </React.Fragment>
    );
  }
}
