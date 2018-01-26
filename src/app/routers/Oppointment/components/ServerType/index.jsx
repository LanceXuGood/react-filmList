import React, { Component } from 'react';
import Title from '../../../../components/Title';
import { List  } from 'antd-mobile';
import { Link } from 'react-router-dom';
const Item = List.Item;

import './index.scss';

class ServerSite extends Component {
  constructor(props) {
    super(props);
  }
  state = {

  }

  render() {

    return <div className="server_type">
      <Title contentLeftText="服务项目"></Title>
      <section className="server_type-content">
        <div className="time_list">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </section>
      <List className="project_list">
        <Item className="project_list-item">
          <div className="img"></div>
          <div className="project_info">
            <h3 className="project_info-title">肩颈局部调养</h3>
            <div className="project_info-time">30分钟</div>
            <p>¥ 75</p>
          </div>
          <Link to="/" className="project_info-link">查看详细</Link>
          <span>1</span>
        </Item>
        <Item className="project_list-item">
          <div className="img"></div>
          <div className="project_info">
            <h3 className="project_info-title">肩颈局部调养</h3>
            <div className="project_info-time">30分钟</div>
            <p>¥ 75</p>
          </div>
          <Link to="/" className="project_info-link">查看详细</Link>
          <span>1</span>
        </Item>
        <Item className="project_list-item">
          <div className="img"></div>
          <div className="project_info">
            <h3 className="project_info-title">肩颈局部调养</h3>
            <div className="project_info-time">30分钟</div>
            <p>¥ 75</p>
          </div>
          <Link to="/" className="project_info-link">查看详细</Link>
          <span>1</span>
        </Item>
      </List>
    </div>;
  }
}

export default ServerSite;
