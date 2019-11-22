import { Http } from "../utils/http";
class Theme {
  static getHomeLocationA() {
    Http.request({
      url: `theme/by/names`,
      data: {
        names: 't-1',
      },
      callback: data => {
        callback(data)
      }
    })
  }
}

export {
  Theme
}