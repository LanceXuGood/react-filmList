
import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import Login from './app/routers/Login';
import Home from './app/routers/Home';
import Order from './app/routers/Order';
// import * as doAction from './reducers/do/action.js';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// @connect(
//   state => ({
//     doReducer: state.doReducer.toJS() // 数据格式从immutable转换成js数据类型
//   }),
//   dispatch => ({
//     actions: bindActionCreators({
//       ...doAction
//     }, dispatch)
//   })
// )

// 页面基础路由配置
const AuthRouter = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => (
        true ? (
          <Redirect to="/home" />
        ) : (<Redirect to="/login" />)
      )} />
      <Route path="/home" component={routerBase} />
      <Route path="/login" component={Login} />
      <Route path="/order" component={Order} />
    </div>
  </Router>
);

const routerBase = ({ match }) => {
  return (
    <div className="home_page">
      <div className="overflow_container">
        <Route exact path={`${match.url}`} render={() => (
          <Redirect to={`${match.url}/health`} />
        )} />
        <Route path={`${match.url}/health`} component={Home}></Route>
        <Route path={`${match.url}/server-log`} component={Home}></Route>
        <Route path={`${match.url}/life-card`} component={Home}></Route>
      </div>
      <div className="bottom_bar">
        <span>
          <NavLink to={`${match.url}/health`}>健康服务</NavLink>
        </span>
        <span>
          <NavLink to={`${match.url}/server-log`}>服务记录</NavLink>
        </span>
        <span>
          <NavLink to={`${match.url}/life-card`}>生命周期卡</NavLink>
        </span>
      </div>
    </div>
  );
};
export default AuthRouter;



