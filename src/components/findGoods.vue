<template>
	<div class="findGoods">
		<div class="filter-box">
			<div class="from" @click="selectArea('simple')">{{startArea.value}}</div>
			<span class="arrow"></span>
			<div class="destination"  @click="selectArea('mutiple')">{{endArea.map(item => item.value).join(',')}}</div>
			<div class="more"  @click="selectMore">更多</div>
		</div>
		<div class="block"></div>
		<div class="wrapper" ref="goodsWrapper">
			<Goods v-for="goods in goodsList" :goods="goods" :key="goods.cargoSourceID"></Goods>
			<pullUpLoad :loadStatus="loadStatus"></pullUpLoad>
		</div>
		<areaSelector :showSelector="showAreaSelector" :type="selectType" @close="closeAreaSelector"></areaSelector>
		<moreSelector :showSelector="showMoreSelector" @close="closeMoreSelector"></moreSelector>
	</div>
</template>
<script type="text/javascript">
	import areaSelector from './common/areaSelector'
	import moreSelector from './common/moreSelector'
	import Goods from './common/Goods'
	import pullUpLoad from './common/pullUpLoad'
	export default {
		data () {
			return {
				goodsList: [],
				pageNum: 1,
				pages: 1,
				areaFrom: '',
				areaTo: '',
				truckType: '',
				truckLength: '',
				loadStatus: '正在加载...',
				scrollTop: 0,
				clientHeight: 0,
				pageHeight: 0,
				disY: 0,
				showAreaSelector: false,
				showMoreSelector: false,
				selectType: 'simple',
				startArea: {
					key: '1',
					value: '全国'
				},
				endArea: [{
					key: '2',
					value: '全国'
				}],
			}
		},
		created () {
			document.title = '寻找货源'
			this.getGoodsList()
			window.addEventListener('scroll', (e) => {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
				this.pageHeight = this.$refs.goodsWrapper.offsetHeight
				this.disY = this.pageHeight - this.clientHeight + 40
				// console.log(this.scrollTop, this.disY)
				if (this.scrollTop == this.disY) {
					if (this.pageNum < this.pages) {
						this.loadStatus = '正在加载...'
						this.pageNum++
						this.getGoodsList()
					} else {
						this.loadStatus = '~已经到底了~'
					}
				}
			})
		},
		methods: {
			getGoodsList () {
				let URL = this.__WEBSERVER__ + 'adv/cargoSource/list'
				let params = {
					"pageNum": this.pageNum,
					"pageSize": this.PAGESIZE,
					"areaFrom": this.areaFrom,
					"areaTo": this.areaTo,
					"truckType": this.truckType,
					"truckLength": this.truckLength
				}
				this.$http.get(URL,{params:params}).then(
					res => {
						if (res.body.code == 200) {
							this.pages = res.body.data.pages
							this.goodsList = this.goodsList.concat(res.body.data.list)
							if (res.body.data.list.length < this.PAGESIZE) {
								this.loadStatus = '~已经到底了~'
							}
							if (this.goodsList.length == 0) {
								this.loadStatus = '~没有结果~'
							}
							console.log(JSON.stringify(res.body.data.list))
						}
					},
					res => {
						console.log(JSON.stringify(res))
					}
				)
			},
			selectArea (type) {
				this.showAreaSelector = true
				this.selectType = type
			},
			selectMore () {
				this.showMoreSelector = true
			},
			closeAreaSelector (start, end) {
				this.showAreaSelector = false
				if (!start &&  end.length == 0) {
					return
				}
				if (start) {
					console.log(JSON.stringify(start))
					this.startArea = start
					this.areaFrom = start.key
				}
				if (end.length > 0) {
					console.log(JSON.stringify(end))
					this.endArea = end
					this.areaTo = end.map(item => item.key).join(',')
				}
				this.pageNum = 1
				this.pages = 1
				this.goodsList = []
				this.getGoodsList()
			},
			closeMoreSelector (truckLength, truckType) {
				this.showMoreSelector = false
				this.truckLength = truckLength.map(item => item.constStdID).join(',')
				this.truckType = truckType.constStdID
				console.log(JSON.stringify(this.truckLength), JSON.stringify(this.truckType))
				this.pageNum = 1
				this.pages = 1
				this.goodsList = []
				this.getGoodsList()
			}
		},
		components: {
			areaSelector,
			moreSelector,
			Goods,
			pullUpLoad
		}
	}
</script>
<style lang="stylus" scoped>
	.findGoods
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
			.from
			.destination
				flex 1
				border 1px solid #ddd
				padding 0 30px 0 5px
				line-height 28px
				border-radius 4px
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				background url('../assets/img/arrow-b.png') no-repeat right center
			.arrow
				flex 0 40px
				background url('../assets/img/arrow.svg') no-repeat center
				display inline-block
				background-size contain
				width 40px
				height 30px
				vertical-align top
			.more
				flex 0 50px
				text-align center
				line-height 30px
</style>