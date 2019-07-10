import React, { Component } from "react";
import about1 from "../../image/about1.png";
import about2 from "../../image/about2.jpg";
import "./About.scss";
class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="aboutpage col-12">
          <div className="about-item">
            <div className="about-img col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
              <img src={about1} />
            </div>
            <div className="about-infor col-xl-8 col-lg-8 col-md-12 col-sm-12 ">
              <p>
                <strong>Why T & T Pizza is a Delivery Expert</strong>
              </p>
              <p>
                With more than 10.000 stores on 74 countries. We bring the
                satisfaction to more than 1 million customers every day, more
                then 400 million pizza sold per year. During the last 50 years,
                our promise "30 minute delivery" has become our standard.
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-infor col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
              <p>
                T & T Pizza guarantees that your order will arrive within 30
                minutes or you will get a free Pizza Voucher for your next
                purchase! We guarantee: Voucher for 1 medium sized pizza (9 ")
                for the next order - T & T Pizza does not penalise late delivery
                staff. - T & T Pizza reserves the right to withdraw delivery
                without prior notice. - Commitments for services may be
                temporarily withdrawn because of poor operating conditions for
                delivery and will be notified at the time of receipt of the
                application. - May not applied in abnormal or unsafe weather
                conditions such as heavy rain, flood, storm, tide ... - Not
                applied on public holidays. - Not applied for orders over 5
                pizzas.{" "}
              </p>
            </div>
            <div className="about-img col-xl-8 col-lg-8 col-md-12 col-sm-12 ">
              <img src={about2} />
            </div>
          </div>
          <div className="about-item">
            <div className="about-img col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
              <img src={about1} />
            </div>
            <div className="about-infor col-xl-8 col-lg-8 col-md-12 col-sm-12 ">
              <p>
                T & T Pizza guarantees you will be satisfied! Your pizza will
                alway hot and crispy when delivered to your doorstep, otherwise
                we will give you another! Condition: The above condition applies
                when there is insufficient / insufficient coating or no additive
                as ordered. T & T Pizza reserves the right to withdraw the
                service without prior notice. This will not apply to your order.
                Weather conditions such as heavy rain, floods, storms, tides ...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
