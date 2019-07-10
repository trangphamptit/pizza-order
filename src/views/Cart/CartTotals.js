import React, { Component } from "react";
import { Link } from "react-router-dom";
import { numberFormat } from "../../components/CurrencyFormat";
export default class CartTotals extends Component {
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
        <div className="row mt-5 text-capitalize">
          <ul
            className="CartTotals col-10 m-auto "
            style={{
              textAlign: "center"
            }}
          >
            <li>
              <span>total:</span>
              <strong>{numberFormat(this.props.total)} </strong>
            </li>

            <li>
              <span>shipping fee:</span>
              <strong>{numberFormat(1)}</strong>
            </li>

            <li className=" text-capitalize">
              <span>BILL:</span>
              <strong>{numberFormat(this.props.total + 1)}</strong>
            </li>
          </ul>
        </div>
        <div className="row mt-5 text-capitalize d-flex justify-content-center ">
          <Link>
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5 "
              type="button"
              onClick={this.checkLogin}
              style={{ marginRight: "20px" }}
            >
              SUBMIT
            </button>
          </Link>
          <Link to="/cart">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-2 "
              type="button"
              onClick={() => clearCart()}
            >
              <i class="fas fa-trash-alt" />
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
