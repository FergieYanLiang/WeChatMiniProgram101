//app.js
App({
  onLaunch: function () {
    // Define and update storage
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // Log in
    wx.login({
      success: res => {
        // Send res.code to acquire "openId", "sessionKey", "unionId"
      }
    })
    // Get user info after getting permission
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // When setting is authorized by user. Run "getUserInfo" function to acqure profile image, nickname without display of pop-up window.
          wx.getUserInfo({
            success: res => {
              // Send res.code to acquire "unionId"
              this.globalData.userInfo = res.userInfo
              // If userInfo is ready (= null), send res to redefine userInfo instead.
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})