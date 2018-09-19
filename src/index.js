
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


//绑定react与redux；
import { Provider } from 'react-redux';
//1.热加载->引入组件
import { AppContainer } from 'react-hot-loader';


//将路由绑到store
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store';

import './index.scss';
import App from './App';

import FastClick from 'fastclick';

// 配置必备插件
FastClick.attach(document.body);

// Create a history of your choosing (we're using a browser history in this case)
let browserHistory = createHistory();


//store和history进行绑定-》这里需要注意要先配置store，已经根reducer
const store = configureStore({}, browserHistory);



// 配置redux
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <HashRouter>
        <ConnectedRouter history={browserHistory}>
          <App />
        </ConnectedRouter>
      </HashRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

// 热加载配置
if (module.hot) {
  module.hot.accept('./App.js', () => {
    const App = require('./App.js').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={browserHistory}>
            <HashRouter >
              <App />
            </HashRouter>
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}


