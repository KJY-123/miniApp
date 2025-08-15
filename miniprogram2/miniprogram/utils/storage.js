export const setStorage = (key, val) => {
    try {
        wx.setStorageSync(key, val)
    } catch (error) {
        console.log(`存储指定 ${key} 数据发生了异常`, error)
    }
}

export const getStorage = (key) => {
    try {
        return wx.getStorageSync(key)
    } catch (error) {
        console.log(`读取指定 ${key} 数据发生了异常`, error)
    }
}

export const removeStorage = (key) =>{
    try {
        wx.removeStorageSync(key)
    } catch (error) {
        console.log(`移除指定 ${key} 数据发生了异常`, error)
    }
}

export const clearStorage = () => {
    try {
        wx.clearStorageSync()
    } catch (error) {
        console.log(`清空本地全部数据发生了异常`, error)
    }
}

export const asyncSetStorage = (key, data) => {
    return new Promise((resolve) => {
        wx.setStorage({
            key,
            data,
            complete(res) {
                resolve(res)
            }
        })
    })
}

export const asyncGetStorage = (key) => {
    return new Promise((resolve) => {
        wx.getStorage({
            key,
            complete(res) {
                resolve(res)
            }
        })
    })
}

export const asyncRemoveStorage = (key) => {
    return new Promise((resolve) => {
        wx.removeStorage({
            key,
            complete(res) {
                resolve(res)
            }
        })
    })
}

export const asyncClearStorage = (key) => {
    return new Promise((resolve) => {
        wx.clearStorage({
            complete(res) {
                resolve(res)
            }
        })
    })
}