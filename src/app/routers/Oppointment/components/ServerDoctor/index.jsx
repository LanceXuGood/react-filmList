import React, { Component } from 'react';
import './index.scss';
import Title from '../../../../components/Title';



class ServerDoctor extends Component {
  state = {}
  render() {
    return <div className="server_doctor">
      <Title contentLeftText="可选医师"></Title>
      <div className="server_doctor-content">
        <div className="doctor_list">
          <div className="doctor_list-item">
            <div className="head_portrait">
              <span></span>
            </div>
            <div className="doctor_name">张全蛋</div>
            <div className="doctor_professional-title">中医专调师</div>
          </div>
          <div className="doctor_list-item">
            <div className="head_portrait">
              <span></span>
            </div>
            <div className="doctor_name">张全蛋</div>
            <div className="doctor_professional-title">中医专调师</div>
          </div>
          <div className="doctor_list-item">
            <div className="head_portrait">
              <span></span>
            </div>
            <div className="doctor_name">张全蛋</div>
            <div className="doctor_professional-title">中医专调师</div>
          </div>
        </div>
        <div className="doctor_list">
          <div className="doctor_list-item">
            <div className="head_portrait">
              <span></span>
            </div>
            <div className="doctor_name">张全蛋</div>
            <div className="doctor_professional-title">中医专调师</div>
          </div>
          <div className="doctor_list-item">
            <div className="head_portrait">
              <span></span>
            </div>
            <div className="doctor_name">张全蛋</div>
            <div className="doctor_professional-title">中医专调师</div>
          </div>
          <div className="doctor_list-item">
            <div className="head_portrait">
              <span></span>
            </div>
            <div className="doctor_name">张全蛋</div>
            <div className="doctor_professional-title">中医专调师</div>
          </div>
        </div>

      </div>
    </div>;
  }
}

export default ServerDoctor;
