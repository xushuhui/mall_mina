import {
  Http
} from "../utils/http";

class Spu {
  static async getLatest() {
    return await Http.request({
      //FIXME::url:`categroy/grid/all`
      url: `spu.json`
    })
  }
}