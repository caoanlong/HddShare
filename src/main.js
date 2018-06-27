// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import BaiduMap from 'vue-baidu-map'
import _global from './common/global.js'
import msg from '../src/components/common/msg'

Vue.use(vueResource)
Vue.use(_global)
Vue.use(msg)

Vue.config.productionTip = false

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
