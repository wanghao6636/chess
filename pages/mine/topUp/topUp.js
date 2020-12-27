// pages/mine/topUp/topUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moneyActived:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  seleteMoney(e){
    let moneytype = e.currentTarget.dataset.moneytype;
    if(this.data.moneyActived===moneytype){
      this.setData({
        moneyActived:''
      })
    }else{
      this.setData({
        moneyActived:moneytype
      })
    }
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