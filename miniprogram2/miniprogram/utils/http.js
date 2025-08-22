import WxRequest from './request'
import { getStorage, clearStorage } from './storage'
import { env } from './env'

// 对 WxRequest 实例化
const instance = new WxRequest({
    // baseUrl: 'https://gmall-prod.atguigu.cn/mall-api',
    baseUrl: env.baseUrl,
    timeout: 15000,
    isLoading: false
})

// 会覆盖默认的拦截器
// 配置请求拦截器
instance.interceptors.request = (config) => {

    // 判断本地是否存在访问令牌token
    const token = getStorage('token')

    // console.log(config)

    if (token) {
        config.header['token'] = token
    }

    return config
}

// 配置响应拦截器
instance.interceptors.response = async (response) => {
    const { isSuccess, data } = response

    if (!isSuccess) {
        wx.showToast({
          title: '网络异常请重试',
          icon: 'error'
        })
        return response
    }

    // 判断服务器响应的业务状态代码
    switch (data.code) {
        case 200:
          return data
        
        case 208:
          const res = await wx.modal({
              content: '鉴权失败，请重新登录',
              showCancel: false // 不显示取消登录
          })

        //   console.log(res)

          if (res) {
              // 清除之前失效的 token，同时要清除本地存储的全部信息
              clearStorage()

              wx.redirectTo({
                url: '/pages/login/login'
              })
          }

          return Promise.reject(response)

        default:
          wx.toast({
              title: '程序出现异常，请联系客服或者稍后重试'
          })
          break
    }

    return data
}

export default instance