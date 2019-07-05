import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ContainerPage.scss";
class ContainerPage extends Component {
  render() {
    return (
      <div className="mainpage container-fluid">
        <div className="row">
          <Header />
          <section className="col-12">{this.props.children}</section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ContainerPage;
