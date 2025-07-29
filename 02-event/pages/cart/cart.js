// pages/cart/cart.js
Page({

    // 按钮绑定的事件函数
    btnHandler (event) {
        console.log(event.mark.id);
        console.log(event.mark.name);
    },

    // view 绑定的事件处理函数
    parentHandler (event) {
        // 先点击蓝色区域（不点击按钮）
        // 通过事件对象获取的是 view 身上绑定的数据


        // 先点击按钮（不点击按钮）
        // 通过事件对象获取的是 触发事件的节点 以及 父节点身上所有的 mark 数据
        console.log(event)
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