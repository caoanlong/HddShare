export default function install (Vue, options) {
	// 开发服务器
	// Vue.prototype.__WEBSERVER__ = 'http://test.hdd.we-service.cn:8888/'
	// 测试服务器
	Vue.prototype.__WEBSERVER__ = 'http://develop.we-service.cn/test-hdd/v2/'
	// 正式服务器
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.48:8888/'
	Vue.prototype.__IMGWEBSERVER__ = 'http://develop.we-service.cn/hdd/image/'
	// 邹文臣电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.60:4441/'
	// 张颜电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.29:4441/'
	// 农信靠电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.49:4441/'

	/* 每页条数 */
	Vue.prototype.PAGESIZE = 10

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
