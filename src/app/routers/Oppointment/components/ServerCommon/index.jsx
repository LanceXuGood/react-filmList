import React, { Component } from 'react';
import './index.scss';
import {
  withRouter
} from 'react-router-dom';
import { List, TextareaItem, Button, Modal, Grid } from 'antd-mobile';
const Item = List.Item;
const alert = Modal.alert;

@withRouter
export default class ServerCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  onOpen = () => {
    this.setState({
      modal: true,
    });
  }
  onClose = () => {
    this.setState({
      modal: false,
    });
  }

  render() {
    const data = Array.from(new Array(4)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }));
    const data2 = Array.from(new Array(6)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }));
    return <div className="oppointment_content">
      <List className="oppointment_time">
        <Item arrow="horizontal" multipleLine onClick={this.onOpen} extra={'2017/09/20  20:00'}>
          <span className="time-title">预约时间</span>
        </Item>
      </List>
      <div className="remark">
        <h5>备注</h5>
        <TextareaItem
          labelNumber={5}
          rows={5}
        />
      </div>
      <div className="submit_opp button_gr-lg">
        <Button type="primary" onClick={() => alert('提示', '确认预约后，请尽快完成预约支付,未支付的预约只会保存10分钟', [
          { text: '取消', onPress: () => console.log('cancel') },
          { text: '确定', onPress: () => console.log(this.props.history.push('/order/order-preview'))},
        ])}>立即预约</Button>
      </div>
      < Modal
        popup
        visible={this.state.modal}
        onClose={this.onClose}
        animationType="slide-up"
      >
        <div className="oppointment_content_time_list">
          <div className="time_list-title">
            <div>预约时间</div>
            <span>关闭</span>
          </div>
          <div className="time_list-content">
            <div className="time_list-content-item">
              <h3>上午</h3>
              <Grid data={data} activeStyle={false} renderItem={() => (
                <div className="Grid_item">
                  <p>10:40</p>
                  <div>
                    <span>可预约</span>
                    <br />
                    <span></span>
                  </div>
                </div>
              )} />
            </div>
            <div className="time_list-content-item">
              <h3>上午</h3>
              <Grid data={data2} activeStyle={false} renderItem={() => (
                <div className="Grid_item">
                  <p>10:40</p>
                  <div>
                    <span>可预约</span>
                    <br />
                    <span>(0/9)</span>
                  </div>
                </div>
              )} />
            </div>
          </div>
        </div>
      </Modal>
    </div >;

  }
}
