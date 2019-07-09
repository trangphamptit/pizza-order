import React, { Component } from "react";
import "./OrdersCustomer.scss";
import { AppContext } from "../../services/AppContext";
class OrdersCustomer extends Component {
  //   constructor() {
  //     super(props);
  //   }
  componentDidMount() {}
  componentDidUpdate() {
    let { user } = this.context;
    console.log(user);
    if (user) {
      this.context.getOrdersCustomer(user._id).then();
    } else {
      console.log("err");
    }
  }
  render() {
    return <div>hihi</div>;
  }
}

OrdersCustomer.contextType = AppContext;
export default OrdersCustomer;
