// pages/mine/points/points.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    MenuButtonHight: app.globalData.MenuButtonHight,
    MenuButtonWidth: app.globalData.MenuButtonWidth,
    isExChange: false,
    timeHeight: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight; // 获取当前窗口的高度
    let timeHeight = windowHeight - (256 + 21.5);
    this.setData({
      timeHeight,
    })
  },
  goBack() {
    wx.navigateBack();
  },
  // 兑换
  exChange() {
    this.setData({
      isExChange: true
    })
  },
  // 取消或确定
  submits(e) {
    let type = e.currentTarget.dataset.type;
    if (type == '0') { //取消

    }
    if (type == '1') { //确定

    }
    this.setData({
      isExChange: false
    })
  },
  // 
  toRecord() {
    wx.navigateTo({
      url: './pointRecord/pointRecord',
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