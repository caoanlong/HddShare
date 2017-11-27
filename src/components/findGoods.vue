<template>
	<div class="findGoods">
		<div class="filter-box">
			<div class="from" @click="selectArea('simple')">{{startArea.value}}</div>
			<!-- <div class="from" @click="filterPop(0)">{{scrollTop}}</div> -->
			<span class="arrow"></span>
			<div class="destination"  @click="selectArea('mutiple')">{{endArea.map(item => item.value).join(',')}}</div>
			<!-- <div class="destination"  @click="filterPop(1)">{{disY}}</div> -->
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
	import goodsList from '../assets/data/goodsList'
	export default {
		data () {
			return {
				goodsList: [],
				loadStatus: '正在加载...',
				scrollTop: 0,
				clientHeight: 0,
				pageHeight: 0,
				disY: 0,
				count: 0,
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
			this.goodsList = goodsList
			window.addEventListener('scroll', (e) => {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
				this.pageHeight = this.$refs.goodsWrapper.offsetHeight
				this.disY = this.pageHeight - this.clientHeight + 40
				// console.log(this.scrollTop, e)
				if (this.scrollTop >= this.disY) {
					if (this.count < 2) {
						this.goodsList = this.goodsList.concat(goodsList)
						this.count++
					} else {
						this.loadStatus = '~已经到底了~'
					}
				}
			})
		},
		methods: {
			getGoodsList(endIndex) {
				let URL = this.__WEBSERVER__ + 'cargoSource/findByCondition';
				let params = {
					"endIndex": endIndex,
					"pageSize": this.PAGESIZE,
				};
				this.$http.get(URL,{params:params}).then(
					(res) => {
						if (res.body.code == 200) {
							this.goodsList = res.body.data.list;
							console.log(JSON.stringify(this.goodsList))
						}
					},
					(res) => {
						console.log(JSON.stringify(res));
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
				if (start) {
					console.log(JSON.stringify(start))
					this.startArea = start
				}
				if (end) {
					console.log(JSON.stringify(end))
					this.endArea = end
				}
			},
			closeMoreSelector (m) {
				this.showMoreSelector = false
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