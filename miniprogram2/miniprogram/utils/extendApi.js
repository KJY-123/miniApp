// 在使用 toast 方法时，可以传入参数，也可以不传入参数
// 如果需要传入参数，要传入对象作为参数
// const toast = (options = () =>{})

/**
 * @description 消息提示框
 * @param {*} param0 
 */
const toast = ({ title = '数据加载中...', icon = 'none', duration = 2000, mask = true } = {}) =>{
    // 如果用户传入了对象作为参数
    // 在形参位置通过解构的方式获取用户传入的参数，同时设置默认值
    wx.showToast({
      title,
      icon,
      duration,
      mask
    })
}

// 调用 model 方法时，可以传递参数，也可以不传递参数
// 如果不传递参数，默认值就是空对象
// 如果传递参数，参数需要是一个对象，对象中的属性需要和 wx.showModal 参数保持一致
const modal = (options = {}) => {
    // 在方法内部需要通过 Promise 返回用户的操作
    // 如果用户点击了确定，需要通过 resolve 返回 true
    // 如果用户点击了取消，需要通过 resolve 返回 false
    return new Promise((resolve) => {

        // 默认参数
        const defaultOpt = {
            title: '提示',
            content: '您确定执行该操作吗？',
            comfirmColor: '#f3514f',
        }

        // 通过 Object.assign 方法进行参数合并
        const opts = Object.assign({}, defaultOpt, options)

        wx.showModal({
            ...opts,
            complete: ({ confirm, cancel}) => {
                confirm && resolve(true)
                cancel && resolve(false)
            }
        })

    })
}

// 如果有很多 .js 文件，都需要调用 toast 方法
// 每次使用都需要导入 toast，然后进行调用，太麻烦
// 可以将 toast 方法挂载到 wx 全局对象上
// 如果想挂载到全局对象生效，必须先执行一次
wx.toast = toast
wx.modal = modal

// 如果其他 .js 文件，需要使用 toast 方法
// 需要先倒入 toast， 然后进行调用才可以
// export { toast, modal }

