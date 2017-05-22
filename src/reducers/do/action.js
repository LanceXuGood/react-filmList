
import {getList} from '../../common/api';
//thunk //定义type
// export const ADD_TODO = 'ADD_TODO';
// export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
// export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
// //action创建函数
// export function addTodo() {
//     return function (dispatch, getState) {
//         axios.get('http://api-dev.haomaiche.com/ware/car/hot-car/310000?cityCode=310000&pageSize=6&source=102&time=1492497682717')
//             .then((response) => {
//                 dispatch({
//                     type: ADD_TODO_SUCCESS,
//                     payload: response.data
//                 })
//             }).catch((error) => {
//                 dispatch({
//                     type: ADD_TODO_FAILURE,
//                     payload: error
//                 })
//             })
//     }
// }

//定义type
export const ADD_TODO = 'ADD_TODO';

//action创建函数
export function addTodo(params) {
    return {
        type: ADD_TODO,
        payload: getList(params)//payload为promise对象
    };
}
