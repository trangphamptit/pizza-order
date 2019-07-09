import React, { Component } from "react";
import "./Modal.scss";
import { AppContext } from "../../services/AppContext";
import { Link } from "react-router-dom";
class Modal extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { modalOpen, closeModal } = value;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className=" modalOpen container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5>your order is successful</h5>
                    {/* <img src={img} className="img-fluid" alt="product" /> */}
                    {/* <h5>{title}</h5> */}
                    {/* <h5 className="text-muted">giá: $ {price}</h5> */}
                    <Link to="/">
                      <button onClick={() => closeModal()}>back to home</button>
                    </Link>
                    <Link to="/orders">
                      <button onClick={() => closeModal()}>
                        go to orders history
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </AppContext.Consumer>
    );
  }
}

export default Modal;
