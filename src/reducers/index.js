/*聚合所有的reducer*/
import {combineReducers} from 'redux';
//路由的reducer绑进来
import {routerReducer} from 'react-router-redux';

//这里需要引入所有的reducer
import doReducer from './do/reducer';

// 聚合各 reducer
const rootReducer = combineReducers({
    // 将路由加入reducer
    routing: routerReducer,
    doReducer
    
});


export default rootReducer;
