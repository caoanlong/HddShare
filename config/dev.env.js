var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	ENV_CONFIG: '"dev"',
	// BASE_API: '"//192.168.1.60:4441/"',  // 邹文臣
	// BASE_API: '"//192.168.1.29:4441/"',  // 张颜
	// BASE_API: '"//192.168.1.49:4441/"',  // 农信靠
	BASE_API: '"//test.hdd.we-service.cn:8888/"',  // 开发
	IMG_API: '"//develop.we-service.cn/hdd/image/"'
})
