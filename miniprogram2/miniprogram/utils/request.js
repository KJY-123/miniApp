
// 创建 wxRequest 类
// 通过类的方式来进行封装，会让代码更加具有复用性
// 也可以方便添加新的属性和方法

class WxRequest {
    // 定义实例属性，用来设置默认请求参数
    default = {
        baseUrl: '',
        url: '',
        data: null,
        method: 'GET',
        header: {
            'Content-type': 'application/json'
        },
        timeout: 60000 // 默认超时时长，小程序默认的超时时长是 1分钟
    }

    // 定义拦截器对象
    // 需要包含请求拦截器及响应拦截器，方便在请求之前以及响应之后进行逻辑处理
    interceptors = {
        // 请求拦截器
        // 在请求发送之前，对请求参数进行新增或修改
        request: (config) => config,

        // 响应拦截器
        // 在服务器响应数据以后，对服务器响应的数据进行逻辑处理
        response: (response) => response
    }

    // 用户创建和初始化类的属性和方法
    // 在实例化时传入的参数，会被 constructor 形参接收
    constructor (params = {}) {
        this.default = Object.assign({}, this.default, params)
    }

    request (options) {

        // 注意：需要先合并完整的请求地址（baseUrl + url）
        options.url = this.default.baseUrl + options.url

        // 合并请求参数
        options = {...this.default, ...options}

        // 在请求发送之前，添加 loading 效果
        wx.showLoading()

        // 在请求发送之前，调用请求拦截器，新增或修改请求参数
        options = this.interceptors.request(options)

        return new Promise((resolve, reject) =>{
            wx.request({
              ...options,
              // 接口调用成功
              success: (res) => {
                  // 不管是成功还是失败响应，都需要调用响应拦截器
                  // 响应拦截器需要接收服务器响应的数据，然后对数据进行逻辑处理，处理好以后进行返回
                  // 然后再通过 resolve 将返回的数据抛出去

                  // 在给响应拦截器传递参数时，需要将请求参数也一起传递
                  // 方便进行代码的调试或者其他逻辑处理，需要先合并参数
                  // 然后将合并的参数传递给响应拦截器

                  // 添加isSuccess, ture 说明执行了 success 函数
                  const mergeRes = Object.assign({}, res, { config: options, isSuccess: true })
                  resolve(this.interceptors.response(mergeRes))
              },

              // 接口调用失败
              fail: (err) => {
                  // 不管是成功还是失败响应，都需要调用响应拦截器
                  // 添加isSuccess, false 说明执行了 fail 函数
                  const mergeErr = Object.assign({}, err, { config: options, isSuccess: true })
                  reject(this.interceptors.response(mergeErr))
              },

              // 接口结束调用的函数（不管成功还是失败都会调用）
              complete: () => {
                  // 隐藏 loading
                  wx.hideLoading()
              }
            })
        })
    }

    get (url, data = {}, config = {}) {
        return this.request(Object.assign({ url, data, method: 'GET'}, config))
    }

    delet (url, data = {}, config = {}) {
        return this.request(Object.assign({ url, data, method: 'DELETE'}, config))
    }

    post (url, data = {}, config = {}) {
        return this.request(Object.assign({ url, data, method: 'POST'}, config))
    }

    put (url, data = {}, config = {}) {
        return this.request(Object.assign({ url, data, method: 'PUT'}, config))
    }

    all (...promise) {
        // 通过展开运算符来接收传递的参数
        // 那么展开运算符会将传入的参数转为数组
        return Promise.all(promise) 
    }
}

export default WxRequest