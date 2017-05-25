/**
 * Created by Administrator on 2017/4/12.
 */
import React, { Component } from 'react';
import * as doAction from '../../../reducers/do/action.js';
import { Table, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//链接redux ，这块地方还有有些模糊
@connect(
    state => ({
        doReducer: state.doReducer
    }),
    dispatch => ({
        actions: bindActionCreators({
            ...doAction
        }, dispatch)
    })
)
export default class DoList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        list: [],
        isLoading: true,
    }
    componentDidMount() {
        // cpageSize=8&source=102&time=149249768271
        this.props.actions.addTodo({
            cityCode: 310000,
            pageSize: 20
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.doReducer.doList,
            isLoading: false
        });
    }
    render() {
        const columns = [{
            title: '品牌',
            dataIndex: 'brandName',
            key: 'brandName',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '车型',
            dataIndex: 'typeName',
            key: 'typeName',
        }, {
            title: '款型最高价',
            dataIndex: 'typeMaxPrice',
            key: 'typeMaxPrice',
        },  {
            title: '款型最低价',
            dataIndex: 'typeMinPrice',
            key: 'typeMinPrice',
        },  {
            title: '区域最高限价',
            dataIndex: 'typeAreaMax',
            key: 'typeAreaMax',
        },  {
            title: '区域最低限价',
            dataIndex: 'typeAreaMin',
            key: 'typeAreaMin',
        },{
            title: '车型图片',
            dataIndex: 'tpicPath',
            key: 'tpicPath',
            render: text => <img style={{ width: '100px' }} src={text}></img>,
        }];
        const dataSource = this.state.list;
        return (
            <div>
                <Table dataSource={dataSource} 
                    columns={columns} 
                    rowKey={record => record.typeId} 
                    loading={this.state.isLoading} 
                    pagination={{ pageSize: 5 }}/>
            </div>
        );
    }
}
