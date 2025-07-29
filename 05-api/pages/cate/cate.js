// pages/cate/cate.js
Page({

    data: {
        list: [ 1, 2, 3 ],
        // list: [{id: 1, name: 'tom'}],
        num: 1,
        userInfo: {
            name: 'tom',
            age: 10,
            test: 1
        }
    },

    // 更新num
    updateNum () {

        // 获取数据
        // console.log(this.data.num)

        // 通过赋值的方法直接修改数据
        // 能够修改数据，但是不能改变页面上的数据
        // this.data.num += 1


        // this.setData的两个作用
        // 1.更新数据
        // 2.修改页面上的数据
        this.setData({
            // key: 是需要更新的数据
            // value：是最新的值
            num: this.data.num + 1
        })

    },

    // 更新userInfo
    updateUserInfo () {

        // 新增单个 / 多个属性
        // this.setData({
        //     // 如果给对象新增属性，可以将 key 写成数据路径的方式 a.b.c
        //     'userInfo.name': 'tom',
        //     'userInfo.age': 10
        // })

        // 修改单个 / 多个属性
        // this.setData({
        //     // 如果需要修改对象属性，可以将 key 写成数据路径的方式 a.b.c
        //     'userInfo.name': 'jerry',
        //     'userInfo.age': 18
        // })

        // 目前进行新增和修改都是使用数据路径，数据量较小还行，数据量大就太麻烦了
        // 可以使用 ES6 提供的展开运算符 和 Object.assign()

        // ES6 提供的展开运算符
        // const userInfo = {
        //     ...this.data.userInfo,
        //     name: 'jerry',
        //     age: 18
        // }

        // this.setData({userInfo})

        // Object.assign() 将多个对象合并为一个对象
        // const userInfo = Object.assign(this.data.userInfo, { name: 'jerry' }, { age: '19' })
        // this.setData({userInfo})

        // 删除单个属性
        // delete this.data.userInfo.age
        // this.setData({
        //     userInfo: this.data.userInfo
        // })

        // 删除多个属性
        const { age, test, ...rest } = this.data.userInfo
        
        this.setData({
            userInfo: rest
        })
    },

    // 更新list
    updateList () {

        // 新增数组元素
        // 如果直接使用 push 方法，可以更新data，但是不能更新页面中的数据
        // this.data.list.push(4)

        // this.data.list.push(4)
        // this.setData({
        //     list: this.data.list
        // })

        // const newList = this.data.list.concat(4)
        // this.setData({list: newList})

        // const newList = [...this.data.list, 4]
        // this.setData({list: newList})

        // 修改数组元素
        // this.setData({
            // 'list[1]': 6
            // 'list[0].name': 'jerry'
        // })

        // 删除数组元素
        // this.data.list.splice(1, 1)
        // this.setData({
        //     list: this.data.list
        // })

        const newList = this.data.list.filter(item => item !== 2)
        this.setData({list: newList})
    }

})