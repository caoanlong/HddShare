<template>
	<div v-if="showMap" class="mapWapper">
		<div class="backBtn" @click="returnBack"><i></i></div>
		<baidu-map class="map"
			:center="position"
			:zoom="22">
			<bm-control>
				<div class="marker" ref="marker" :style="markerPos">
					<img :src="locationIcon"/>
				</div>
			</bm-control>
			<TruckIcon :class="{'selected': selectedTruck?(selectedTruck.truckID == truck.truckID):false}" :truck="truck" v-for="truck in truckList" :key="truck.truckID" @touchstart.native.stop="selectTruck(truck)"></TruckIcon>
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
		</baidu-map>
		<transition name="slideUp">
			<div class="LocationDetail" v-show="selectedTruck">
				<div class="baseInfo" to="">
					<div class="ls">
						<img width="70" :src='__IMGWEBSERVER__ + (selectedTruck?selectedTruck.headPicture:"")' @error="errorImg"/>
						<p class="text-center status"><span class="status1"><i></i>运输中</span></p>
						<!-- <p class="text-center status"><span class="status2"><i></i>空车</span></p> -->
		        	</div>
		        	<div class="text">
						<p class="line bold">
							<span class="from">{{selectedTruck?selectedTruck.areaFromName:''}}</span>
							<span class="arrow"></span>
							<span>{{selectedTruck?selectedTruck.areaToName:''}}</span>
						</p>
			           	<p class="truckInfo">{{selectedTruck?selectedTruck.realName:''}}/{{selectedTruck?selectedTruck.plateNo:''}}</p>
			            <p class="truckType">{{selectedTruck?selectedTruck.truckLengthName:''}}/{{selectedTruck?selectedTruck.truckTypeName:''}}/{{selectedTruck?selectedTruck.loadingDateStr:''}}</p>
			            <p class="Location">{{selectedTruck?selectedTruck.posUpdateTime:''}} {{selectedTruck?selectedTruck.posAreaName:''}} {{selectedTruck?selectedTruck.distance:''}}</p>
		            </div>
				</div>
			    <a class=" icon-phone" href="'tel:'1000"></a>
			</div>
		</transition>
	</div>
</template>
<script>
	import {BmlMarkerClusterer} from 'vue-baidu-map'
	import {locationIcon, defaultImg} from '../../assets/data/icons'
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
				},
				selectedTruck: null
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
			},
			returnBack () {
				this.$emit('closeMap')
			},
			selectTruck (Obj) {
				this.selectedTruck = Obj
			},
			errorImg (e) {
                e.target.src = defaultImg
                e.target.onerror = null
            }
		},
		components: {
			BmlMarkerClusterer,
			TruckIcon
		}
	}
</script>
<style lang="stylus" scoped>
	.backBtn
		width 30px
		height 30px
		padding 7px
		border-radius 4px
		background rgba(0,0,0,.5)
		position absolute
		top 10px
		left 10px
		z-index 100
		i
			width 16px
			height 16px
			background url('../../assets/img/backBtn-icon.svg') no-repeat
			display block
			background-size cover
	.map
		position fixed
		top 0
		left 0
		bottom 0
		right 0
		z-index 99
		.selected
			border 1px solid #f60
			padding 2px
			box-shadow 0 0 2px #f60
			z-index 100
		.marker
			width 30px
			height 52px
			position absolute
			img
				width 100%
				height 100%
	.LocationDetail
		position fixed
		bottom 0
		z-index 100
		width 100%
		background #fff
		padding 10px 50px 10px 90px
		min-height 110px
		.ls
			position absolute
			left 10px
			top 10px
			width 70px
			img
				border-radius 4px
			.status
				font-size 12px
				text-align center
				display block
				height 20px
				span
					color #fff
					height 20px
					padding 2px 10px 2px 2px
					border-radius 8px
					i
						height 16px
						width 16px
						display inline-block
						vertical-align top
						border-radius 8px
						margin 1px 5px 0 0
				.status1
					background #6cc
					i
						background url('../../assets/img/status_icon1.svg') #fff no-repeat center
						background-size 80%
				.status2
					background #f80
					i
						background url('../../assets/img/status_icon2.svg') #fff no-repeat center
						background-size 80%
		&.slideUp-enter-active
			 transition all 3s ease
			 height 50px
			 overflow hidden
		&.slideUp-leave-active
			 transition all 3s ease
			 height 0px
			 overflow hidden
		&.slideUp-enter
		&.slideUp-leave
			 height 0
			 opacity 0
		.icon-phone
			right 15px
			width 30px
			height 30px
			background-image url('../../assets/img/ic_call_phone_image.png')
			background-size cover
			display block
			position absolute
			top 50%
			margin-top -15px
		.text
			p
				color #999
				margin-top 3px
				font-size 14px
			.line
				font-size 16px
				color #666
				font-weight bold
				ext-overflow ellipsis
				white-space nowrap
				overflow hidden
				height 25px
				margin-top 0
				span
					display inline-block
					vertical-align top
					height 16px
				.arrow
					background url('../../assets/img/area_arrow.png') no-repeat center
					background-size contain
					width 20px
					vertical-align middle
			.truckInfo
				color #666
			.truckType
				color #6cc
</style>