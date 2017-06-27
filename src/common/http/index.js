// 重点，拦截器的实现

import axios from 'axios';
import {transforms} from '../../common/until/urlTemplate';
import {exists} from '../../common/until';
import _ from 'lodash';


const instance = axios.create({
    baseURL: 'http://api-dev.haomaiche.com',
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add a request interceptor
instance.interceptors.request.use(function (opts) {
    let {
        params,
        data
    } = opts;
    // 原始参数
    opts.origin = {
        ...(_.isPlainObject(params) ? params : {}),
        ...(_.isPlainObject(data) ? data : {})
    };

    // params将转换到url中的替换

    if (opts.params) {

        // 处理排序
        if (opts.params.sort && opts.params.order) {
            opts.params.sort = opts.params.sort + ',' + opts.params.order;
            delete opts.params.order;
        } else {
            delete opts.params.sort;
            delete opts.params.order;
        }

        // 转换URL的参数,需要自动删除没有的参数
        opts.url = transforms(opts.url, opts.params);

    }

    opts.params = opts.params || {};

    if (!opts.cache) {
        opts.params['_'] = new Date().getTime();
    }
    return opts;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    const params = response.config.origin;
    // 处理非通用数据格式
    if (!_.isPlainObject(response.data) || !_.has(response.data, 'errCode')) {
        return {
            errCode: 0,
            data: response.data,
            params
        };
    }

    response.data.params = params;
    if (response.data.errCode == 0) {
        // console.info(response.config.url, response.data)
        return response.data;
    } else {
        // 业务错误
        //console.error(response.config.url, response.data.errMsg);
        //console.log('response-reject-code', error)
        return Promise.reject(response.data);
    }


}, function (error) {

    // Http错误
    // console.log('response-reject-http', arguments);
    let response = error instanceof Error ? error.response || error : error;
    let result;

    if (response.data) {
        result = response.data;
    } else {
        result = {
            errCode: response.status || -1,
            errMsg: response.statusText || '网络异常'
        };
    }
    result.params = response.config.origin;
    return Promise.reject(result);
});

const Http = {
    request(opts) {

        // http://www.baidu.com/api

        if (!/^http/i.test(opts.url)) {

            // /buy/logout => http://api.dev.vveshow.com/buy/logout
            if (!opts.baseURL && /^\//.test(opts.url)) {
                opts.url = 'http://api-stage.haomaiche.com' + opts.url;
            }
            // TODO:
            // buy/manager/product/list =>  http://api.dev.vveshow.com/buy/api/v1/{client}/{channel}/manager/product/list
            // if (/^buy\//.test(opts.url)) {
            //    opts.url = config.API_ORIGIN + opts.url;
            // }

            // iloka/manager/site/config => http://api.dev.vveshow.com/iloka/api/v1/{client}/{channel}/manager/site/config
            // if (/^iloka\//.test(opts.url)) {
            //    opts.url = config.API_ORIGIN + opts.url;
            // }

        }
        return instance.request(opts);
    },

    get(url, params, opts) {
        opts = opts || {};
        opts.method = 'get';
        opts.url = url;
        if (exists(params)) {
            opts.params = params;
        }
        return this.request(opts);
    },

    delete(url, params, opts) {
        opts = opts || {};
        opts.method = 'delete';
        opts.url = url;
        if (exists(params)) {
            opts.params = params;
        }
        return this.request(opts);
    },

    post(url, data, opts) {
        opts = opts || {};
        opts.method = 'post';
        opts.url = url;
        if (exists(data)) {
            opts.data = data;
        }
        return this.request(opts);
    },

    put(url, data, opts) {
        opts = opts || {};
        opts.method = 'put';
        opts.url = url;
        if (exists(data)) {
            opts.data = data;
        }
        return this.request(opts);
    },

    patch(url, data, opts) {
        opts = opts || {};
        opts.method = 'patch';
        opts.url = url;
        if (exists(data)) {
            opts.data = data;
        }
        return this.request(opts);
    },

    sendForm(url, data, {
        method = 'POST',
        target = '_blank'
    } = {}) {

        // POST提交
        var form = document.createElement('form');
        form.action = url;
        form.method = method;
        form.target = target;

        const setFiled = (key, val) => {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = val;
            form.appendChild(input);
        };

        for (var key in data) {
            setFiled(key, data[key]);
        }

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }
};

export default Http;
