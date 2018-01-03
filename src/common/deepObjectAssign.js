import objectAssign from 'object-assign'

const deepObjectAssign = function ($vm, options) {
	const default = {}
	for (let i in $vm.options.props) {
		if (i != 'value') {
			default[i] = $vm.options.props[i].default
		}
	}
	const _option = objectAssign({}, default, options)
	for (let i in _option) {
		$vm[i] = _option[i]
	}
}

export {
	deepObjectAssign
}