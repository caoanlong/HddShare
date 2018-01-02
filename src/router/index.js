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
          	path: '/statement',
          	name: 'statement',
          	component: resolve => require(['@/components/statement'], resolve)
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
	    },
	    {
	      	path: '/findGoods',
	      	name: 'findGoods',
	      	component: resolve => require(['@/components/findGoods'], resolve)
		},
		{
			path: '/goodsLine',
			name: 'goodsLine',
			component: resolve => require(['@/components/goodsLine'], resolve)
	  	},
	    {
	      	path: '/findTruck',
	      	name: 'findTruck',
	      	component: resolve => require(['@/components/findTruck'], resolve)
		},
		{
			path: '/findTruckByMap',
			name: 'findTruckByMap',
			component: resolve => require(['@/components/findTruckByMap'], resolve)
	  	},
		{
			path: '/truckLocation',
			name: 'truckLocation',
			component: resolve => require(['@/components/truckLocation'], resolve)
	  	},
	    {
	      	path: '/aboutHdd',
	      	name: 'aboutHdd',
	      	component: resolve => require(['@/components/aboutHdd'], resolve)
	    },
	    {
	      	path: '/bankList',
	      	name: 'bankList',
	      	component: resolve => require(['@/components/bankList'], resolve)
	    },
	    {
	      	path: '/charge',
	      	name: 'charge',
	      	component: resolve => require(['@/components/charge'], resolve)
	    },
	    {
	      	path: '/chargeRules',
	      	name: 'chargeRules',
	      	component: resolve => require(['@/components/chargeRules'], resolve)
	    },
	    {
	      	path: '/Faq',
	      	name: 'Faq',
	      	component: resolve => require(['@/components/Faq'], resolve)
	    },
	    {
	      	path: '/FaqDetail',
	      	name: 'FaqDetail',
	      	component: resolve => require(['@/components/FaqDetail'], resolve)
	    }
  	]
})
