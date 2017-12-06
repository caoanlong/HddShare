<template>
	<div>
		<baidu-map class="map">
			<bm-driving
				:start="{lng: areaFromLng, lat: areaFromLat}"
				:end="{lng: areaToLng, lat: areaToLat}"
				:auto-viewport="true">
			</bm-driving>
		</baidu-map>
	</div>
</template>
<script>
export default {
	data () {
		return {
		}
	},
	computed: {
		areaFromLat () {
			return this.$route.query.areaFromLat
		},
		areaFromLng () {
			return this.$route.query.areaFromLng
		},
		areaToLat () {
			return this.$route.query.areaToLat
		},
		areaToLng () {
			return this.$route.query.areaToLng
		}
	},
	created () {
		document.title = '查看线路'
	}
}
</script>
<style lang="stylus" scoped>
	.map
		position fixed
		top 0
		left 0
		bottom 0
		right 0
		z-index 99
</style>

