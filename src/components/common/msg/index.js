import msgComponent from './msgComponent'

let $msg

export default function install(Vue, options) {
	Vue.prototype.msg = function(params) {
		let data
		if (typeof params == 'string') {
			data = {
				content: params
			}
		}else {
			data = {
				width: params['width'],
				time: params['time'],
				content: params['content']
			}
		}

		if (!$msg) {
			const Msg = Vue.extend(msgComponent)
			$msg = new Msg({
				el: document.createElement('div'),
				propsData: data
			})
			document.body.appendChild($msg.$el)
		}
		$msg.isShow = true
	}
}