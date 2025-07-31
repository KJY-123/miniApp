// pages/market/market.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        numList: [1, 2, 3]
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
        console.log('监听用户下拉动作'),

        // 产品需求：
        // 当用户上拉加载更多时，如果用户进行了下拉刷新
        // 需要将数据重置
        this.setData({
            numList: [1, 2, 3]
        })

        // 在下拉刷新以后，loading 效果可能不会弹回去
        if (this.data.numList.length === 3) {
            wx.stopPullDownRefresh()
        }
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('监听用户上拉加载')
        // 产品需求：
        // 当用户上拉，需要数字进行累加

        // 每次累加3个数字
        // 目前是[1, 2, 3], [1, 2, 3, 4, 5, 6]

        wx.showLoading({
          title: '数据加载中...',
        })

        setTimeout(() =>{
            const lastNum = this.data.numList[this.data.numList.length-1]
            this.setData({
                numList: [...this.data.numList, lastNum+1, lastNum+2, lastNum+3]
            })
            wx.hideLoading()
        }, 1500)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})