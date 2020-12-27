// pages/login/login.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toLogin(){
    wx.login({
      success: res => {
        if (res.code) {
          // console.log(res)
          // this.globalData.loginCode = res.code   // 获取的code码，以进一步换取用户信息
          // res: {
          //   code: "061Zltjh1sXj6s0z96hh1Z1njh1Zltj5"
          //   errMsg: "login:ok"
          // }
          request('weChat',{'code':res.code})
          .then(res => {
            wx.reLaunch({
              url: '../theStore/theStore',
            })
          })
          .catch(res =>{

          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
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