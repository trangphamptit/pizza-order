import React, { Component } from "react";
import "./Details.scss";
import product1 from "../../image/product1.png";
import AppContext from "../../services/AppContext";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          console.log(value);
          const {
            _id,
            name,
            img,
            price,
            variantProducts,
            description
          } = value.products.find(item => item._id === this.state.id);

          if (name) {
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
                    <h4>Select size</h4>
                    <form className="select selectSize">
                      {variantProducts.map((variant, index) => {
                        return (
                          <div className="size">
                            {" "}
                            <input type="radio" name="size" value="medium" />
                            <p>
                              {variant.value}-{variant.price}
                            </p>
                          </div>
                        );
                      })}
                    </form>

                    <h4>Select crust type</h4>
                    <form className="select selectCrust">
                      <input type="radio" name="crust" value="thin" />{" "}
                      <p>thin</p>
                      <br />
                      <input type="radio" name="crust" value="normal" />{" "}
                      <p>normal</p>
                      <br />
                      <input type="radio" name="crust" value="thick" />{" "}
                      <p>thick</p>
                      <br />
                    </form>

                    <h4>Adding topping</h4>
                    <form className="select selectTopping">
                      <input type="radio" name="addtopping" value="cheese" />{" "}
                      <p>cheese</p>
                      <br />
                      <input
                        type="radio"
                        name="addtopping"
                        value="doublecheese"
                      />{" "}
                      <p>double cheese</p>
                      <br />
                    </form>
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

export default Details;
