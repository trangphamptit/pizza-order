import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ContainerPage.scss";
class ContainerPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Header />
        <section className="section">{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}

export default ContainerPage;
