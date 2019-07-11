import React, { Component } from "react";
import { AppContext } from "../services/AppContext";
import { apiLinks } from "../services/APILinks";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import "./BillForm.scss";
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
    const { cart, clearCart, openModal } = this.context;
    // console.log("cart", cart);
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

    // console.log("id", this.state.user._id);

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
          openModal();
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
            <React.Fragment>
              <Modal />
              <div className="bill container">
                <div className="card" style={{ marginBottom: "15px" }}>
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
                          97 Man Thien, Hiep Phu Wards, District 9, HCM City
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
                          {/* {this.state.deliveryinfor.district}-
                          {this.state.deliveryinfor.streetname}-
                          {this.state.deliveryinfor.housenumber} */}
                          {this.state.deliveryinfor.address}
                        </div>
                        <div>Email: {this.state.user.email}</div>
                        <div>Phone:{this.state.user.phone}</div>
                      </div>
                    </div>
                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className="center">Number</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th className="right">Price</th>
                            <th className="center">Count</th>
                            <th className="right">Total</th>
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
                              <td className="right">$ {total}</td>
                            </tr>

                            <tr>
                              <td className="left">
                                <strong>Shipping fee</strong>
                              </td>
                              <td className="right">$ 1 </td>
                            </tr>
                            <tr>
                              <td className="left">
                                <strong>Bill</strong>
                              </td>
                              <td className="right">
                                <strong>$ {total + 1}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-danger text-uppercase mb-3 px-5"
                    type="submit"
                    onClick={this.createOrder}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

BillForm.contextType = AppContext;
export default BillForm;
