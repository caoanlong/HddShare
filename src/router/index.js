import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
			meta: { title: 'App下载' },
	      	component: resolve => require(['@/components/AppDownload'], resolve)
	    },
	    {
	      	path: '/ConsignorDownload',
			name: 'ConsignorDownload',
			meta: { title: '货主下载' },
	      	component: resolve => require(['@/components/ConsignorDownload'], resolve)
	    },
	    {
	      	path: '/DriverDownload',
			name: 'DriverDownload',
			meta: { title: '司机下载' },
	      	component: resolve => require(['@/components/DriverDownload'], resolve)
	    },
	    {
	      	path: '/goodsDetail',
			name: 'goodsDetail',
			meta: { title: '货源详情' },
	      	component: resolve => require(['@/components/goodsDetail'], resolve)
	    },
	    {
	      	path: '/truckDetail',
			name: 'truckDetail',
			meta: { title: '车辆详情' },
	      	component: resolve => require(['@/components/truckDetail'], resolve)
	    },
	    {
	      	path: '/agreement',
			name: 'agreement',
			meta: { title: '协议' },
	      	component: resolve => require(['@/components/agreement'], resolve)
	    },
	    {
          	path: '/infoFee',
			name: 'infoFee',
			meta: { title: '信息费协议' },
          	component: resolve => require(['@/components/infoFee'], resolve)
        },
        {
          	path: '/transFee',
			name: 'transFee',
			meta: { title: '运输费协议' },
          	component: resolve => require(['@/components/transFee'], resolve)
        },
        {
          	path: '/statement',
			name: 'statement',
			meta: { title: '信息费交易声明' },
          	component: resolve => require(['@/components/statement'], resolve)
        },
	    {
	      	path: '/error',
			name: 'error',
			meta: { title: '错误' },
	      	component: resolve => require(['@/components/error'], resolve)
	    },
	    {
	      	path: '/updata',
			name: 'updata',
			meta: { title: '版本更新' },
	      	component: resolve => require(['@/components/updata'], resolve)
	    },
	    {
	      	path: '/findGoods',
			name: 'findGoods',
			meta: { title: '寻找货源' },
	      	component: resolve => require(['@/components/findGoods'], resolve)
		},
		{
			path: '/goodsLine',
			name: 'goodsLine',
			meta: { title: '查看线路' },
			component: resolve => require(['@/components/goodsLine'], resolve)
	  	},
	    {
	      	path: '/findTruck',
			name: 'findTruck',
			meta: { title: '寻找车源' },
	      	component: resolve => require(['@/components/findTruck'], resolve)
		},
		{
			path: '/findTruckByMap',
			name: 'findTruckByMap',
			meta: { title: '地图找车' },
			component: resolve => require(['@/components/findTruckByMap'], resolve)
	  	},
		{
			path: '/truckLocation',
			name: 'truckLocation',
			meta: { title: '查看位置' },
			component: resolve => require(['@/components/truckLocation'], resolve)
	  	},
	    {
	      	path: '/aboutHdd',
			name: 'aboutHdd',
			meta: { title: '关于货多多' },
	      	component: resolve => require(['@/components/aboutHdd'], resolve)
	    },
	    {
	      	path: '/bankList',
			name: 'bankList',
			meta: { title: '支持银行列表' },
	      	component: resolve => require(['@/components/bankList'], resolve)
	    },
	    {
	      	path: '/FaqList',
			name: 'FaqList',
			meta: { title: '常见问题' },
	      	component: resolve => require(['@/components/FaqList'], resolve)
	    },
	    {
	      	path: '/FaqDetail',
			name: 'FaqDetail',
			meta: { title: '常见问题详情' },
	      	component: resolve => require(['@/components/FaqDetail'], resolve)
	    },
	    {
	      	path: '/PaymentAgreement',
			name: 'PaymentAgreement',
			meta: { title: '支付协议' },
	      	component: resolve => require(['@/components/PaymentAgreement'], resolve)
	    }
  	]
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
})

export default router