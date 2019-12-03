import {
  Http
} from "../utils/http";
class Theme {
  static locationA = 't-1'
  static locationE = 't-2'
  static locationF = 't-3'
  static locationH = 't-4'
  themes = []
  async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
    this.themes = await Http.request({
      //FIXME::url: `theme/by/names`,
      url:`themes.json`,
      data: {
        names
      }
    })
    console.log(this.themes.data);
  }
  getHomeLocationA() {
    return this.themes.find(t => t.name === Theme.locationA)
  }
  getHomeLocationE() {
    return this.themes.find(t => t.name === Theme.locationE)
  }
  getHomeLocationF() {
    return this.themes.find(t => t.name === Theme.locationF)
  }
  getHomeLocationH() {
    return this.themes.find(t => t.name === Theme.locationH)
  }
  static getHomeLocationESpu() {
    return this.getThemeSpuByName(Theme.locationE)
  }
  static getThemeSpuByName(name) {
    const theme = Http.request({
      //FIXME::url: `theme/name/${name}/with_spu`
      url: `spu.json`
    })
  }
}

export {
  Theme
}