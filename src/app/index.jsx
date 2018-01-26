import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import DoList from './components/DoList';
import ToDo from './components/ToDo';
import Test from './components/Test';
class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base">
                <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/dolist">DoList</Link></li>
                    <li><Link to="/todo">TodoList</Link></li>
                    <li><Link to="/test">Test</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route exact path="/dolist" component={DoList}/>
                <Route exact path="/todo" component={ToDo}/>
                <Route exact path="/test" component={Test}/>
            </div>
        )
    }
}

export default Index;
