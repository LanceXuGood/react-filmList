import React, { Component } from 'react';
import Title from '../../../../components/Title';
import { Icon, List } from 'antd-mobile';
import classNames from 'classnames/bind';
const Item = List.Item;
import './index.scss';

class ServerSite extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isShowServerSiteList: false,
    value: 0,
  }
  change = () => {
    this.setState({
      isShowServerSiteList: !this.state.isShowServerSiteList
    });
  }
  onChange = (value) => {

    this.setState({
      value,
    });
  };
  render() {
    const { isShowServerSiteList } = this.state;
    var serverSiteList = classNames({
      'server_site-list': isShowServerSiteList,
    });
    return <div className="server_site">
      <Title contentLeftText="服务站点" />
      <div className="server_site-content">
        <div className="list_choose-item which_choosed">
          <div>1</div>
          <div>
            <p>交通银行信用卡中心某某分中心</p>
            <p>021-21543265    13956632015</p>
            <p>丹桂路8899号B栋1层</p>
          </div>
          <div onClick={this.change}>
            {serverSiteList ? <Icon type="down" /> : <Icon type="up" />}
          </div>
        </div>
        <List className={serverSiteList}>
          <Item className="" >
            <div className="list_choose-item">
              <div>1</div>
              <div>
                <p>交通银行信用卡中心某某分中心</p>
                <p>021-21543265    13956632015</p>
                <p>丹桂路8899号B栋1层</p>
              </div>
              <div onClick={this.change}>
                2
              </div>
            </div>
          </Item>
        </List>
      </div>
    </div>;
  }
}

export default ServerSite;
