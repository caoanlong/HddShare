import Base from './Base'
import request from '../common/request'

class Pay extends Base {
    getSupportBankList(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/bankCard/getSupportBankList',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new Pay('/pay', request)