const url = "http://jsd.yscoffee.plus/"
const request = (api, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url+api,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
export default request