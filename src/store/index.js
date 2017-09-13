import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from '../reducers';

//中间件的绑定
import {routerMiddleware} from 'react-router-redux';
//import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise';

/**
 *
 * @param initialState 初始状态值
 * @param history 路由状态
 * @returns {*|Store<S>|Store<any>}
 */
export default function configureStore(initialState, history) {
    let middleware = [
        // 路由中间件
        routerMiddleware(history),
        //thunkMiddleware,
        promiseMiddleware,
        loggerMiddleware

    ];
    //通过middleware创建stroe
    const createStoreWithMiddleware = compose(applyMiddleware(...middleware),  __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : f => f,);

    let store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

    // 热加载的配置
    if (process.env.NODE_ENV === 'development') {
        if (module.hot) {
            try {
                const nextReducer = require('../reducers').default;
                store.replaceReducer(nextReducer);
            } catch (error) {
                console.error(chalk.red(`==> 😭Reducer hot reloading error ${error}`));
            }
        }
    }

    return store;

}
