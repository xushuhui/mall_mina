import {
  Http
} from "../utils/http"

class Category {
  static async getHomeLocationC() {
    return await Http.request({
      //FIXME::url:`categroy/grid/all`
      url: `category.json`
    })
  }
}
export {
  Category
}