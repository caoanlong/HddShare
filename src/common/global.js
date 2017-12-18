export default function install (Vue, options) {
	// 开发服务器
	// Vue.prototype.__WEBSERVER__ = 'http://test.hdd.we-service.cn:8888/'
	// 测试服务器
	Vue.prototype.__WEBSERVER__ = 'http://develop.we-service.cn/test-hdd/v2/'
	// 正式服务器
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.48:8888/'
	Vue.prototype.__IMGWEBSERVER__ = 'http://192.168.1.48/hdd/image/'
	// 邹文臣电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.60:4441/'
	// 张颜电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.29:4441/'
	// 农信靠电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.49:4441/'

	/* 每页条数 */
	Vue.prototype.PAGESIZE = 10

	/* 微信对象 */
	Vue.prototype.wx = function (url, jsApiList) {
		let URL = 'http://wx.hdd56.com/wxJsApiSignature'
		let params ={
			url: url
		}
		console.log(url)
		Vue.http.get(URL, {params: params}).then(res => {
			let config = res.body
			wx.config({
				// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				// debug: true,
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
				// console.log('成功')
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
	// 动画形式
	var Tween = {
		linear: function (t, b, c, d){
			return c*t/d + b
		},
		easeIn: function(t, b, c, d){
			return c*(t/=d)*t + b
		},
		easeOut: function(t, b, c, d){
			return -c *(t/=d)*(t-2) + b
		},
		easeBoth: function(t, b, c, d){
			if ((t/=d/2) < 1) {
				return c/2*t*t + b
			}
			return -c/2 * ((--t)*(t-2) - 1) + b
		},
		easeInStrong: function(t, b, c, d){
			return c*(t/=d)*t*t*t + b
		},
		easeOutStrong: function(t, b, c, d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b
		},
		easeBothStrong: function(t, b, c, d){
			if ((t/=d/2) < 1) {
				return c/2*t*t*t*t + b
			}
			return -c/2 * ((t-=2)*t*t*t - 2) + b
		},
		elasticIn: function(t, b, c, d, a, p){
			if (t === 0) { 
				return b 
			}
			if ( (t /= d) == 1 ) {
				return b+c 
			}
			if (!p) {
				p=d*0.3 
			}
			if (!a || a < Math.abs(c)) {
				a = c 
				var s = p/4
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a)
			}
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b
		},
		elasticOut: function(t, b, c, d, a, p){
			if (t === 0) {
				return b
			}
			if ( (t /= d) == 1 ) {
				return b+c
			}
			if (!p) {
				p=d*0.3
			}
			if (!a || a < Math.abs(c)) {
				a = c
				var s = p / 4
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a)
			}
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b
		}, 
		elasticBoth: function(t, b, c, d, a, p){
			if (t === 0) {
				return b
			}
			if ( (t /= d/2) == 2 ) {
				return b+c
			}
			if (!p) {
				p = d*(0.3*1.5)
			}
			if ( !a || a < Math.abs(c) ) {
				a = c 
				var s = p/4
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a)
			}
			if (t < 1) {
				return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )) + b
			}
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b
		},
		backIn: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 1.70158
			}
			return c*(t/=d)*t*((s+1)*t - s) + b
		},
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 2.70158 //回缩的距离
			}
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b
		}, 
		backBoth: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 1.70158 
			}
			if ((t /= d/2 ) < 1) {
				return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b
			}
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b
		},
		bounceIn: function(t, b, c, d){
			return c - Tween['bounceOut'](d-t, 0, c, d) + b
		}, 
		bounceOut: function(t, b, c, d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b
			}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b
		}, 
		bounceBoth: function(t, b, c, d){
			if (t < d/2) {
				return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b
			}
			return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b
		}
	}
	// 执行动画
	Vue.prototype.startMove = function (init) {
		clearInterval(init.el.timer)
		var t = 0 
		var b = {}
		var c = {}
		var d = init.time/20
		for( var s in init.target){
			b[s] = parseFloat(getComputedStyle(init.el)[s])
			c[s] = init.target[s] - b[s]
		}
		init.el.timer = setInterval(function(){
			t++
			if(t > d){
				clearInterval(init.el.timer)
				init.callBack && init.callBack()
			} else {
				for(var s in init.target){
					var val = Tween[init.type](t,b[s],c[s],d)
					init.el.style[s] = val + 'px'
				}
			}
		},20)
	}
	/* 将跨域图片路径生成Base64 */
	// 传入图片路径，返回base64
	Vue.prototype.getBase64 = function (img, width, height){
		// width、height调用时传入具体像素值,控制大小,不传则默认图像大小
		var canvas = document.createElement("canvas")
		canvas.width = width || img.width
		canvas.height = height || img.height

		var ctx = canvas.getContext("2d")
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
		var dataURL = canvas.toDataURL("image/png") 
		return dataURL
	}
	
	// 获取图片服务器
	Vue.prototype.getImgUrl = () => {
		let URL = Vue.prototype.__WEBSERVER__ + 'adv/setting/findByCode'
		let params = {
			'code': 'Pic_Domain'
		}
		if (sessionStorage.getItem('__IMGWEBSERVER__')) {
			Vue.prototype.__IMGWEBSERVER__ = sessionStorage.getItem('__IMGWEBSERVER__')
		} else {
			Vue.http.get(URL, {params: params}).then(res => {
				Vue.prototype.__IMGWEBSERVER__ = res.body.data
				sessionStorage.setItem('__IMGWEBSERVER__', res.body.data)
			})
		}
	}
}
