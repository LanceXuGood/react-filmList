import React, { Component } from 'react';
import './index.scss';
class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { contentLeftText, contentRightText } = this.props;
    return <div className="title-bar">

      <p>
        <span>
          1
        </span>
        {contentLeftText ? contentLeftText : ''}
      </p>
      <b>{contentRightText ? contentRightText : ''}</b>
    </div>;
  }
}

export default Title;
