import { reqCategoryData } from '../../api/category'
Page({
    // 初始化数据
    data: {
        categoryList: [],
        activeIndex: 0 // 被激活那一项的索引，默认为0
    },

    // 实现一级分类的切换效果
    updateActive(event) {
        const { index } = event.currentTarget.dataset
        this.setData({
            activeIndex: index
        })
    },

    // 获取商品分类的数据
    async getCategoryData() {

        const res = await reqCategoryData()

        if (res.code === 200) {
            this.setData({
                categoryList: res.data
            })
        }
    },

    // 监听页面的加载
    onLoad() {
        this.getCategoryData()
    }
})
