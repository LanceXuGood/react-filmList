
# react-xy react全家桶搭建
webpack2 + es6 + babel + eslint + react + react-router v4 + redux 

#启动 运行
    yanr 启动
    yarn install 
    yarn start

    npm 启动
    npm install 
    npm start
# 更改
    * 现在还处在开发阶段，具体想要做什么还没想法， 暂时只是一些假数据。 
    * react-hot-loader 热加载的方式更改('extract-text-webpack-plugin//这个插  件不支持热加载，所以开发环境不支持)
    * action 的异步选择方案
        1.action-thunk (繁琐)
        2.action-promise (太简化)
        3.action-promise-middleware ...不知道怎么评论
    * 2017-05-25
        实现axios请求拦截器（参照之前的项目，了解学习的）
    * 2017-05-27
        加入immutable.js进行状态管理
