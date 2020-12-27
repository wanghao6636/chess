// pages/mine/foodOrders/foodOrders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navSeleted: '0', //默认选择
    timeHeight: (wx.getSystemInfoSync().windowHeight * 2) - 110, //swiper高度
    arr: [{
        orderStatus: 1,
        text: '西红柿鸡蛋面'
      },
      {
        orderStatus: 2,
        text: '西红柿鸡蛋面'
      },
      {
        orderStatus: 3,
        text: '西红柿鸡蛋面'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 选择导航
  switchNav(e) {
    let nid = e.currentTarget.dataset.nid;
    this.setData({
      navSeleted: nid
    })
  },
  // 滑动切换
  bindSwitch(e) {
    this.setData({
      navSeleted: e.detail.current
    })
  },
  // 
  bindBottom(e) {

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