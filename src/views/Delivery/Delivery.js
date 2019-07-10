import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Delivery.scss";
import payondelivery from "../../image/payondelivery.jpg";
import visacard from "../../image/visacard.png";

class Delivery extends Component {
  render() {
    return (
      <Form
        className="deliveryform col-12 col-md-8 col-lg-8 col-sm-12"
        onSubmit={this.props.handleSubmit}
      >
        <h1 className="delivery-title">delivery </h1>
        <span>
          <strong>Address:</strong>
        </span>
        <input
          type="text"
          name="address"
          placeholder=" your address"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="address" />
        </div>

        <span>
          <strong>Note:</strong>
        </span>
        <input
          type="text"
          name="guide"
          placeholder=" note"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="guide" />
        </div>

        <span>
          <strong>Time for delivery:</strong>
        </span>
        <input
          type="time"
          name="time"
          placeholder=" delivery time"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="time" />
        </div>

        <span>
          <strong>Payment method:</strong>
        </span>

        <div className="choosepayment">
          <div className="paymenttype col-6">
            <input
              type="radio"
              name="payment"
              value="delivery"
              id="delivery"
              onChange={this.props.handleChange}
            />{" "}
            <label htmlFor="delivery">
              <img
                className=" payment-img"
                src={payondelivery}
                alt="payondelivery"
              />
            </label>
          </div>

          <div className="paymenttype col-6">
            <input
              type="radio"
              name="payment"
              value="oncard"
              id="oncard"
              onChange={this.props.handleChange}
            />{" "}
            <label htmlFor="oncard">
              <img className="payment-img" src={visacard} alt="visacard" />
            </label>
          </div>
          <div className="error">
            <ErrorMessage name="payment" />
          </div>
        </div>
        {/* <div className="delivery-footer "> */}
        <button
          className="btn btn-outline-danger  btn-large btn-block text-uppercase mb-15 "
          type="submit"
          onClick={this.props.handleSubmit}
        >
          {" "}
          Submit{" "}
        </button>
        <button
          className="btn mb-15 px-5 "
          type="submit"
          onClick={this.props.history.goBack}
        >
          <i className="fas fa-arrow-left " />
          Go back
        </button>
        {/* </div> */}
      </Form>
    );
  }
}

const DeliveryValidation = yup.object().shape({
  address: yup.string().required(),
  time: yup.string().required(),
  payment: yup.string().required()
});

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      address: "",
      guide: "",
      time: "",
      payment: ""
    };
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("Submitted delivery:", values);
    let deliveryinfor = values;
    localStorage.setItem("deliveryinfor", JSON.stringify(deliveryinfor));
    props.history.push("/billform");

    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: DeliveryValidation
})(Delivery);
export default FormikForm;
