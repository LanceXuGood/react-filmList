import React from 'react';
import { Breadcrumb } from 'antd';
import './index.scss'

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Breadcrumb className="home-nav">
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>新闻</Breadcrumb.Item>
                <Breadcrumb.Item>商城</Breadcrumb.Item>
                <Breadcrumb.Item>个人</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
