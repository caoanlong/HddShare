export default function install (Vue, options) {
	// 开发服务器
<<<<<<< .mine
	// Vue.prototype.__WEBSERVER__ = 'http://test.hdd.we-service.cn:8888/'
=======
	Vue.prototype.__WEBSERVER__ = 'http://test.hdd.we-service.cn:8888/';
>>>>>>> .theirs
	// 测试服务器
<<<<<<< .mine
	Vue.prototype.__WEBSERVER__ = 'http://develop.we-service.cn/test-hdd/v2/'
=======
	// Vue.prototype.__WEBSERVER__ = 'http://develop.we-service.cn/test-hdd/v2/';
>>>>>>> .theirs
	// 正式服务器
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.48:8888/'
	// 邹文臣电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.60:4441/'
	// 张颜电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.29:4441/'
	// 农信靠电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.49:4441/'

	/* 每页条数 */
	// Vue.prototype.PAGESIZE = 10

	/* 微信对象 */
	Vue.prototype.wx = function (url, jsApiList) {
		let URL = 'http://dev.tunnel.qydev.com/wx/wxJsApiSignature'
		let params ={
			url: url
		}
		console.log(url)
		Vue.http.get(URL, {params: params}).then(res => {
			let config = res.body
			wx.config({
				// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				debug: true,
				// 必填，公众号的唯一标识
				appId: config.appId,
				// 必填，生成签名的时间戳
				timestamp: config.timestamp,
				// 必填，生成签名的随机串
				nonceStr: config.nonceStr,
				// 必填，签名，见附录1
				signature: config.signature,
				// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				jsApiList: jsApiList
			})
			wx.ready(() => {
				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				// wx.checkJsApi({
				// 	jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
				// 	success: function(res) {
				// 		console.log(res)
				// 		// 以键值对的形式返回，可用的api值true，不可用为false
				// 		// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
				// 	}
				// })
			})
			wx.error(res => {
				console.log(res)
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			})
		})
	}
}