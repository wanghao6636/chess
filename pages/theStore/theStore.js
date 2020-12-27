import request from '../../utils/request.js'
// pages/theStore/theStore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  toHome(){
    wx.reLaunch({
      url: '../home/home',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this 
    request('Reg',{'lat':39.916527,'lng':116.397128})
    .then(res => {
      this.list = res.data
      that.setData({
        list :res.data
      })
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

  },
    /**
   * 搜索
   */
  search:function(e){
    var that = this
    var search_name = e.detail.value
    request('serch',{'shop_name':search_name})
    .then(res => {
      that.setData({
        list :res.data
      })
    })
  },
 serinto:function(e){
  let shop_id = e.currentTarget.dataset.shop_id 
  let shop_name = e.currentTarget.dataset.shop_name 
      wx.reLaunch({
          url: '../home/home?shop_id='+shop_id+'&shop_name='+shop_name,
        })
 }
})