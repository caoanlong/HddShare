<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'app',
	data () {
		return {
			config: {}
		}
	},
	created () {
		this.wx(location.href.split('#')[0], [
			'onMenuShareTimeline',
			'onMenuShareAppMessage'
		])
	},
	methods: {
		
	}
}
</script>

<style lang="stylus">
	#app
		width 100%
</style>
