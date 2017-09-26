import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
	    {
	      path: '/',
	      name: 'Home',
	      component: resolve => require(['@/components/Home'], resolve)
	    },
	    {
	      path: '/AppDownload',
	      name: 'AppDownload',
	      component: resolve => require(['@/components/AppDownload'], resolve)
	    },
	    {
	      path: '/App1Download',
	      name: 'App1Download',
	      component: resolve => require(['@/components/App1Download'], resolve)
	    },
	    {
	      path: '/App2Download',
	      name: 'App2Download',
	      component: resolve => require(['@/components/App2Download'], resolve)
	    },
	    {
	      path: '/goodsDetail',
	      name: 'goodsDetail',
	      component: resolve => require(['@/components/goodsDetail'], resolve)
	    },
	    {
	      path: '/truckDetail',
	      name: 'truckDetail',
	      component: resolve => require(['@/components/truckDetail'], resolve)
	    },
  	]
})
