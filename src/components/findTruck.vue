<template>
	<div class="findTruck">
		<div class="filter-box">
			<div class="truckSort"  @click="filterPop(0)">车长</div>
			<div class="truckLength" @click="filterPop(1)">车型</div>
			<div class="map"><i></i>地图找车</div>
		</div>
		<div class="block"></div>
		<div class="wrapper" ref="truckWrapper">
			<Truck v-for="truck in truckList" :key="truck.id" :truck="truck" @click.native="alert"></Truck>
			<pullUpLoad :loadStatus="loadStatus"></pullUpLoad>
		</div>
		<div class="filter-pop" :class="{'show':popShow}">
			<div class="truckFilter">
				<div class="truckSort" v-if="filterList == 0">车长</div>
				<div class="truckSort" v-if="filterList == 1">车型</div>
			</div>
			<div class="filter-body"  v-if="filterList == 0">
				<div class="tit bdtb">车长</div>
				<ul class="clearfix">
					<li class="selected"><span>不限</span></li>
				    <li><span>7.6米</span></li>
				    <li><span>11.7米</span></li>
				    <li><span>9.6米</span></li>
				    <li><span>7.2米</span></li>
				    <li><span>12.5米</span></li>
				    <li><span>17.5米</span></li>
				    <li><span>5米</span></li>
				    <li><span>6.8米</span></li>
				    <li><span>14米</span></li>
				    <li><span>4.2米</span></li>
				    <li><span>6.2米</span></li>
				    <li><span>18米</span></li>
				    <li><span>5.2米</span></li>
				    <li><span>4.5米</span></li>
				    <li><span>8.2米</span></li>
				    <li><span>16米</span></li>
				    <li><span>17米</span></li>
				    <li><span>8.6米</span></li>
				    <li><span>13.5米</span></li>
				    <li><span>15米</span></li>
				    <li><span>13米</span></li>
				</ul>
			</div>
			<div class="filter-body"  v-if="filterList == 1">
				<div class="tit bdtb">车型</div>
				<ul class="clearfix">
				    <li class="selected"><span>仓栅式挂车</span></li>
				    <li><span>平板挂车</span></li>
				    <li><span>集装箱车</span></li>
				    <li><span>专项作业车</span></li>
				    <li><span>普通挂车</span></li>
				    <li><span>专项作业挂车</span></li>
				    <li><span>自卸货车</span></li>
				    <li><span>罐式货车</span></li>
				    <li><span>仓栅式货车</span></li>
				    <li><span>厢式货车</span></li>
				    <li><span>普通货车</span></li>
				    <li><span>车辆运输车</span></li>
				    <li><span>厢式挂车</span></li>
				    <li><span>车辆运输车(单排)</span></li>
				    <li><span>自卸挂车</span></li>
				    <li><span>特殊结构货车</span></li>
				    <li><span>平板货车</span></li>
				    <li><span>牵引车</span></li>
				    <li><span>罐式挂车</span></li>
				    <li><span>集装箱挂车</span></li>
				    <li><span>封闭货车</span></li>
				</ul>
			</div>
			<div class="filter-footer bdt">
				<button class="cancelBtn"><i></i>取消</button><button class="confirmBtn"><i></i>确定</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Truck from './FindTruck/Truck'
	import pullUpLoad from './common/pullUpLoad'
	import truckList from '../assets/data/truckList'
	export default {
		data () {
			return {
				popShow: false,
				loadStatus: '正在加载...',
				filterList: '',
				scrollTop: 0,
				clientHeight: 0,
				pageHeight: 0,
				disY: 0,
				truckList: [],
				count: 0
			}
		},
		created () {
			document.title = '寻找车源'
			this.truckList = truckList
			window.addEventListener('scroll', (e) => {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
				this.pageHeight = this.$refs.truckWrapper.offsetHeight
				console.log(this.$refs.truckWrapper.offsetHeight)
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
			filterPop (i) {
				this.popShow = !this.popShow
				this.filterList = i
				console.log(this.filterList)
			},
			getTruckList () {
				let URL = '';
				this.$http.get(URL,(res) => {
					console.log(res)
					this.truckList = res.body.data
				})
			},
			alert (e) {
				console.log(e)
			}
		},
		components: {
			Truck,
			pullUpLoad
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
		.filter-pop
			position fixed
			top 100%
			left 0
			right 0
			bottom 0
			z-index 20
			background #fff
			transition top .2s
			-moz-transition top .2s
			-webkit-transition top .2s
			-o-transition top .2s
			&.show
				top 0
				bottom 64px
				.filter-footer
					display flex
			.truckFilter
				background #fff
				height 40px
				padding 5px
				display flex
				font-size 14px
				.truckSort
				.truckLength
					flex 1
					border 1px solid #ddd
					padding 0 30px 0 5px
					line-height 28px
					border-radius 4px
					margin-right 10px
					background url('../assets/img/arrow-b.png') no-repeat right center
			.filter-header
				height 40px
				line-height 30px
				padding 5px
				font-size 14px
				color #666
				.backBtn
					color #6cc
					background none
					border none
					outline none
					i
						background url('../assets/img/back_6cc.svg') no-repeat
						background-size cover
						width 14px
						height 14px
						margin-right 5px
						display inline-block
						vertical-align text-top
			.filter-body
				.tit
					padding 5px
					background #f8f8f8
					font-size 14px
				ul
					margin-bottom 10px
					padding 0 5px
					li
						float left
						width 25%
						padding 10px 5px 0
						text-align center
						&.selected
							span
								border-color #6cc
								color #6cc
								background url('../assets/img/selected.png') no-repeat right top
						span
							border 1px solid #ddd
							display block
							font-size 14px
							padding 5px 0
							border-radius 4px
							color #666
							white-space nowrap
							text-overflow ellipsis
							overflow hidden
			.filter-footer
				height 64px
				padding 10px 5px
				background #eee
				left 0
				right 0
				bottom 0
				position fixed
				display none
				.cancelBtn
				.confirmBtn
					height 44px
					line-height 44px
					margin 0 10px
					border-radius 22px
					flex 1
					outline none
					border none
					font-size 16px
					i
						width 16px
						height 16px
						display inline-block
						vertical-align text-top
						margin 2px 5px 0 0
				.cancelBtn
					color #666
					background #ccc
					i
						background url('../assets/img/back.svg') no-repeat
						background-size cover
				.confirmBtn
					background #6cc
					color #fff
					i
						background url('../assets/img/ok.svg') no-repeat
						background-size cover
</style>