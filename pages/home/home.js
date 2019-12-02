// pages/home.js
import { Theme } from "../../model/theme"
import { Banner } from "../../model/banner"
import { Category } from "../../model/category"
import { Activity } from "../../model/activity"
Page({

  data: {
    themeA: null,
    bannerB: null,
    grid: [],
    activityD:null
  },


  onLoad(options) {
    this.initAllData()
  },
  async initAllData() {
    const themes = await Theme.getThemes()
    const themeA = themes.find(t=>t.name==='t-1')
    const themeE = themes.find(t=>t.name==='t-2')
    const themeF = themes.find(t=>t.name==='t-3')
    const themeH = themes.find(t=>t.name==='t-4')
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD= await Activity.getHomeLocationD()
    this.setData({
      themeA,
      bannerB,
      grid,
      activityD,
      themeE,
      themeF,
      themeH,
    })
  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },


  onShareAppMessage() {

  }
})