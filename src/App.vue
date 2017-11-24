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
		if ((window.navigator.userAgent.indexOf('MicroMessenger') > -1) && document.body.getAttribute('wx-router')) {
			this.$router.push({name: document.body.getAttribute('wx-router')})
		}
		// this.wx(location.href.split('#')[0], [
		// 	'onMenuShareTimeline',
		// 	'onMenuShareAppMessage'
		// ])
	},
	methods: {
	}
}
</script>

<style lang="stylus">
	#app
		width 100%
</style>
