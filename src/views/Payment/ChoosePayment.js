import React, { Component } from "react";
import { Link } from "react-router-dom";
class ChoosePayment extends Component {
  render() {
    return (
      <div>
        <Link to="/billform">card on delivery</Link>
        <br />
        <Link to="/visaform">visa card</Link>
      </div>
    );
  }
}

export default ChoosePayment;
