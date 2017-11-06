// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import _global from './common/global.js'

Vue.use(vueResource)
Vue.use(_global)

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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
