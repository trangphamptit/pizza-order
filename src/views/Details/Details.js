import React, { Component } from "react";
import "./Details.scss";
import product1 from "../../image/product1.png";
class Details extends Component {
  render() {
    return (
      <div className="detailpage">
        <div className="detail-left">
          <h1 className="name">PIZZA HẢI SẢN KIỂU SINGAPORE</h1>
          <p className="description">
            Sốt Singapore cay, Phô mai Mozzarella, Tôm, Thịt cua, Hành tây
          </p>
          <img src={product1} alt="" className="image" />
          <span className="price">199.000 ₫</span>
        </div>
        <div className="detail-right">
          <h4>Select size</h4>
          <form className="select selectSize">
            <input type="radio" name="size" value="medium" />
            <p>medium-9inch</p>
            <br />
            <input type="radio" name="size" value="big" /> <p>big-12inch</p>
            <br />
          </form>

          <h4>Select crust type</h4>
          <form className="select selectCrust">
            <input type="radio" name="crust" value="thin" /> <p>thin</p>
            <br />
            <input type="radio" name="crust" value="normal" /> <p>normal</p>
            <br />
            <input type="radio" name="crust" value="thick" /> <p>thick</p>
            <br />
          </form>

          <h4>Adding topping</h4>
          <form className="select selectTopping">
            <input type="radio" name="addtopping" value="cheese" />{" "}
            <p>cheese</p>
            <br />
            <input type="radio" name="addtopping" value="doublecheese" />{" "}
            <p>double cheese</p>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Details;
