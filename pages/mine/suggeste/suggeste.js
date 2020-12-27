// pages/mine/suggeste/suggeste.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1: [{
        type: '1',
        text: '支付问题'
      },
      {
        type: '2',
        text: '服务问题'
      },
      {
        type: '3',
        text: '其他'
      },
    ],
    typeActived: '0',
    upImages: [],
    suggesion:'',
    phone:''
  },
  seleteQType(e) {
    let type = e.currentTarget.dataset.type;
    this.setData({
      typeActived: type
    })
  },
  // 上传图片
  uploadImage() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log(res)
        if (res.errMsg === "chooseImage:ok") {
          this.setData({
            upImages: res.tempFilePaths
          })
        } else {
          wx.showToast({
            title: '选择图片失败',
            icon: 'none'
          })
        }
      }
    })
  },
  // 删除图片
  deleImage(e) {
    let index = e.currentTarget.dataset.index;
    let upImages = this.data.upImages;
    upImages.splice(index, 1);
    this.setData({
      upImages
    })
  },
  // 获取文字内容
  bindText(e){
    let type = e.currentTarget.dataset.type;
    let inputBody = e.detail.value;
    if(type=='phone'){
      this.setData({
        phone:inputBody
      })
    }
    if(type=='text'){
      this.setData({
        suggesion:inputBody
      })
    }
  },
  //提交 
  toSubmit(){
    let obj = {
      upImages:this.data.upImages,
      phone:this.data.phone,
      suggesion:this.data.suggesion,
      qtype:this.data.arr1[this.data.typeActived].text
    }
    console.log(obj);
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