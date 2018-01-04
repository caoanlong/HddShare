import msgComponent from './msgComponent'
import { deepObjectAssign } from '../../../common/deepObjectAssign'

let $msg

export default function install(Vue, options = {}) {
	// Vue.msg = function(params) {
		// let data
		// if (typeof params == 'string') {
		// 	data = {
		// 		content: params
		// 	}
		// }else {
		// 	data = {
		// 		width: params['width'],
		// 		time: params['time'],
		// 		content: params['content']
		// 	}
		// }

		const Msg = Vue.extend(msgComponent)
		if (!$msg) {
			$msg = new Msg({
				el: document.createElement('div'),
				// propsData: data
			})
			document.body.appendChild($msg.$el)
		}

		const msg  = {
			show (options = {}) {
				if (typeof options === 'string') {
					$msg.content = options
				} else if (typeof options === 'object') {
					deepObjectAssign($msg, options)
				}
				$msg.isShow = true
			},
			hide () {
				$msg.isShow = false
			}
		}

		vue.msg = msg
		// $msg.isShow = true
	// }
}