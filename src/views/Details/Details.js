import React, { Component } from "react";
import "./Details.scss";
import product1 from "../../image/product1.png";
import Axios from "axios";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import { AppContext } from "../../services/AppContext";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      details: {},
      toppings: []
    };
  }
  async componentDidMount() {
    try {
      const { data } = await Axios.get(
        `http://pizza-products.herokuapp.com/pizzas/${this.state.id}`
      );
      this.setState({ details: data });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(
        `http://pizza-products.herokuapp.com/toppings`
      );
      this.setState({ toppings: data });
    } catch (err) {
      console.log(err);
    }
  }

  handleSizeChange = event => {
    const value = event.target.value;
    const sizeObj = this.state.details.variantProducts.find(
      item => item.value === value
    );
    this.props.setFieldValue("size", sizeObj);
  };

  handleSelectTopping = event => {
    const { value, checked } = event.target;
    const topping = this.state.toppings.find(topping => topping._id === value);
    let toppings = this.props.values.toppings;
    if (checked) {
      toppings.push(topping);
    } else {
      let index = toppings.indexOf(topping);
      toppings.splice(index, 1);
    }
    console.log(this.props.values);
  };

  render() {
    const {
      _id,
      description,
      discountPrice,
      name,
      price,
      variantProducts
    } = this.state.details;
    if (_id) {
      return (
        <div className="detailpage container-fluid">
          <div className="row">
            <div className="detail-left col-12 col-sm-12 col-md-6 col-lg-6">
              <h1 className="name">{name}</h1>
              <p className="description">{description}</p>
              <img src={product1} alt="" className="image" />
            </div>

            <div className="detail-right col-12 col-sm-12 col-md-6 col-lg-6">
              <span className="price">{price} ₫</span>

              <Form className="select" onSubmit={this.props.handleSubmit}>
                <h4>Select size</h4>
                <div className="selectSize">
                  {/* select size */}
                  {variantProducts.map((variant, index) => {
                    return (
                      <div className="size" key={index}>
                        {" "}
                        <input
                          type="radio"
                          name="size"
                          onChange={this.handleSizeChange}
                          value={variant.value}
                          id={variant.value}
                        />
                        <label htmlFor={variant.value}>
                          {variant.value}-{variant.price}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="error">{this.props.errors.size}</div>
                {/* select crust */}
                <h4>select crust</h4>

                <div className="selectCrust">
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="thin"
                      id="thin"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="thin">thin</label>
                  </div>
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="normal"
                      id="normal"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="normal">normal</label>
                  </div>
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="thick"
                      id="thick"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="thick">thick</label>
                  </div>
                </div>
                <div className="error">{this.props.errors.crust}</div>
                {/* add topping */}
                <h4>add topping</h4>
                <div className="addtopping">
                  {this.state.toppings.map((topping, index) => {
                    return (
                      <div className="topping" key={index}>
                        <input
                          type="checkbox"
                          name={`toppings${index}`}
                          value={topping._id}
                          onChange={this.handleSelectTopping}
                        />{" "}
                        <label htmlFor={topping._id}>{topping.name}</label>
                      </div>
                    );
                  })}
                </div>
                <h4>quantity</h4>
                <div className="quantity">
                  <div className="topping">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      name="quantity"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="quantity">quantity</label>
                  </div>
                </div>
                <AppContext.Consumer>
                  {value => (
                    <button
                      type="submit"
                      className="addtocart"
                      onClick={() => {
                        let orderDetails = [];

                        let {
                          crust,
                          size,
                          toppings,
                          quantity
                        } = this.props.values;
                        toppings.forEach(
                          topping => (topping.quantity = quantity)
                        );
                        let toppingIDs = toppings.map(topping => topping._id);
                        let productID = this.state.details._id;
                        let note = { [productID]: toppingIDs };
                        console.log("note", note);
                        orderDetails.push({
                          ...this.state.details,
                          crust,
                          size,
                          quantity
                        });
                        toppings.forEach(topping => {
                          orderDetails.push(topping);
                        });
                        value.addToCart(orderDetails);
                      }}
                    >
                      add to cart
                    </button>
                  )}
                </AppContext.Consumer>
              </Form>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Không tìm thấy sản phẩm</h1>;
    }
  }
}

// const DetailsValidation = yup.object().shape({
//   size: yup.string().required(),
//   crust: yup.string().required()
// });

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      size: "",
      crust: "",
      toppings: [],
      quantity: 0
    };
  },

  validationSchema: yup.object().shape({
    size: yup.string().required(),
    crust: yup.string().required(),
    quantity: yup.number().required()
  }),

  handleSubmit: (values, { props, state }) => {
    console.log("values", values);
  }
})(Details);
export default FormikForm;
