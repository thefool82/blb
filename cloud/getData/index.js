// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "blb-93htp"
})

// 云函数获取数据
exports.main = async(event, context) => {
  return cloud.database().collection("menu").get();
}