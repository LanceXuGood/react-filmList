import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import Index from './app';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//绑定react与redux；
import { Provider } from 'react-redux';
//1.热加载->引入组件
import { AppContainer } from 'react-hot-loader';
import './common/lib/index.less';
//es6promise补全
es6Promise.polyfill();

//将路由绑到store
import { ConnectedRouter} from 'react-router-redux';
import configureStore from './store';

// Create a history of your choosing (we're using a browser history in this case)
let history = createHistory();

//store和history进行绑定-》这里需要注意要先配置store，已经根reducer
const store = configureStore({},history);

//这里的connectedRouter替代旧版的syncHistoryWithStore
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Index/>
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    </AppContainer>
    ,
    document.getElementById('app')
);

//2.热加载采用-> 根组件绑定绑定 （3.绑定在store）
if (module.hot) {
    module.hot.accept('./app', () => {
        const Index = require('./app').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <BrowserRouter >
                            <Index/>
                        </BrowserRouter>
                    </ConnectedRouter>
                </Provider>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
