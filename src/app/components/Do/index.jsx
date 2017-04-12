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
        doList: state.doReducer.doList
    }),
    dispatch=>({
        actions:bindActionCreators({
            ...doAction
        },dispatch)
    }),
    mergeProps=>({

    })


)
export default class Do extends Component {
    constructor(props){
        super(props);
    }
    state={
        list:[1]
    }

    handleClick=()=>{
        this.props.actions.addTodo([1,2,3,4]);
    };
    componentDidMount() {
        this.context.store.subscribe((state)=>this.setState({
            list: this.props.doList
        }))
    }

    render() {
        const list = this.state.list;
        return (
            <div>
               {list.map( (item,index)=><div onClick={this.handleClick} key={index}>{item}</div> )}
            </div>
        );
    }
}
