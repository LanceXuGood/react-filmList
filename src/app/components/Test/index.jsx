import React , { Component } from 'react';
import test from '../../../common/until/test';
class Test extends Component {
    state = {}
    render() {
        return (
            <div>{test()}</div>
        );
    }
}

export default Test;
