import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './index.scss';
import {getList } from '../../../common/api';
export default class Home extends Component{
  componentDidMount(){
    getList();
  }
  render(){
    return (
      <div className="home-page">
        <Link to="/order/make-oppintments">
          专调预约
        </Link>
        <p></p>
      </div>
    );
  }
}
