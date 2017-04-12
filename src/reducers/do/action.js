//定义开关
export const ADD_TODO = 'ADD_TODO';

//action创建函数
export function addTodo(p){
    return {
        type:ADD_TODO,
        text:p
    }
}
