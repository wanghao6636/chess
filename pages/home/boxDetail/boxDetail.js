// pages/home/boxDetail/boxDetail.js
const app = getApp();
import {
  sevenDays
} from '../../../common/common';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    MenuButtonHight: app.globalData.MenuButtonHight,
    MenuButtonWidth: app.globalData.MenuButtonWidth,
    daySeven: [],
    dateSeleted: 0,
    packageActived: 0,
    seleteTime: '',
    box_shop:'',
    box_img:'',
    box_slotprice:'',
    box_allprice:''
  },
  goBack() {
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onLoad: function (options) {
    console.log(sevenDays());
    this.setData({
      daySeven: sevenDays(),
      seleteTime: sevenDays()[0].year + '-' + sevenDays()[0].month + '-' + sevenDays()[0].day
    })
    console.log(this.daySeven)
    this.box_shop = options.box_shop
    this.box_slotprice = options.box_slotprice
    this.box_allprice = options.box_allprice
    this.box_img = options.box_img
    this.setData({
      box_shop :options.box_shop,
      box_img :options.box_img,
      box_slotprice :options.box_slotprice,
      box_allprice :options.box_allprice,
    })
},
  // 选择日期
  chooseDate(e) {
    let index = e.currentTarget.dataset.index;
    let dates = e.currentTarget.dataset.dates;
    let seleteTime = dates.year + '-' + dates.month + '-' + dates.day;
    this.setData({
      dateSeleted: index,
      seleteTime
    })
  },
  // 选择套餐
  packageChoosed(e) {
    let index = e.currentTarget.dataset.index;            
    this.setData({
      packageActived: index
    })
  },
  // 付款
  toPay() {
    let obj = {
      seleteTime: this.data.seleteTime,
      packageActived: this.data.packageActived
    }
    console.log(obj);
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