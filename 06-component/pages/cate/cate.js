// pages/cate/cate.js
Page({

    data: {
        list: [ 1, 2, 3 ],
        // list: [{id: 1, name: 'tom'}],
        num: 1,
        userInfo: {
            name: 'tom',
            age: 10,
            test: 1
        }
    },

    // 将数据存储到本地
    setStorage () {

        // 第一个参数：本地存储指定的key
        // 第二个参数：需要存储的数据
        // wx.setStorageSync('num', 1)

        // 在小程序中
        // 如果存储的是对象类型数据，不需要JSON.stringify和JSON.parse 
        // wx.setStorageSync('obj', {name: 'tom', age: 10})

        // ------------------------- 异步API --------------------------
        wx.setStorage({
            key: 'num',
            data: 1
        })

        wx.setStorage({
            key: 'obj',
            data: {name: 'tom', age: 10}
        })

    },

    // 获取本地存储的数据
    async getStorage () {

        // const num = wx.getStorageSync('num')
        // const obj = wx.getStorageSync('obj')

        // console.log(num, obj);

        // ------------------------- 异步API --------------------------

        const { data } = await wx.getStorage({
            key: 'obj'
        })

        console.log(data)

    },

    // 删除本地存储的数据
    removeStorage () {

        wx.removeStorageSync('num')
        wx.removeStorageSync('obj')

        // ------------------------- 异步API --------------------------

        wx.removeStorage({
          key: 'num',
        })

    },

    // 清空本地存储的数据
    clearStorage () {

        // wx.clearStorageSync()

        // ------------------------- 异步API --------------------------

        wx.clearStorage()
    }

})