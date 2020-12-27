// pages/community/chatRoom/chatRoom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
        type: "text",
        content: '最近发现近视眼越来越严重了，，打开 钱包看不见钱',
        isWho: '1',
        headSrc: "../../../imgs/home/036.jpg"
      },
      {
        type: "audio",
        content: '15s',
        isWho: '1',
        headSrc: "../../../imgs/home/036.jpg"
      },
      {
        type: "image",
        src: '../../../imgs/home/070.jpg',
        isWho: '1',
        headSrc: "../../../imgs/home/036.jpg"
      },
      {
        type: "text",
        content: '哈哈哈哈哈哈哈哈',
        isWho: '0',
        headSrc: "../../../imgs/home/070.jpg"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '5元麻将房间'
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