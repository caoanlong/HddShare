export default function install (Vue, options) {
	// 开发服务器
	// Vue.prototype.__WEBSERVER__ = 'http://test.hdd.we-service.cn:8888/';
	// 测试服务器
	Vue.prototype.__WEBSERVER__ = 'http://develop.we-service.cn/test-hdd/v2/';
	// 正式服务器
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.48:8888/';
	// 邹文臣电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.60:4441/';
	// 张颜电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.29:4441/';
	// 农信靠电脑
	// Vue.prototype.__WEBSERVER__ = 'http://192.168.1.49:4441/';

	/* 每页条数 */
	Vue.prototype.PAGESIZE = 10;
}