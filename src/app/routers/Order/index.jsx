import React, { Component } from 'react';
import './index.scss';
import {
  Route
} from 'react-router-dom';
import OrderPreview from './components/OrderPreview';
import OrderPay from './components/OrderPay';
import OrderPayment from './components/OrderPayment';
import OrderPayCoupon from './components/OrderPayCoupon';
import Oppointment from '../Oppointment';



class Order extends Component {
  state = {}
  render() {
    return <div className="order_page">
      <Route path='/order/order-preview' component={OrderPreview}></Route>
      <Route path='/order/order-pay' component={OrderPay}></Route>
      <Route path='/order/make-oppintments' component={Oppointment}></Route>
      <Route path='/order/order-pay-coupon' component={OrderPayCoupon}></Route>
      <Route path='/order/order-payment' component={OrderPayment}></Route>
    </div>;
  }
}


export default Order;


