import objectAssign from 'object-assign'

const deepObjectAssign = function ($vm, options) {
	const defaultPro = {}
	for (let i in $vm.options.props) {
		if (i != 'value') {
			defaultPro[i] = $vm.options.props[i].default
		}
	}
	const _option = objectAssign({}, defaultPro, options)
	for (let i in _option) {
		$vm[i] = _option[i]
	}
}

export {
	deepObjectAssign
}