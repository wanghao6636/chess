//app.js
App({
  onLaunch: function () {
    this.globalData.statusBarHeight = wx.getMenuButtonBoundingClientRect().top;
    this.globalData.MenuButtonHight = wx.getMenuButtonBoundingClientRect().height;
    this.globalData.MenuButtonWidth = wx.getMenuButtonBoundingClientRect().width;
  },
  globalData: {
    userInfo: null,
    statusBarHeight: '',
    MenuButtonHight: '',
    MenuButtonWidth: '',
  }
})