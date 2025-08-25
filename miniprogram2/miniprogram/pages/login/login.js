import { toast } from '../../utils/extendApi'
import { reqLogin, reqUserInfo } from '../../api/user'
import { setStorage } from '../../utils/storage'
import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { userstore } from '../../stores/userstore'

ComponentWithStore({
    // 让页面和 store 建立联系
    storeBindings: {
        store: userstore,
        fields: ['token', 'userInfo'],
        actions: ['setToken', 'setUserInfo']
    },
    methods: {
        // 授权登录
        login() {
            // 使用 wx.login 获取用户的临时登录凭证 code
            wx.login({
                success: async ({ code }) => {
                    if (code) {
                        // 获取到临时登录凭证 code 后，需要传递给开发者服务器
                        const res = await reqLogin(code)
                        console.log(res)

                        // 接口出错，自定义模拟token
                        setStorage('token', 'testToken')

                        // 赋值 store
                        this.setToken('testToken')

                        this.getUserInfo()
                    } else {
                        toast({ title: '授权失败，请重新授权' })
                    }
                },
                fail: () => {

                }
            })
        },
        
        // 获取用户信息
        async getUserInfo() {
            // const res = await reqUserInfo()
            // console.log('getUserInfo',res)

            wx.getUserInfo({
              lang: 'zh_CN',
              withCredentials: true,
              success: (result) => {
                  console.log(result)
                  setStorage(result.userInfo)
                  this.setUserInfo(result.userInfo)
              },
              fail: (res) => {},
              complete: (res) => {},
            })
        }
    }
})
