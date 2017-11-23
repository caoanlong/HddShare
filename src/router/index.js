import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	// mode: 'history',
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
	      	path: '/ConsignorDownload',
	      	name: 'ConsignorDownload',
	      	component: resolve => require(['@/components/ConsignorDownload'], resolve)
	    },
	    {
	      	path: '/DriverDownload',
	      	name: 'DriverDownload',
	      	component: resolve => require(['@/components/DriverDownload'], resolve)
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
	    {
	      	path: '/agreement',
	      	name: 'agreement',
	      	component: resolve => require(['@/components/agreement'], resolve)
	    },
	    {
          	path: '/infoFee',
          	name: 'infoFee',
          	component: resolve => require(['@/components/infoFee'], resolve)
        },
        {
          	path: '/transFee',
          	name: 'transFee',
          	component: resolve => require(['@/components/transFee'], resolve)
        },
	    {
	      	path: '/error',
	      	name: 'error',
	      	component: resolve => require(['@/components/error'], resolve)
	    },
	    {
	      	path: '/updata',
	      	name: 'updata',
	      	component: resolve => require(['@/components/updata'], resolve)
	    }
  	]
})
