import React, { Component } from 'react';
import { Route, NavLink  } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../Loading';
import './index.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.querySelector('.init-loading-warpper').style.display = 'none';
  }
  render() {
    return (
      <div className="layout">
        <div className="main">
          <Route
            exact
            path="/app/home"
            component={Loadable({
              loader: () => import('../../routers/Home'),
              loading: Loading
            })}
          />
        </div>
        <div className="dy-nav-wrapper">
          <NavLink className="dy-nav" to="/app/home" activeClassName="active">
            <i className="iconfont">&#xe602;</i>
            <br/>
            电影
          </NavLink>
          <NavLink className="dy-nav" to="/app/search" activeClassName="active">
            <i className="iconfont">&#xe6d6;</i>
            <br/>
            搜索
          </NavLink>
          <NavLink className="dy-nav" to="/app/personal" activeClassName="active">
            <i className="iconfont">&#xe60e;</i>
            <br/>
            个人
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Layout;
