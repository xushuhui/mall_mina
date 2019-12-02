import {
  Http
} from "../utils/http"

class Banner {
  static async getHomeLocationB() {
    return await Http.request({
      url: `categroy/grid/all`
    })
  }
}

export {
  Banner
}