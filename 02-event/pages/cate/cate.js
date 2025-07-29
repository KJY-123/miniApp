// pages/cate/cate.js
Page({

    // 按钮的点击触发函数
    btnHandler(event) {
        // currentTarget 事件绑定者，也就是指：哪个组件绑定了当前事件处理函数
        // target 事件触发者，也就是指：哪个组件触发了当前事件处理函数
        // currentTarget 和 target 都是指按钮，因为是按钮绑定的事件处理函数，同时点击按钮触发事件处理函数
        console.log(event.currentTarget.dataset.id)
        console.log(event.target.dataset.name);
    },


    // view 绑定的事件处理函数
    parentHandler(event) {
        // 点击蓝色区域（不点击按钮）
        // currentTarget 事件绑定者：view
        // target 事件触发者：view

        // 点击按钮
        // currentTarget 事件绑定者：view
        // target 事件触发者：按钮
        console.log(event)

        // 在传递参数时，如果自定义参数是多个单词，单词与单词之间使用中横线 - 进行连接
        // 在事件对象中会被转换为小驼峰写法
        console.log(event.currentTarget.dataset.parentId)

        // 在传递参数时，如果自定义参数是多个单词，单词如果使用的是小驼峰写法
        // 在事件对象中全部都会被转换为小写
        console.log(event.currentTarget.dataset.parentname)
    },

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})