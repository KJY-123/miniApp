// import { toast } from './utils/extendApi'
import './utils/extendApi'

import { 
    setStorage, 
    getStorage, 
    removeStorage, 
    clearStorage, 
    asyncSetStorage, 
    asyncGetStorage, 
    asyncRemoveStorage, 
    asyncClearStorage 
} from './utils/storage'

import instance from './utils/http'

App({
    async onShow() {
        instance.get('/index/findBanner', { test: 111 }, {timeout: 20000})
        // instance.get('/cart/getCartList', { test: 111 }, {timeout: 20000})
    }
})
