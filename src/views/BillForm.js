import React, { Component } from "react";

class BillForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header text-capitalize">
            Bill:
            <strong>1/1/2019</strong>
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
                  97 Man Thiên, phường Hiệp Phú, quận 9, Thành phố Hồ Chí Minh
                </div>
                <div>Email: info@webz.com.pl</div>
                <div>Phone: +48 444 666 3333</div>
              </div>
              <div className="col-sm-6">
                <h6 className="mb-3">To:</h6>

                <div>
                  <strong>Trang Pham</strong>
                </div>
                <div>Address: </div>
                <div>20 Lã Xuân Oai, Quận 9</div>
                <div>Email: thuytrang@</div>
                <div>Phone:113</div>
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
                  <tr>
                    <td className="center">1</td>
                    <td className="left strong">PIZZA RAU CỦ</td>
                    <td className="left">
                      {" "}
                      Sốt Singapore cay, Phô mai Mozzarella, Tôm, Thịt cua, Hành
                      tây
                    </td>
                    <td className="right">59.0000</td>
                    <td className="center">1</td>
                    <td className="right">59.000</td>
                  </tr>
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
                        <strong>Tổng tiền</strong>
                      </td>
                      <td className="right">59.000</td>
                    </tr>

                    <tr>
                      <td className="left">
                        <strong>Phí vận chuyển</strong>
                      </td>
                      <td className="right">30.000 vnđ</td>
                    </tr>
                    <tr>
                      <td className="left">
                        <strong>Hóa đơn</strong>
                      </td>
                      <td className="right">
                        <strong>89.000vnđ</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <strong>
            {" "}
            Hóa đơn đã được tạo thành công. Nhân viên của hàng sẽ liên hệ cho
            bạn trong vòng 24 giờ.
          </strong>
        </div>
      </div>
    );
  }
}

export default BillForm;
