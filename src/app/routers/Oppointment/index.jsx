import React, { Component } from 'react';
import './index.scss';
import { Tabs } from 'antd-mobile';
import Banner from '../../components/Banner';
import ServerSite from './components/ServerSite';
import ServerType from './components/ServerType';
import ServerDoctor from './components/ServerDoctor';
import ServerCommon from './components/ServerCommon';

class Oppointment extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    const tabs2 = [
      { title: '医师预约', sub: '1' },
      { title: '专调预约', sub: '2' },
    ];
    return <div className="overflow_container">
      <div className="oppointment_com">
        <Banner />
        <ServerSite></ServerSite>
        <Tabs tabs={tabs2}
          tabBarTextStyle={{
            color: '#fff'
          }}
          initialPage={1}
          tabBarPosition="top"
          renderTab={tab => <span>{tab.title}</span>}
          swipeable={false}
        >
          <div className="oppointment_com-tab-content">
            {/* 普通 */}
            <ServerDoctor></ServerDoctor>
            <ServerType></ServerType>
            <ServerCommon></ServerCommon>
          </div>
          <div className="oppointment_com-tab-content specialist_conetent">
            {/* 专调 */}
            <ServerType></ServerType>
            <ServerDoctor></ServerDoctor>
            <ServerCommon></ServerCommon>
          </div>
        </Tabs>
      </div>
    </div>;
  }
}

export default Oppointment;
