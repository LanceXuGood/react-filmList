import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base">
                <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/topics">主题列表</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
            </div>
        )
    }
}
export default Index;
