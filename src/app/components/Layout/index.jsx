import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../Loading';
class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="home_page">
      <div className="overflow_container">
        <ul className="nav">
          <li><Link to="/app/home">首页</Link></li>
        </ul>
        <Route exact path="/app/home" component={Loadable({
          loader: () => import('../../routers/Home'),
          loading: Loading,
        })} />
      </div>
    </div>;
  }
}

export default Layout;
