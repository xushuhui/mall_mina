class Paging {
  start
  count
  url
  locker = false
  constructor(url, count = 10, start = 0) {
    this.url = url
    this.count = count
    this.start = start
  }
  _getLocker(){
    if(this.locker){
      return false
    }
    this.locker = true
    return true
  }
  _releaseLocker(){
    this.locker = false
  }
  getMoreData() {


  }
}