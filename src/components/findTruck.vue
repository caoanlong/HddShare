<template>
	<div class="findTruck">
		<div class="filter-box">
			<div class="truckSort"  @click="selectTruckLength">{{selectedTruckLengthList.map(item => item.name).join(',')}}</div>
			<div class="truckLength" @click="selectTruckType">{{selectedTruckType.name}}</div>
			<router-link tag="div" class="map" :to="{name: 'findTruckByMap'}"><i></i>地图找车</router-link>
		</div>
		<div class="block"></div>
		<div class="wrapper" ref="truckWrapper">
			<Truck v-for="truck in truckList" :key="truck.truckID" :truck="truck"></Truck>
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
				truckList: [],
				pageNum: 1,
				pages: 1,
				truckType: '',
				truckLength: '',
				loadStatus: '正在加载...',
				scrollTop: 0,
				clientHeight: 0,
				pageHeight: 0,
				disY: 0,
				showTruckLengthSelector: false,
				showTruckTypeSelector: false,
				selectedTruckLengthList: [{
					"code": "0",
					"name": "车长"
				}],
				selectedTruckType: {
					"code": "0",
					"name": "车型"
				}
			}
		},
		created () {
			document.title = '寻找车源'
			this.getTruckList()
			window.addEventListener('scroll', (e) => {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
				this.pageHeight = this.$refs.truckWrapper.offsetHeight
				this.disY = this.pageHeight - this.clientHeight + 40
				// console.log(this.scrollTop, this.disY)
				if (this.scrollTop == this.disY) {
					if (this.pageNum < this.pages) {
						this.loadStatus = '正在加载...'
						this.pageNum++
						this.getTruckList()
					} else {
						this.loadStatus = '~已经到底了~'
					}
				}
			})
		},
		methods: {
			getTruckList () {
				let URL = this.__WEBSERVER__ + 'adv/truck/list'
				let params = {
					"pageNum": this.pageNum,
					"pageSize": this.PAGESIZE,
					"type": this.truckType,
					"length": this.truckLength
				}
				this.$http.get(URL, {params: params}).then(res => {
					// console.log(JSON.stringify(res.body.data.list))
					this.pages = res.body.data.pages
					this.truckList = this.truckList.concat(res.body.data.list)
					if (res.body.data.list.length < this.PAGESIZE) {
						this.loadStatus = '~已经到底了~'
					}
					if (this.truckList.length == 0) {
						this.loadStatus = '~没有结果~'
					}
				})
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
					this.selectedTruckLengthList = selected
					this.truckLength = selected.map(item => item.constStdID).join(',')
					console.log(JSON.stringify(this.truckLength))
					this.pageNum = 1
					this.pages = 1
					this.truckList = []
					this.getTruckList()
				}
			},
			closeTruckTypeSelector (selected) {
				this.showTruckTypeSelector = false
				if (selected) {
					console.log(JSON.stringify(selected))
					this.selectedTruckType = selected
					this.truckType = selected.constStdID
					this.pageNum = 1
					this.pages = 1
					this.truckList = []
					this.getTruckList()
				}
			}
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