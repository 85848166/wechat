//后期获取数据
const newsData = require("../data/newsdata.js")
// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,//是否显示面板指示点
    autoplay: true,//是否自动切换
    interval: 3000, //自动切换时间间隔
    duration: 1000,//滑动动画时长
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this,setData可以让试图重绘
    this.setData({
      userData: newsData.initData
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

  },
  //跳转详情页
  getNewsDetail: function (event) {
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid=' + newsId,
    })
  }
})