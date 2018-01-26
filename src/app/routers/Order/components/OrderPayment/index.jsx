import React, { Component } from 'react';
import './index.scss';
import Title from '../../../../components/Title';
import { Button } from 'antd-mobile';

class OrderPayCoupon extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    list: []
  }

  render() {
    return <div className="overflow_container">
      <div className="order_payment">
        <div className="order_payment-money">需要支付<span>￥60</span></div>
        <Title contentLeftText="选择支付方式"></Title>
        <div className="order_payment-type">
          <div className="left">
            <div></div>
            <div>
              <p>微信</p>
              <p>推荐安装微信5.0及以上版本使用</p>
            </div>
          </div>
          <div className="right">
            <span></span>
          </div>
        </div>
        <div className="order_payment-type">
          <div className="left">
            <div></div>
            <div>
              <p>支付宝</p>
              <p>推荐安装微信5.0及以上版本使用</p>
            </div>
          </div>
          <div className="right">
            <span></span>
          </div>
        </div>
        <div className="to_pay-wechat button_gr-lg">
          <Button type="primary" onClick={() => {}} >微信支付&nbsp;<span>60元</span></Button>
        </div>
      </div>
    </div>;
  }
}
export default OrderPayCoupon;
