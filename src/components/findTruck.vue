<template>
	<div class="findTruck">
		<div class="filter-box">
			<div class="truckSort"  @click="selectTruckLength">{{selectedTruckLengthList.map(item => item.name).join(',')}}</div>
			<div class="truckLength" @click="selectTruckType">{{selectedTruckTypeList.map(item => item.name).join(',')}}</div>
			<div class="map"><i></i>地图找车</div>
		</div>
		<div class="block"></div>
		<div class="wrapper" ref="truckWrapper">
			<Truck v-for="truck in truckList" :key="truck.id" :truck="truck" @click.native="alert"></Truck>
			<pullUpLoad :loadStatus="loadStatus"></pullUpLoad>
		</div>
		<truckLengthSelector :showSelector="showTruckLengthSelector" @close="closeTruckLengthSelector"></truckLengthSelector>
		<truckTypeSelector :showSelector="showTruckTypeSelector" @close="closeTruckTypeSelector"></truckTypeSelector>
	</div>
</template>
<script type="text/javascript">
	import Truck from './common/Truck'
	import pullUpLoad from './common/pullUpLoad'
	import truckList from '../assets/data/truckList'
	import truckLengthSelector from '../components/common/truckLengthSelector'
	import truckTypeSelector from '../components/common/truckTypeSelector'
	export default {
		data () {
			return {
				loadStatus: '正在加载...',
				scrollTop: 0,
				clientHeight: 0,
				pageHeight: 0,
				disY: 0,
				truckList: [],
				count: 0,
				showTruckLengthSelector: false,
				showTruckTypeSelector: false,
				selectedTruckLengthList: [{
					"code": "0",
					"name": "车长"
				}],
				selectedTruckTypeList: [{
					"code": "0",
					"name": "车型"
				}]
			}
		},
		created () {
			document.title = '寻找车源'
			this.truckList = truckList
			window.addEventListener('scroll', (e) => {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
				this.pageHeight = this.$refs.truckWrapper.offsetHeight
				this.disY = this.pageHeight - this.clientHeight + 40
				// console.log(this.scrollTop, e)
				if (this.scrollTop >= this.disY) {
					if (this.count < 2) {
						this.truckList = this.truckList.concat(truckList)
						this.count++
					} else {
						this.loadStatus = '~已经到底了~'
					}
				}
			})
		},
		methods: {
			getTruckList () {
				let URL = '';
				this.$http.get(URL,(res) => {
					console.log(res)
					this.truckList = res.body.data
				})
			},
			alert (e) {
				console.log(e)
			},
			selectTruckLength () {
				this.showTruckLengthSelector = true
			},
			selectTruckType () {
				this.showTruckTypeSelector = true
			},
			closeTruckLengthSelector (selected) {
				this.showTruckLengthSelector = false
				if (selected) {
					console.log(JSON.stringify(selected))
					this.selectedTruckLengthList = selected
				}
			},
			closeTruckTypeSelector (selected) {
				this.showTruckTypeSelector = false
				if (selected) {
					console.log(JSON.stringify(selected))
					this.selectedTruckTypeList = selected
				}
			},
		},
		components: {
			Truck,
			pullUpLoad,
			truckLengthSelector,
			truckTypeSelector
		}
	}
</script>
<style lang="stylus" scoped>
	.findTruck
		padding-top 40px
		overflow hidden
		.block
			position fixed
			top 0
			left 0
			right 0
			bottom 0
			background-color #f8f8f8
		.wrapper
			width 100%
			position absolute
			left 0
			top 40px
			right 0
		.filter-box
			background #fff
			box-shadow 0 0 5px rgba(0,0,0,.5)
			position fixed
			top 0
			left 0
			right 0
			z-index 10
			height 40px
			padding 5px
			display flex
			font-size 12px
			.truckSort
			.truckLength
				flex 1
				border 1px solid #ddd
				padding 0 30px 0 5px
				line-height 28px
				border-radius 4px
				margin-right 10px
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				background url('../assets/img/arrow-b.png') no-repeat right center
			.truckLength
				margin-right 20px
			.arrow
				flex 0 40px
				background url('../assets/img/arrow.svg') no-repeat center
				display inline-block
				background-size contain
				width 40px
				height 30px
				vertical-align top
			.map
				flex 0 90px
				text-align center
				line-height 30px
				position relative
				color #999
				line-height 28px
				border-radius 4px
				border 1px solid #ddd
				&:before
					content ""
					width 1px
					position absolute
					left -12px
					background #ddd
					top 0
					bottom 0
				i
					width 18px
					height 18px
					background url('../assets/img/map.svg') no-repeat center
					background-size contain
					display inline-block
					vertical-align middle
					margin -2px 3px 0 0
</style>