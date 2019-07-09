import React, { Component } from "react";
import "./OrdersCustomer.scss";
import { AppContext } from "../../services/AppContext";
import Axios from "axios";
class OrdersCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppings: []
    };
  }
  componentDidMount() {
    setTimeout(async () => {
      let { user } = this.context;
      console.log("user", user);
      if (user) {
        await this.context.getOrdersCustomer(user._id);
      } else {
        console.log("err");
      }
      const { data } = await Axios.get(
        `https://pizza-products-api.glitch.me/toppings`
      );
      this.setState({ toppings: data });
    }, 1000);
  }
  render() {
    let { orders, products, user } = this.context;
    let { toppings } = this.state;
    console.log(products);
    if (user && products.length > 0) {
      return (
        <div className="container">
          <div className="card" style={{ marginBottom: "15px" }}>
            <div className="card-header text-capitalize">
              Order history
              <span className="float-right">
                {" "}
                <strong>Status:</strong>Shipping
              </span>
            </div>
            <div className="card-body">
              <div className="table-responsive-sm">
                {orders.map(order => (
                  <React.Fragment>
                    <p style={{ color: "#000" }}>
                      {new Date(order.date).toLocaleString()}
                    </p>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="center">number</th>
                          <th>product name</th>
                          <th className="right">price</th>
                          <th className="center">quantity</th>
                          <th className="right">total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.orderDetails.map((orderDetail, index) => {
                          let detail = products.find(
                            product => product._id === orderDetail.productID
                          );
                          let name = "";
                          if (!detail) {
                            detail = toppings.find(
                              topping => topping._id === orderDetail.productID
                            );
                          }
                          if (detail) {
                            console.log("detail", detail);
                            name = detail.name;
                          }
                          return (
                            <tr key={index}>
                              <td className="center">{index + 1}</td>
                              <td className="left strong">{name}</td>
                              {/* <td className="left">
                            {orderDetail.size && orderDetail.size.value}
                          </td> */}
                              <td className="right">{orderDetail.price}</td>
                              <td className="center">{orderDetail.quantity}</td>
                              <td className="right">{orderDetail.total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>You need to login to see order history</h2>;
    }
  }
}

OrdersCustomer.contextType = AppContext;
export default OrdersCustomer;
