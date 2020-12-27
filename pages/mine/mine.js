// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1: [{
      text: "我的银行卡",
      image: "../../imgs/mine/yhk.png",
      style: {
        width: '71rpx',
        height: '58rpx'
      },
      url: ''
    }, {
      text: "包厢位置",
      image: "../../imgs/mine/bf.png",
      style: {
        width: '65rpx',
        height: '67rpx'
      },
      url: './userBox/userBox'
    }, {
      text: "菜品订单",
      image: "../../imgs/mine/menu.png",
      style: {
        width: '62rpx',
        height: '67rpx'
      },
      url: './foodOrders/foodOrders'
    }, {
      text: "服务评价",
      image: "../../imgs/mine/pj.png",
      style: {
        width: '51rpx',
        height: '55rpx'
      },
      url: ''
    }, {
      text: "投诉建议",
      image: "../../imgs/mine/back.png",
      style: {
        width: '65rpx',
        height: '63rpx'
      },
      url: './suggeste/suggeste'
    }],
    isIntegral: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 
  closeIntegral() {
    this.setData({
      isIntegral: false
    })
  },
  // 
  openIntegral() {
    this.setData({
      isIntegral: true
    })
  },
  // 
  toOrders(e) {
    let type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: './myOrder/myOrder?type='+type,
    })
  },
  // 积分兑换
  pointsFor() {
    wx.navigateTo({
      url: './points/points',
    })
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