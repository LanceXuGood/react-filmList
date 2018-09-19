>声明：所有的接口都是爬取得豆瓣的电影，该项目只是用来个人练习和学习使用，不涉及任何商用用途。如果侵权，请及时联系本人，本人会尽快删除。

# react-redux-xy react全家桶搭建
  * >前端技术迭代很快，所以作为一个前端，我们需要不停学习，此项目用来练习react技术栈
  * >webpack3 + es6 + babel + eslint + react + react-router v4 + redux
 
## 启动 运行

yarn                      npm 
yarn install              npm install 
yarn start                npm start                      

## 更改

    * react-hot-loader 热加载的方式更改('extract-text-webpack-plugin//这个插  件不支持热加载，所以开发环境不支持)

    * action 的异步选择方案
        1.action-thunk (繁琐)
        2.action-promise (太简化)
        3.action-promise-middleware ...不知道怎么评论

    * 2017-05-25
        实现axios请求拦截器（参照之前的项目，了解学习的）

    * 2017-05-27
        加入immutable.js进行状态管理
        
    * 2017-06-20
        webpack升级3.0
        
    * 2018-1-6
        项目整理
    
    * 2018-7-2
        1.webpack升级4.x
        2.路由升级4.x
        3.项目优化
    * 2018-7-2 
        1.项目内容移植vue-filmlist
        2.项目路由重构        
        

## ToDoList
    *  同步vue-filmlist内容
