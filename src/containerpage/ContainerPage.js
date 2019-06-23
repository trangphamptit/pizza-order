import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class ContainerPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Header />
        <section>{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}

export default ContainerPage;
