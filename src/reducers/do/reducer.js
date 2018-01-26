//2017/5/27 添加emmtable.js
import {
  fromJS
} from 'immutable';
import {
  ADD_TODO
} from './action';

const initialState = fromJS({
  doList: [],
});
export default (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return state.set('doList', []);
  }
  return state;
};
