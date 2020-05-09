// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firco:"#000000",
    secco:"#979797",
    list:[
      {
        face_url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=447979932,3108003765&fm=26&gp=0.jpg",
        username:"哆啦B梦",
        send_timestamp:"2019-7-6 14:42",
        centent:"dfsfdsfdsfsdfsfsfdfsddsddddddddddddddddddddddddddddddddddddddddddddfsdfdsdfsfsad",
        total_likes:99,
      },
      {
        face_url:"/images/like.png",
        username:"哆啦C梦",
        send_timestamp:"2019-8-6 14:42",
        centent:"dfsfdsfdsfASFDSFSfdsdfsfsad",
        total_likes:99,
      },
      {
        face_url:"/images/likeplus.png",
        username:"天线宝宝",
        send_timestamp:"2019-8-6 14:5454",
        centent:"dfsfdsfdsfAfdsfsdafFDSFSfdsdfsfsad",
        total_likes:99,
      },
      {
        face_url:"/images/likeplus.png",
        username:"皮卡丘",
        send_timestamp:"2019-128-6 14:5454",
        centent:"dfsfdsfdsfAfdsfsdafFDSFSfdsdfsfsad",
        total_likes:1199,
      }
    ]
  },

  first_select:function(){
  },
  second_select:function(){
    wx.navigateTo({
      url:'../commit/commit'
    })
  },
  third_select:function(){
    wx.redirectTo({
      url:'/pages/mine/mine'
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