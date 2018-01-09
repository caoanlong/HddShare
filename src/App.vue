<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'app',
	created () {
		this.getImgUrl()
	},
	methods: {
	}
}
</script>

<style lang="stylus">
	#app
		width 100%
</style>
