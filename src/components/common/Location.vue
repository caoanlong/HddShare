<template>
	<div v-if="showMap" class="mapWapper">
		<baidu-map class="map"
			:center="position"
			:zoom="22">
			<bm-control>
				<div class="marker" ref="marker" :style="markerPos">
					<img :src="locationIcon"/>
				</div>
			</bm-control>
			<TruckIcon :truck="truck" v-for="truck in truckList" :key="truck.truckID"></TruckIcon>
			<!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" :locationIcon="{url: locationIcon, size: {width: 30, height: 52}, opts:{imageSize:{width: 30, height: 52}}}"></bm-geolocation> -->
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
		</baidu-map>
	</div>
</template>
<script>
	import {BmlMarkerClusterer} from 'vue-baidu-map'
	import {locationIcon} from '../../assets/data/icons'
	import TruckIcon from '../common/TruckIcon'
	export default {
		props: {
			showMap: {
				type: Boolean,
				default: false
			},
			truckList: {
				type: Array,
				default: function () {
					return []
				}
			}
		},
		data () {
			return {
				position: {
					lat: 22.527858,
					lng: 113.945806
				},
				radius: 500,
				markerPos: {
					left: 0,
					top: 0
				}
			}
		},
		computed: {
			locationIcon () {
				return locationIcon
			},
			points() {
				let p = []
				for (let i = 0; i < this.truckList.length; i++) {
					p.push({
						lat:this.truckList[i].lat,
						lng:this.truckList[i].lng
					})
				}
				return p
			}
		},
		watch: {
			showMap (newVal) {
				if (newVal) {
					document.title = '地图找车'
					this.$nextTick(() => {
						this.markerPos = {
							left: (window.screen.width - this.$refs.marker.offsetWidth)/2 + 'px',
							top: (window.screen.height - this.$refs.marker.offsetHeight)/2-26 + 'px'
						}
					})
					
				} else {
					document.title = '寻找车源'
				}
			}
		},
		created() {
		},
		mounted () {
			
		},
		methods: {
			clickHandler (e) {
				alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`)
			}
		},
		components: {
			BmlMarkerClusterer,
			TruckIcon
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
		.marker
			width 30px
			height 52px
			position absolute
			img
				width 100%
				height 100%
</style>