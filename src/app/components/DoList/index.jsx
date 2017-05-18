/**
 * Created by Administrator on 2017/4/12.
 */
import React, {Component} from 'react';
import * as doAction from '../../../reducers/do/action.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//链接redux ，这块地方还有有些模糊
@connect(
    state => ({
        doReducer: state.doReducer
    }),
    dispatch=>({
        actions:bindActionCreators({
            ...doAction
        },dispatch)
    })
)
export default class DoList extends Component {
    constructor(props){
        super(props);
    }
    state={
        list:['点击我啊']
    }

    handleClick=()=> {
        this.props.actions.addTodo();
    };
    componentDidMount() {
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            list:nextProps.doReducer.doList
        })
    }
    render() {
        const list = this.state.list;
    
        return (
            <div>
               {list.map( (item,index)=><div onClick={this.handleClick} key={index}>{item.brandName?item.brandName:item}</div> )}
            </div>
        );
    }
}
