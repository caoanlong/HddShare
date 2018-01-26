export let callMessage = function (paramMap) {
    var returnVal;
    var u = navigator.userAgent;
    try {
        paramMap = paramMap || {};
        // 打印日志
        console.debug("H5调用原生入参：" + (typeof(paramMap) === "string" ? paramMap : JSON.stringify(paramMap)));
        // Android
        if (u.indexOf('Android') > -1) {
            returnVal = window.external.callMessage(JSON.stringify(paramMap));
            if (typeof(returnVal) == "string") {
                returnVal = JSON.parse(returnVal);
            }
        }
        // IOS
        else if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
            try {
                returnVal = iosCallMessage(paramMap);
                if (typeof(returnVal) == "string") {
                    returnVal = JSON.parse(returnVal);
                }
            }
            catch (e) {
            }
        }
    }
    catch (e) {
        alert("H5调用原生external.callMessage方法出错：" + e.message);
    }
    return returnVal ? returnVal : {};
}

export default function install (Vue, options) {
	// 开发服务器
	// Vue.prototype.__WEBSERVER__ = 'http://test.hdd.we-service.cn:8888/'
	// 测试服务器
	const protocol = window.location.protocol
	
	

	// 正式服务器
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.48:8888/'
	
	
	
	// 邹文臣电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.60:4441/'
	// 张颜电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.29:4441/'
	// 农信靠电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.49:4441/'

	Vue.prototype.__WEBSERVER__ = protocol + '//develop.we-service.cn/test-hdd/v2/'
	Vue.prototype.__IMGWEBSERVER__ = protocol + '//develop.we-service.cn/hdd/image/'

	// Vue.prototype.__WEBSERVER__ = protocol + '//192.168.1.110/hdd/api/'
	// Vue.prototype.__IMGWEBSERVER__ = protocol + '//192.168.1.110/hdd/image/'
	
	// 线上环境
	// Vue.prototype.__WEBSERVER__ = protocol + '//api.hdd56.com/hdd/api/'
	// Vue.prototype.__IMGWEBSERVER__ = protocol + '//www.hdd56.com/hdd/image/'
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
