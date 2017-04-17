/*这里需要说明，这里创建store*/

//中间件的绑定
import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';

/**
 *
 * @param initialState 初始状态值
 * @param history 路由状态
 * @returns {*|Store<S>|Store<any>}
 */
export default function configureStore(initialState, history) {
    let middleware = [
        // 路由中间件
        routerMiddleware(history)
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
                console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`));
            }
        }
    }

    return store

}
