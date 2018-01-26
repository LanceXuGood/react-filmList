import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Title from '../../../../components/Title';
import { Icon } from 'antd-mobile';
import './index.scss';
import PayBottom from '../PayBottom';
@withRouter
class OrderPay extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return <div className="overflow_container">
      <div className="order_pay">
        <div>
          <div className="order_pay-list">
            <Title contentLeftText="服务项目" contentRightText="单价费用" />
            <div className="order_list-item">
              <div className="left">服务项目</div>
              <div className="right number_price">
                <span>x1</span>
                <span>￥60</span>
              </div>
            </div>
          </div>
          <div className="order_pay-list">
            <Title contentLeftText="服务项目" />
            <div className="order_list-item">
              <div className="left">抵用券 </div>
              <div className="right preferential">
                抵用券名称
                <Link to="/order/order-pay-coupon">
                  <Icon type="right"></Icon>
                </Link>
              </div>
            </div>
          </div>
          <div className="order_pay-list">
            <Title contentLeftText="汇总" />
            <div className="order_list-item">
              <div className="left">服务金额</div>
              <div className="right preferential">
                -￥60
              </div>
            </div>
            <div className="order_list-item border-bottom-none">
              <div className="left">抵用券优惠</div>
              <div className="right preferential">
                -￥60
              </div>
            </div>
            <div className="order_list-item ">
              <div className="left">服务金额</div>
              <div className="right preferential">
                -￥60
              </div>
            </div>
          </div>
          <div className="order_tip">
            请在2017/09/20 20:00 前完成支付否则订单自动取消
          </div>
        </div>
        <PayBottom></PayBottom>
      </div>
    </div>;
  }
}

export default OrderPay;
