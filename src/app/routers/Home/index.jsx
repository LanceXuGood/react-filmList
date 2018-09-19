import React, {Component} from 'react';
import classNames from 'classnames/bind';
// import * as PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import './index.scss';
import {getDouBanFilmList} from '../../../common/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    subjects: []
  };

  async componentDidMount() {
    const data = await getDouBanFilmList();
    const {subjects} = data;
    this.setState({
      subjects: subjects
    });
  }
  getList() {
    const {subjects} = this.state;
    return subjects.map(item => <div className="film-item" key={item.id}>
      <a href={`/film-detail/${item.id}`}>
        <div className="left">
          <img src={item.images.small} alt="" className="image"/>
        </div>
        <div className="content">
          <div className="title">
            <span className="title-info">{item.title}</span>
          </div>
          <div className="tags">
            {
              item.genres && item.genres.map((genresItem, index) => <span key={index} className="tag">
                {genresItem}
              </span>)
            }
          </div>
          <div className="durations">
            上映：{item.mainland_pubdate}
            {
              item.durations && item.durations.map((durationsItem, index) => <span key={index} className="duration">
                {durationsItem}{index === item.durations.length - 1 ? '' : '/'}
              </span>)
            }
          </div>
          <div className="directors ">
            编剧：
            {
              item.directors && item.directors.map((directorsItem, index) => <span key={index} className="duration">
                {directorsItem.name}{index === item.directors.length - 1 ? '' : '/'}
              </span>)
            }
          </div>
          <div className="casts">
            演员：
            {
              item.casts && item.casts.map((castsItem, index) => <span key={index} className="duration">
                {castsItem.name}{index === item.casts.length - 1 ? '' : '/'}
              </span>)
            }
          </div>
          <div className="rating">
            评分：
            <p>
              {
                item.rating && [1,2,3,4,5].map((index) => <span key={index}>
                  <i className={classNames('iconfont', { 'none': index * 2 > item.rating.average})}>&#xe630;</i>
                </span>)
              }
              <b>{item.rating ? item.rating.average : '暂无评分'}</b>
            </p>
          </div>
        </div>
      </a>
    </div>);
  }

  render() {
    return (
      <div className="home-page">
        <div className="home-list">
          {this.getList()}
        </div>
      </div>
    );
  }
}
