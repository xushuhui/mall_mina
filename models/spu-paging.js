import {
  Http
} from "../utils/http";
import { Paging } from "../utils/paging";

class SpuPaging {
  static  getLatestPaging() {
    return new Paging({
      //FIXME::url:`spu/latest`
      url: `spu.json`
    })

  }
}
export {
  SpuPaging
}