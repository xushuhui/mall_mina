import { Http } from "../utils/http";
class Theme {
  static locationA = 't-1'
  static locationE = 't-2'
  static locationF = 't-3'
  static locationH = 't-4'
  static async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
    return await Http.request({
      url: `theme/by/names`,
      data: {
        names: names,
      }
    })
  }

}

export {
  Theme
}