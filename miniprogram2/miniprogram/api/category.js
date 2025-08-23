// 导入封装的网络请求模块
import http from '../utils/http'

/**
 * @description 获取商品分类的数据
 */
export const reqCategoryData = () => {
    return http.get('/index/findCategoryTree')
}