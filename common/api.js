const Get = (api, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: api,
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
// 获取首页轮播
export const Banner = () => Get("/index/banner", {});
// 获取首页包厢
export const IndexBook = (data) => Get("/index/book", data);
// // 上传文件
// export const fileUpload = (data) => Get("/index/book", data);
// 获取用户信息 使用openId获取
export const userInfo = (data) => Get("/user/info", data);
//注册
export const register = (data) => Get("/user/register", data);
//创建球队
export const createTeam = (data) => Get("/team/create", data);
//球队信息
export const teamInfo = (data) => Get("/team/info", data);
//球队队员创建
export const createMember = (data) => Get("/team/member/create", data);
//队员信息修改
export const revampMember = (data) => Get("/team/member/revamp", data);
//球队信息修改
export const revampTeam = (data) => Get("/team/revamp", data);
//约球 场地列表
export const bookList = (data) => Get("/area/book/list", data);
//场馆价格
export const areaPrice = (data) => Get("/area/price", data);
//下单
export const toOrder = (data) => Get("/order", data);
//订单列表
export const orderList = (data) => Get("/order/order/list", data);
