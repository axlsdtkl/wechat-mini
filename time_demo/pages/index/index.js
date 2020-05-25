import { dateFormat } from "../../utils/index.js"
const app = getApp()

Page({
  data: {
    timer: null,
    currentDate: ""
  },
  onLoad: function () {
    this.setCurrentDate()
  },
  onHide: function () {
    if (this.data.timer) {
      clearTimeout(this.data.timer)
    }
  },
  setCurrentDate() {
    const that = this
    //setInterval是根据设置的时间来回调的，比如每秒回调一次
    let _timer = setInterval(() => {//
      const now = dateFormat(new Date(), "MM月dd日 hh:mm:ss")//前面为获得时间，后面为生成的文本基本格式
      console.log(now)
      that.setData({//将时间更新为现在的最新时间
        currentDate: now
      })
    }, 1000)//设置为每1000毫秒回调一次
    that.setData({
      timer: _timer
    })
  }
})
