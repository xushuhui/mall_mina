import {
  config
} from "../config/config.js"
class Http {
  static request({
    url,
    data,
    callback,
    method = 'GET'
  }) {
    wx.request({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header: {
        appKey: config.appKey
      },
      success(res) {
        callback(res.data)
      }
    })
  }
}
export {
  Http
}