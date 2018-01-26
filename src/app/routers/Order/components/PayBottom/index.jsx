import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';



class PayBottom extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return <div className="pay_bottom">
      <div>
        支付金额<span>￥0</span>
      </div>
      <div>
        <Link to="/order/order-payment">支付</Link>
      </div>

    </div>;
  }
}

export default PayBottom;
