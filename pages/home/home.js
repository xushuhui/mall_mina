// pages/home.js
import {
  Theme
} from "../../models/theme"
import {
  Banner
} from "../../models/banner"
import {
  Category
} from "../../models/category"
import {
  Activity
} from "../../models/activity"
import { spuPaging } from "../../models/spu-paging"
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
    bannerG: null,
    loadingType: "loading"
  },
  async onLoad(options) {
    this.initAllData()
    this.initBottomSpuList()
  },
  async initBottomSpuList() {
    const paging = spuPaging.getLatestPaging()
    const data = await paging.getMoreData()
    if (!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
  },
  async initAllData() {
    const themeModel = new Theme()
    await themeModel.getThemes()

    const themeA = themeModel.getHomeLocationA()
    const themeE = themeModel.getHomeLocationE()
    let themeESpu = []
    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu()
      if (data) {

        themeESpu = data.spu_list.slice(0, 6)
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

  onReachBottom: async function () {
    const data = await this.data.spuPaging.getMoreData()
    if (!data) {
      return
    }
    wx.lin.rederWaterFlow(data.items)
    if (!data.moreData) {
      loadingType: "end"
    }
  },


  onShareAppMessage() {

  }
})