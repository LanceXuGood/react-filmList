
import React, { Component } from 'react';
import './index.scss';
import { InputItem, Button } from 'antd-mobile';
import { Link, Route } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login_com">
        <h3 className="login_com-title">线上健康平台</h3>
        <section className="login_com-client">
          <p></p>
          <div>用户端</div>
          <p></p>
        </section>
        <section className="lofgin_com-form">
          <div>
            <span>icon</span>
            <span>账号</span>
            <InputItem placeholder="" className="username" />
          </div>
        </section>
        <p className="error-msg"></p>
        <section className="lofgin_com-form">
          <div>
            <span>icon</span>
            <span>密码</span>
            <InputItem placeholder="" className="password" type="password" />
          </div>
        </section>
        <p className="error-msg"></p>
        <Button type="primary" className="login">登录</Button>
        <p className="tip">
          <Link to="/sign">注册</Link>
          <Link to="/forget">忘记密码</Link>
          <Route path='/sgin' />
          <Route path='/sgin' render={() => (
            <h3>Please select a topic.</h3>
          )} />
        </p>
        <div className="border"></div>
        <p className="text">其他登录方式</p>
        <div className="other-login">
          <span></span>
        </div>
      </div>
    );
  }
}

