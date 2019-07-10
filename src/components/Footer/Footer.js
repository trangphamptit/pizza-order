import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import visacard from "../../image/visacard.png";
class Footer extends Component {
  render() {
    return (
      // <div className="container-fluid">
      <footer className=" footer-container col-12">
        <div className="footer-left ">
          <label
            className="introduce"
            style={{ textAlign: "center", marginRight: "15px" }}
          >
            <i className="far fa-copyright" />
            <span>T & T Pizza</span>
          </label>
          <ul className="about-us">
            <Link to="/aboutus">
              <li>Terms of Use</li>
            </Link>
            <Link to="/aboutus">
              <li className="last">Policy</li>
            </Link>
          </ul>
        </div>

        <ul className="footer-right">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="last">
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </footer>
      // </div>
    );
  }
}

export default Footer;
