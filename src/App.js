
import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './app/components/Loading';
// import Login from './app/routers/Login';
// import Home from './app/routers/Home';
// import Order from './app/routers/Order';
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
const AuthRouter = () => {
  return <Router>
    <div>
      <Route exact path="/" render={() => (
        true ? (
          <Redirect to="/app" />
        ) : (<Redirect to="/login" />)
      )} />
      <Route path="/app" component={Loadable({
        loader: () => import('./app/components/Layout'),
        loading: Loading,
      })} />
      <Route path="/login" component={Loadable({
        loader: () => import('./app/routers/Login'),
        loading: Loading,
      })} />
      <Route path="/order" component={Loadable({
        loader: () => import('./app/routers/Order'),
        loading: Loading,
      })} />
    </div>
  </Router>;
};

// const routerBase = ({ match }) => {
//   return (
//     <div className="home_page">
//       <div className="overflow_container">
//         <Route exact path={`${match.url}`} render={() => (
//           <Redirect to={`${match.url}/health`} />
//         )} />
//         <Route path={`${match.url}/health`} component={Loadable({
//           loader: () => import('./app/routers/Home'),
//           loading: Loading,
//         })}></Route>
//         <Route path={`${match.url}/server-log`} component={Loadable({
//           loader: () => import('./app/routers/Home'),
//           loading: Loading,
//         })}></Route>
//         <Route path={`${match.url}/life-card`} component={Loadable({
//           loader: () => import('./app/routers/Home'),
//           loading: Loading,
//         })}></Route>
//       </div>
//       <div className="bottom_bar">
//         <span>
//           <NavLink to={`${match.url}/health`}>健康服务</NavLink>
//         </span>
//         <span>
//           <NavLink to={`${match.url}/server-log`}>服务记录</NavLink>
//         </span>
//         <span>
//           <NavLink to={`${match.url}/life-card`}>生命周期卡</NavLink>
//         </span>
//       </div>
//     </div>
//   );
// };
export default AuthRouter;



