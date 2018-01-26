import React, { Component } from 'react';
import './index.scss';

class OrderPayCoupon extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    list: []
  }

  render() {
    if (this.state.list.length > 0) {
      return <div className="no_coupon">
        您还没有优惠券哦！
      </div>;
    } else {
      return <div className="overflow_container">
        <div className="order_pay-coupon">
          <div className="order_pay-couponList">
            <div className="order_pay-couponListItem">
              <div><p style={{marginBottom:'0'}}>不使用抵用券</p></div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="order_pay-couponTip">
              有<span style={{ 'color': '#ff4e00' }}>6</span>个可使用的抵用券
            </div>
            <div className="order_pay-couponListItem">
              <div>
                <p>不使用抵用券</p>
                <p>2017/07/02到期</p>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="order_pay-couponListItem">
              <div>
                <p>不使用抵用券</p>
                <p>2017/07/02到期</p>
              </div>
              <div>
                <b>不可使用</b>
              </div>
            </div>
          </div>

        </div>
      </div>;
    }

  }
}
export default OrderPayCoupon;
