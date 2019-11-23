// pages/home.js
import{Theme} from "../../model/theme"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme:null
  },


  onLoad (options) {
    let themeA = Theme.getHomeLocationA()
    this.setData({
      topTheme:themeA[0]
    })
  },

   onPullDownRefresh () {

  },

  onReachBottom () {

  },


  onShareAppMessage () {

  }
})