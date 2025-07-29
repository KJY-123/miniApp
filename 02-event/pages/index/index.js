// index.js
Page({

    parentHandler () {
        console.log('父组件绑定的事件')
    },

    btnHandler () {
        console.log('子组件绑定的事件')
    },

    // 事件处理函数
    handler (event) {
        console.log('事件触发了', event)
    },

    getInputVal (event) {
        console.log(event.detail.value)
    }

})
