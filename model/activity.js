import {
  Http
} from "../utils/http";

class Activity {
  static locationD = 'a-2'
  static async getHomeLocationD() {
    return await Http.request({
      //FIXME::url:`activity/name/${Activity.locationD}`
      url: `activity.json`
    })
  }
}
export {
  Activity
}