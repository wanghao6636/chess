// pages/takeOrder/takeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelete: false,
    arr1: ['原味', '加辣'],
    arr2: ['加汤', '不加汤'],
    index1: 0,
    index2: 2,
    cartShow: false,
    timeHeight: 200,
    cartBoxs: false,
    shopNum: 1
  },
  showSelete() {
    this.setData({
      isSelete: true
    })
  },
  // 加入购物车
  addCart() {
    this.setData({
      isSelete: false
    })
  },
  // 选择规格
  seleteDetail(e) {
    let type = e.currentTarget.dataset.type;
    let index = e.currentTarget.dataset.index;
    if (type == 1) {
      this.setData({
        index1: index
      })
    } else {
      this.setData({
        index2: index
      })
    }
  },
  // 打开购物车
  openCarts() {
    if (!this.data.cartShow) {
      this.setData({
        cartShow: true,
        // cartBoxs: true
      })
      let timer = setTimeout(() => {
        clearTimeout(timer)
        this.setData({
          cartBoxs: true
        })
      }, 50);
    } else {
      this.cartHides();
    }
  },
  // 关闭购物车
  cartHides() {
    this.setData({
      cartBoxs: false
    })
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.setData({
        cartShow: false
      })
    }, 300);
    // cartBoxs
  },
  // 阻止冒泡
  stopMp() {},
  // 付款
  toPaying() {
    wx.navigateTo({
      url: './trueOrder/trueOrder',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bfb = 750 / (wx.getSystemInfoSync().windowWidth)
    this.setData({
      timeHeight: (wx.getSystemInfoSync().windowHeight * bfb) - 530
    })
  },
  // 操作数据
  changeNum(e) {
    let num = Number(e.currentTarget.dataset.num);
    if (this.data.shopNum <= 1 && num == -1) {
      return;
    }
    this.setData({
      shopNum: this.data.shopNum + num
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