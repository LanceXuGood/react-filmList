import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
  }
  render() {
    // const { list } = this.props;
    return <div>
      <Carousel
        autoplay={false}
        infinite
        selectedIndex={1}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            {val}
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    </div>;
  }
}

export default Banner;
