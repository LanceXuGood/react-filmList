import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './index.scss';
import {getDouBanFilmList } from '../../../common/api';
export default class Home extends Component{
  componentDidMount(){
    getDouBanFilmList();
  }
  render(){
    return (
      <div className="home-page">
        <p>这里是首页</p>
      </div>
    );
  }
}
