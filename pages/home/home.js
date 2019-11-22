// pages/home.js
import{Theme} from "../../model/theme"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme:null
  },


  onLoad: function (options) {
    Theme.getHomeLocationA(data=>{
      this.setData({
        topTheme:data[0]
      })
    })
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  }
})