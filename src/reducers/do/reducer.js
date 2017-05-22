//redux-thunk 中间件
const initialState = {
    doList: [],
};

// export default function doReducer (state = initialState,action){
//     switch (action.type) {
//         case 'ADD_TODO_SUCCESS':
//             return Object.assign({}, state, { doList:action.payload.data });
//         default:
//             return state;
//     }
// }

//redux-promise中间件

export default function doReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.payload.errCode == 0) {
                return Object.assign({}, state, {
                    doList: action.payload.data.data
                });
            }
        default:
            return state;
    }
}
