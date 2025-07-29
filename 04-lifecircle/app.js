// app.js
App({

    /**
     * 小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     * 热启动只会触发 onShow，不会触发 onLaunch
     */
    onLaunch() {
        console.log('onLaunch 小程序初始化完成时')
    },

    /**
     * 小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow() {
        console.log('onShow 小程序启动，或从后台进入前台显示')
    },

    /**
     * 当小程序从前台进入后台
     */
    onHide() {
        console.log('onHide 小程序前台进入后台')
    },

    /**
     * 
     */
    onError() {
        console.log('onError')
    }

})
