import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <ul className="footer-left">
            <li>
              <Link to="/">policy</Link>
            </li>
            <li>
              <Link to="/">policy</Link>
            </li>
            <li className="last">
              <Link to="/">policy</Link>
            </li>
          </ul>
          <div className="footer-right">
            <h1>HOTLINE</h1>
            <p>09090909</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
