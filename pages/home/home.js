// pages/home.js
import {
  Theme
} from "../../model/theme"
import {
  Banner
} from "../../model/banner"
import {
  Category
} from "../../model/category"
import {
  Activity
} from "../../model/activity"
Page({
  data: {
    themeA: null,
    themeE: null,
    themeESpu: [],
    themeF: null,
    themeH: null,
    bannerB: null,
    grid: [],
    activityD: null,
    bannerG: null
  },
  async onLoad(options) {
    this.initAllData()
  },
  async initAllData() {
    const themeModel = new Theme()
    await themeModel.getThemes()
    const themeA = themeModel.getHomeLocationA()
    const themeE = themeModel.getHomeLocationE()
    let themeESpu = []
    if (themeE.online) {
      let data = await Theme.getHomeLocationESpu()
      if (data) {
        themeESpu = data.spu_list.slice(0, 8)
      }
    }
    const themeF = themeModel.getHomeLocationF()

    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    const bannerG = await Banner.getHomeLocationG()
    const themeH = themeModel.getHomeLocationH()
    this.setData({
      themeA,
      themeE,
      themeESpu,
      themeF,

      bannerB,
      grid,
      activityD,
      bannerG,
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