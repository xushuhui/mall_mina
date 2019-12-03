import {
  Http
} from "../utils/http"

class Banner {
  static locationB = 'b-1'
  static locationG = 'b-2'
  static async getHomeLocationB() {
    return await Http.request({
      //FIXME::url: `banner/name/${Banner.locationB}`
      url: `banner.json`
    })
  }
  static async getHomeLocationG() {
    return await Http.request({
      //FIXME::url: `banner/name/${Banner.locationG}`
      url: `banner2.json`
    })
  }
}

export {
  Banner
}