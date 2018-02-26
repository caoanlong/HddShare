<template>
	<div class="mapWapper">
		<baidu-map class="map"
			@moveend="moveMap"
			@zoomend="zoomMap"
			:center="position"
			:zoom="zoom">
			<bm-control>
				<div class="marker" ref="marker"><img :src="locationIcon"/></div>
			</bm-control>
			<TruckIcon :class="{'selected': selectedTruck?(selectedTruck.truckID == truck.truckID):false}" :truck="truck" v-for="truck in truckList" :key="truck.truckID" @touchstart.native.stop="selectTruck(truck)"></TruckIcon>
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
			<bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ref="bmScale"></bm-scale>
		</baidu-map>
		<transition name="slideUp">
			<div class="LocationDetail" v-show="selectedTruck">
				<router-link tag="div" class="baseInfo" :to="{name: 'truckDetail', query: {id: selectedTruck?selectedTruck.memIDStr:''}}">
					<div class="ls">
						<img width="70" :src='__IMGWEBSERVER__ +"/"+ (selectedTruck?selectedTruck.headPicture:"")' @error="errorImg"/>
						<p class="text-center status"><span class="status1"><i></i>运输中</span></p>
		        	</div>
		        	<div class="text">
			           	<p class="truckInfo line bold">{{selectedTruck?selectedTruck.realName:''}}/{{selectedTruck?selectedTruck.plateNo:''}}</p>
			            <p class="truckType">{{selectedTruck?selectedTruck.truckLengthName:''}}/{{selectedTruck?selectedTruck.truckTypeName:''}}/{{selectedTruck?selectedTruck.loadingDateStr:''}}</p>
			            <p class="Location">{{selectedTruck?selectedTruck.posUpdateTime:''}} {{selectedTruck?selectedTruck.posAreaName:''}} {{selectedTruck?selectedTruck.distance:''}}</p>
		            </div>
				</router-link>
			    <router-link tag="div" :to="{name: 'AppDownload'}" class="icon-phone"></router-link>
			</div>
		</transition>
	</div>
</template>
<script>
	import {BmlMarkerClusterer} from 'vue-baidu-map'
	import {locationIcon, defaultImg} from '../assets/data/icons'
	import TruckIcon from './common/TruckIcon'
	export default {
		data () {
			return {
				position: {
					lat: 22.527858,
					lng: 113.945806
				},
				zoom: 15,
				range: 3,
				truckList: [],
				selectedTruck: null
			}
		},
		computed: {
			locationIcon () {
				return locationIcon
			}
		},
		created () {
			document.title = '地图找车'
			this.getTruckList()
		},
		methods: {
			getTruckList () {
				let URL = this.__WEBSERVER__ + 'adv/truck/nearby'
				let params = {
					"lat": this.position.lat,
					"lng": this.position.lng,
					"range": this.range
				}
				this.$http.get(URL, {params: params}).then(res => {
					// console.log(JSON.stringify(res.body.data))
					this.truckList = res.body.data
				})
			},
			moveMap (e) {
				this.position.lat = e.currentTarget.gf.lat
				this.position.lng = e.currentTarget.gf.lng
				this.getTruckList()
			},
			zoomMap (e) {
				if (this.$refs.bmScale.originInstance) {
					let oText = this.$refs.bmScale.originInstance.SI.innerText
					if (oText.slice(oText.length-1) == '米') {
						this.range = Math.ceil(Number(oText.split('米')[0]) / 1000 * 2 * 5)
					} else {
						this.range = Number(oText.split('公里')[0]) * 2 * 5
					}
				}
				this.zoom = e.currentTarget.Oa
				this.getTruckList()
			},
			selectTruck (obj) {
				this.selectedTruck = obj
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
			position fixed
			left 50%
			top 50%
			transform translate(-50%, -50%)
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
		height 110px
		overflow hidden
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
						vertical-align middle
						border-radius 8px
						margin -1px 5px 0 0
				.status1
					background #6cc
					i
						background url('../assets/img/status_icon1.svg') #fff no-repeat center
						background-size 80%
				.status2
					background #f80
					i
						background url('../assets/img/status_icon2.svg') #fff no-repeat center
						background-size 80%
		&.slideUp-enter-active
			 transition all .5s ease
			 bottom 0
			 overflow hidden
		&.slideUp-leave-active
			 transition all .5s ease
			 bottom -110px
			 overflow hidden
		&.slideUp-enter
		&.slideUp-leave
			 bottom -110px
		.icon-phone
			right 15px
			width 30px
			height 30px
			background-image url('../assets/img/ic_call_phone_image.png')
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
					background url('../assets/img/area_arrow.png') no-repeat center
					background-size contain
					width 20px
					vertical-align middle
			.truckInfo
				color #666
			.truckType
				color #6cc
</style>