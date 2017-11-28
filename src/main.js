// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import BaiduMap from 'vue-baidu-map'
import _global from './common/global.js'

Vue.use(vueResource)
Vue.use(_global)

// Vue.http.interceptors.push((request, next) => {
    //请求发送前的处理逻辑
    // request.headers['JSESSIONID'] = '216d2847-b77e-4436-b7dd-6f79d837816c'
    // request.headers.set('HDD-Client-Tag', '216d2847-b77e-4436-b7dd-6f79d837816c')
   //  request.headers.set('HDD_API_CURRENT_USER', '')
   //  const authorization = localStorage.getItem('authorization');
   //  if (authorization) {
   //    	request.headers.set('Authorization', authorization);
   //  }
  	// next();
// });

Vue.config.productionTip = false

// Vue.http.interceptors.push((request, next) => {
//     let token = localStorage.getItem('token')
//     request.headers.set('HDD_API_CURRENT_USER', 'aaaa')
//     next((resbonse) => {
//         if (resbonse.body.code == 1001 || resbonse.body.code == 1002 || resbonse.body.code == 1003) {
//             localStorage.removeItem('token')
//             window.location.href = '/FKCFront/#/login'
//             // window.location.href = '/#/login'
//         }
//     })
// })

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'AjsVKu7N9iBX2klb9ktqGfAvA5dkfRBs'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
