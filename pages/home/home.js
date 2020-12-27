// pages/home/home.js
import request from '../../utils/request.js'
const app = getApp();
// const Get = app.Get;
import {
  Banner,
  IndexBook
} from "../../common/api";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    MenuButtonHight: app.globalData.MenuButtonHight,
    MenuButtonWidth: app.globalData.MenuButtonWidth,
    current: 0,
    list:[],
    shop_name:''
  },
  currentChange(e) {
    let current = e.detail.current;
    this.setData({
      current
    })
  },
  // 包厢详情
  toDetail(e) {
    let box_shop = e.currentTarget.dataset.box_shop 
    let box_img = e.currentTarget.dataset.box_img 
    let box_allprice = e.currentTarget.dataset.box_allprice 
    let box_slotprice = e.currentTarget.dataset.box_slotprice 

    
    
    wx.navigateTo({
      url: './boxDetail/boxDetail?box_shop='+box_shop+'&box_img='+box_img+'&box_allprice='+box_allprice+'&box_slotprice='+box_slotprice,
    })
  },

  homes: function (shop_id) {
    var that = this 
    request('index',{'shop_id':shop_id})
    .then(res => {
      console.log(res.data)
      that.setData({
        list :res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.homes(options.shop_id)
      this.shop_name = options.shop_name
      this.setData({
        shop_name :options.shop_name
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