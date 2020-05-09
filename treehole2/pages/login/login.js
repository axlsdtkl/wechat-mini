// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
  },
  regist: function (e) {
    wx.redirectTo({
      url: '/pages/enroll/enroll'
    })
  },
  loginin: function (e) {
    var that = this
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.username == '') {
      wx.showModal({
        title: '提示！',
        content: '请输入用户名！',
        showCancel: false,
        success(res) { }
      })
    }else if (that.data.password == '') {
      wx.showModal({
        title: '提示！',
        content: '请输入密码！',
        showCancel: false,
        success(res) { }
      })
    }else {
      wx.redirectTo({
        url: '/pages/square/square'
      })
    }
  },
  usernameInput: function (e) {
    this.data.username = e.detail.value
  },

  passwordInput: function (e) {
    this.data.password = e.detail.value
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