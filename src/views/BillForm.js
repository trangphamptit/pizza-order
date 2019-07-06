import React, { Component } from "react";
import { AppContext } from "../services/AppContext";
import { apiLinks } from "../services/APILinks";
import axios from "axios";
class BillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      deliveryinfor: {}
    };
  }
  getFromLocal = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const deliveryinfor = JSON.parse(localStorage.getItem("deliveryinfor"));
    this.setState({ user: user, deliveryinfor: deliveryinfor });
  };
  componentDidMount() {
    const getLocal = this.getFromLocal();
  }
  createOrder = () => {
    const { cart, clearCart } = this.context;
    console.log("cart", cart);
    let orders = cart.map(item => {
      let orderDetail = {
        productID: item._id,
        quantity: item.quantity,
        type: item.type
      };
      if (item.size) {
        orderDetail.variants = [{ key: item.size.key, value: item.size.value }];
        orderDetail.price = item.size.price;
      } else {
        orderDetail.price = item.price;
      }
      return orderDetail;
    });

    // console.log(orders);

    console.log("id", this.state.user._id);

    let ordersLink = apiLinks.orders;

    axios
      .post(ordersLink, {
        customerID: this.state.user._id,
        orderDetails: orders
      })
      .then(function(response) {
        console.log(response.data.message);
        if (response.data && response.data.message) {
          clearCart();
          alert("Your order is successful. Thank you!");
        } else {
          alert("Can't create order. Please try again");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { cart } = value;
          let total;
          if (cart.length > 0) {
            total = value.getTotal(cart);
          }

          // console.log("values", value.getTotal);
          return (
            <div className="container">
              <div className="card">
                <div className="card-header text-capitalize">
                  Bill
                  <span className="float-right">
                    {" "}
                    <strong>Status:</strong>Shipping
                  </span>
                </div>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-sm-6">
                      <h6 className="mb-3">From:</h6>
                      <div>
                        <strong>Pizza</strong>
                      </div>
                      <div>Address: </div>
                      <div>
                        97 Man Thiên, phường Hiệp Phú, quận 9, Thành phố Hồ Chí
                        Minh
                      </div>
                      <div>Email: info@webz.com.pl</div>
                      <div>Phone: +48 444 666 3333</div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="mb-3">To:</h6>

                      <div>
                        <strong>{this.state.user.name}</strong>
                      </div>
                      <div>Address: </div>
                      <div>
                        {this.state.deliveryinfor.district}-
                        {this.state.deliveryinfor.streetname}-
                        {this.state.deliveryinfor.housenumber}
                      </div>
                      <div>Email: {this.state.user.email}</div>
                      <div>Phone:{this.state.user.phone}</div>
                    </div>
                  </div>
                  <div className="table-responsive-sm">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="center">number</th>
                          <th>product name</th>
                          <th>description</th>
                          <th className="right">price</th>
                          <th className="center">count</th>
                          <th className="right">total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {value.cart.map((item, index) => (
                          <tr key={index}>
                            <td className="center">{index}</td>
                            <td className="left strong">{item.name}</td>
                            <td className="left">
                              {item.size && item.size.value}
                            </td>
                            <td className="right">
                              {item.size ? item.size.price : item.price}
                            </td>
                            <td className="center">{item.quantity}</td>
                            <td className="right">
                              {item.size
                                ? item.size.price * item.quantity
                                : item.price * item.quantity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-sm-5" />
                    <div className="col-lg-4 col-sm-5 ml-auto">
                      <table className="table table-clear">
                        <tbody>
                          <tr>
                            <td className="left">
                              <strong>Total</strong>
                            </td>
                            <td className="right">{total}</td>
                          </tr>

                          <tr>
                            <td className="left">
                              <strong>Shipping fee</strong>
                            </td>
                            <td className="right">30.000vnđ</td>
                          </tr>
                          <tr>
                            <td className="left">
                              <strong>Bill</strong>
                            </td>
                            <td className="right">
                              <strong>{total + 30000}vnđ</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" onClick={this.createOrder}>
                  Submit
                </button>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

BillForm.contextType = AppContext;
export default BillForm;
