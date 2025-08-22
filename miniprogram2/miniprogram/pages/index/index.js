import { reqIndexData } from '../../api/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], // 轮播图数据
    categoryList: [], // 商品导航区
    activeList: [], // 活动渲染区
    hotList: [], // 人气推荐
    guessList: [] // 猜你喜欢
  },

  // 获取首页数据
  async getIndexData() {
      // 调用接口 API 函数，获取数据
      // reqIndexData 内部使用的 all 或者 Promise.all
      // 返回的是一个数组，是按照接口的调用顺序返回的
      const res = await reqIndexData()

      // 对数据进行赋值
      const imgVal = [
        '../../../assets/banner/banner-1.jpg',
        '../../../assets/banner/banner-2.jpg',
        '../../../assets/banner/banner-3.jpg'
      ]
      this.setData({
        bannerList: res[0].data.map((item, index) => {
            return {
                ...item,
                imageUrl: imgVal[index]
            }
        }),
        categoryList: res[1].data,
        activeList: res[2].data,
        guessList: res[3].data,
        hotList: res[4].data,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //在页面加载后调用获取首页数据的方法
      this.getIndexData()
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
