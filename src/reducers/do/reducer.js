import {ADD_TODO} from './action';

const initialState = {
    doList: [],
};
export default function doReducer (state = initialState,action){
    switch (action.type) {
        case ADD_TODO:
            console.log(Object.assign({}, state, { doList:action.text }))
            return Object.assign({}, state, { doList:action.text })
        default:
            return state;
    }
}
