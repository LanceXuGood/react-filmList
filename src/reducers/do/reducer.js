//2017/5/27 添加emmtable.js
import {
    fromJS
} from 'immutable';
import {
    ADD_TODO
} from './action';

// const initialState = {
//     doList: [],
// };
/*redux-thunk 中间件*/
// export default function doReducer (state = initialState,action){
//     switch (action.type) {
//         case 'ADD_TODO_SUCCESS':
//             return Object.assign({}, state, { doList:action.payload.data });
//         default:
//             return state;
//     }
// }

/*redux-promise中间件*/

// export default function doReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             if (action.payload.errCode == 0) {
//                 return Object.assign({}, state, {
//                     doList: action.payload.data.data
//                 });
//             }
//         default:
//             return state;
//     }
// }

/*redux-immutable*/


const initialState = fromJS({
    doList: [],
});
export default (state = initialState, action) => {
    if (action.type === ADD_TODO) {
        //这里可以根据type返回的status做处理，会显得很麻烦,之前项目老大，通过中间件对状态进行一层处理。
        return state.set('doList', action.payload.data.data);
    }
    return state;
};
