import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import visacard from "../../image/visacard.png";
class Footer extends Component {
  render() {
    return (
      // <div className="container-fluid">
      <footer className=" footer col-12">
        <div className="footer-container row ">
          <ul className="footer-left col-6">
            <li>
              <span>
                <i class="fas fa-at" /> Pizza T&T
              </span>
            </li>
            <li>
              <Link to="/">policy</Link>
            </li>
            <li className="last">
              <Link to="/">security</Link>
            </li>
          </ul>
          <div className="footer-right col-6">
            <div className="footerphone">
              <strong>HOTLINE</strong>
              <span style={{ color: "red", fontWeight: "bold" }}>
                {" "}
                09090909
              </span>
            </div>
            <li>
              <i class="fab fa-facebook-f" />
            </li>
            <li>
              <i class="fab fa-youtube" />
            </li>
          </div>
        </div>
      </footer>
      // </div>
    );
  }
}

export default Footer;
