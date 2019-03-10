const newsData = require("../../data/newsdata.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //生命周期函数--监听页面加载
  onLoad: function(options) {
    //初始化options页面数据跳转所带来的参数
    this.setData(newsData.initData[options.newsid]);
    this.setData({
      newsid: options.newsid
    });
    //第一次进入的时候是否存在本地储存以及是否收藏
    var newsCollect = wx.getStorageSync('newsCollect');
    //如果newsCollect存在，则代表以前收藏过或取消过收藏
    if (newsCollect) {
      var newsCollect = newsCollect[options.newsid];
      this.setData({
        collected: newsCollect
      })
    } else {
      //第一次进入，根本存在数据
      var newsCollect = {};
      //我把当前唯一id扔到newsCollect对象中，然后默认指定false
      newsCollect[options.newsid] = false;
      //扔到本地储存中
      wx.setStorageSync('newsCollect', newsCollect);
    }
  },

  onCollected: function(){
    //注意：newsCollect所有数据集合
    var newsCollect = wx.getStorageSync('newsCollect');
    //注意：newsCollect是前一条数据
    var newCollect = newsCollect[this.data.newsid];
    //点击的时候，如果收藏则取消，如果没收藏则收藏
    newCollect = !newCollect;
    //更新到本地储存中
    newsCollect[this.data.newsid] = newCollect;
    wx.setStorageSync('newsCollect', newsCollect);
    this.setData({
      collected: newCollect
    });
    wx.showToast({
      title: newCollect?'收藏成功' : '取消成功',
      icon: 'success',
      duration: 800
    })
  },
})