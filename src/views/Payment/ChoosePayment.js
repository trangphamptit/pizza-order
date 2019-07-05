import React, { Component } from "react";
import { Link } from "react-router-dom";
import visacard from "../../image/visacard.png";
import payondelivery from "../../image/payondelivery.jpg";
class ChoosePayment extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="row">
          <Link to="/billform">
            <img
              className="col-6"
              style={{ width: "100%", height: "auto" }}
              src={payondelivery}
              alt="pay on delivery"
            />
          </Link>

          <Link to="/visaform">
            <img
              className="col-6"
              style={{ width: "100%", height: "auto" }}
              src={visacard}
              alt="visacard"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default ChoosePayment;
