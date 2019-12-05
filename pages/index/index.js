const DB = wx.cloud.database().collection("menu")

Page({
  //记录数据
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  // //添加数据
  // addData() {
  //   DB.add({
  //     data: {
  //       uid: "00010",
  //       name: "Alex",
  //     },
  //     success(res) {
  //       console.log("添加成功", res)
  //     },
  //     fail(res) {
  //       console.log("ERROR!", res)
  //     }
  //   })
  // },
  //定义变量
  data:{
    issubmit:false,
    name:"",
    price:""
  },
  //获取Openid
  getOpenid() {
    wx.cloud.callFunction({
      name: "getOpenid",
      success(res) {
        console.log("1", res)
      },
      fail(res) {
        console.log("2", res)
      }
    })
  },

  //数据库获取APi
  getApi() {
    wx.cloud.database().collection("menu").get({
      success(res) {
        console.log("获取Api成功", res)
      },
      fail(res) {
        console.log("获取Api失败", res)
      }

    })
  },

  //获取云数据
  getData() {
    wx.cloud.callFunction({
      name: "getData",
      success(res) {
        console.log("获取云数据成功", res)
      },
      fail(res) {
        console.log("获取云数据失败", res)
      }
    })
  },

  formSubmit: function(e) {
    console.log(e.detail.value);
    if (e.detail.value.name.length == 0 || e.detail.value.name.length >= 10) {
      wx.showToast({
        title: '商品名不得为空或过长！',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function() {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.price.length <= 0) {
      wx.showToast({
        title: '价格错误!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function() {
        wx.hideToast()
      }, 2000)
    }
  },
//添加商品
  addGoods() {
    DB.add({
      data: {
        name:'',
        price: '',
      },
      success(res) {
        console.log("添加成功", res)
      },
      fail(res) {
        console.log("ERROR!", res)
      }
    })
  },
})