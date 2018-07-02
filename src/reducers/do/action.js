
import {getDouBanFilmList} from '../../common/api';

//定义type
export const ADD_TODO = 'ADD_TODO';

//action创建函数
export function addTodo(params) {
  return {
    type: ADD_TODO,
    payload: getDouBanFilmList(params)//payload为promise对象
  };
}
