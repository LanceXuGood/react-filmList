import React, { Component } from 'react';
import './index.scss';
import { Button } from 'antd-mobile';
import Title from '../../../../components/Title';
import { withRouter } from 'react-router-dom';

@withRouter
class OrderPreview extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  onChange = (key) => {
    console.log(key);
  }
  render() {
    const { history } = this.props;
    return <div className="overflow_container">
      <div className="order_preview">
        <div className="order_preview-list">
          <Title contentLeftText="用户信息" />
          <div className="order_list-item">
            <span className="left">用户名</span>
            <span className="right">徐延</span>
          </div>
          <div className="order_list-item">
            <span className="left">联系电话</span>
            <span className="right">13775009842</span>
          </div>
        </div>
        <div className="order_preview-list">
          <Title contentLeftText="预订信息" />
          <div className="order_list-item">
            <span className="left">订单编号</span>
            <span className="right">23489213215</span>
          </div>
          <div className="order_list-item">
            <div className="left">预约门店</div>
            <div className="right address">
              <span>贵柔国创中心屋顶花园店</span>
              <span>021-21543265</span>
              <span>丹桂路8899号B栋1层</span>
            </div>
          </div>
          <div className="order_list-item">
            <div className="left">预约时间</div>
            <div className="right">
              2017/09/20 20:00
            </div>
          </div>
          <div className="order_list-item">
            <div className="left">预约医师</div>
            <div className="right">
              张全蛋（医师）
            </div>
          </div>
          <div className="order_list-item">
            <div className="left">服务内容</div>
            <div className="right">
              门诊
            </div>
          </div>
          <div className="order_list-item remark-item">
            <div className="left">备注</div>
            <div className="right">
              门诊
            </div>
          </div>
        </div>
        <div className="order_preview-list">
          <Title contentLeftText="服务项目" contentRightText="单价费用" />
          <div className="order_list-item">
            <div className="left">预约医师</div>
            <div className="right number_price">
              <span>x1</span>
              <span>￥60</span>
            </div>
          </div>
        </div>
        <div className="order_tip">
          请在2017/09/20 20:00 前完成支付否则订单自动取消
        </div>
        <div className="to_pay-warpper button_gr-lg">
          <Button type="primary" onClick={() => { history.push('/order/order-pay'); }} >前往支付</Button>
        </div>
      </div>
    </div>;
  }
}

export default OrderPreview;
