import {ADD_TODO} from './action';

const initialState = {
    doList: [],
};
export default function doReducer (state = initialState,action){
    switch (action.type) {
        case ADD_TODO:
            state.doList = action.text;
            return  state
        default:
            return state;
    }
}
