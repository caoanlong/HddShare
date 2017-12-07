<template>
	<div>
		<baidu-map class="map" :center="{lng: lng, lat: lat}" :zoom="15">
            <bm-marker :position="{lng: lng, lat: lat}">
            </bm-marker>
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
		lng () {
			return this.$route.query.lng
		},
		lat () {
			return this.$route.query.lat
		}
	},
	created () {
		document.title = '查看位置'
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

