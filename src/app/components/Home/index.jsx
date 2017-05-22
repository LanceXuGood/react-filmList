import React from 'react';
import { Calendar } from 'antd';

import './index.scss';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Calendar />
        )
    }
}
