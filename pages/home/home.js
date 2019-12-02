// pages/home.js
import { Theme } from "../../model/theme"
import { Banner } from "../../model/banner"
import { Category } from "../../model/category"
import { Activity } from "../../model/activity"
Page({
  data: {
    themeA: null,
    themeE: null,
    themeESpu:[],
    themeF: null,
    themeH: null,
    bannerB: null,
    grid: [],
    activityD: null
  },
  async onLoad(options) {
    this.initAllData()
  },
  async initAllData() {
    const themeModel = new Theme()
    await themeModel.getThemes()
    const themeA = await themeModel.getHomeLocationA()
    const themeE = await themeModel.getHomeLocationE()
    let themeESpu = []
    if (themeE.online) {
      let data = await Theme.getHomeLocationESpu()
      if (data) {
        themeESpu = data.spu_list.slice(0, 8)
      }
    }
    const themeF = await themeModel.getHomeLocationF()
    const themeH = await themeModel.getHomeLocationH()
    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA,
      themeE,
      themeESpu,
      themeF,
      themeH,
      bannerB,
      grid,
      activityD,

    })
  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },


  onShareAppMessage() {

  }
})