Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  getData () {

    // 显示 loading 提示框
    wx.showLoading({
        // 用来显示提示的内容
        // 提示的内容不会自动换行，内容过多会被隐藏
        title: '数据加载中...',
        // 是否显示透明蒙层，防止触摸穿透
        mask: true
    })

    // 如果需要发起网络请求，需要使用 wx.request API
    wx.request({
        // 接口地址
        url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
        // 请求方式
        method: 'GET',
        // 请求参数
        data: {},
        // 请求头
        header: {},
        // API 调用成功之后，执行的回调
        success: (res) => {
            console.log(res);
            if (res.data.code === 200) {
                this.setData({
                    list: res.data.data
                })
            }
        },
        // API 调用失败后，执行的回调
        fail: err => {
            console.log(err);
        },
        // API 不管调用成功还是失败以后，执行的回调
        complete: res => {
            console.log(res)
            // 关闭 loading 提示框
            // hideLoading 和 showLoading 必须结合使用
            wx.hideLoading()
        }
    })

  },

  // 删除商品
  async delHandler () {

    // showModal 显示模态对话框
    const { confirm } = await wx.showModal({
      title: '提示',
      content: '是否删除该商品？'
    })
    
    if (confirm) {
        // showToast 消息提示框
        wx.showToast({
          title: '删除成功',
          icon: 'none',
          duration: 2000
        })
    } else {
        wx.showToast({
          title: '取消删除',
          icon: 'error',
          duration: 2000
        })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})