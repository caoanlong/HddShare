<template>
	<div class="findGoods">
		<div class="filter-box">
			<div class="from" @click="selectArea('simple')">全国</div>
			<!-- <div class="from" @click="filterPop(0)">{{scrollTop}}</div> -->
			<span class="arrow"></span>
			<div class="destination"  @click="selectArea('mutiple')">全国</div>
			<!-- <div class="destination"  @click="filterPop(1)">{{disY}}</div> -->
			<div class="more"  @click="selectMore(2)">更多</div>
		</div>
		<div class="block"></div>
		<div class="wrapper" ref="goodsWrapper">
			<Goods v-for="goods in goodsList" :goods="goods" :key="goods.cargoSourceID"></Goods>
			<pullUpLoad :loadStatus="loadStatus"></pullUpLoad>
		</div>
		<areaSelector :showSelector="showSelector" :type="selectType"></areaSelector>
      	<!-- <div class="filter-pop" :class="{'show':popShow}" v-if="filterList ==1">
      		<div class="areaSelect">
				<div class="from">起始地</div>
				<span class="arrow"></span>
				<div class="destination">目的地</div>
			</div>
			<div class="filter-header bdtb">
  				当前地区：全部<div class="fr"><span class="location">深圳市</span><span class="backBtn"><i></i>返回上一级</span></div>
  			</div>
      		<div class="filter-body">
      			<ul class="clearfix">
				    <li><span>北京</span></li>
				    <li><span>天津</span></li>
				    <li><span>河北省</span></li>
				    <li><span>山西省</span></li>
				    <li><span>内蒙古自治区</span></li>
				    <li><span>辽宁省</span></li>
				    <li><span>吉林省</span></li>
				    <li><span>黑龙江省</span></li>
				    <li><span>上海</span></li>
				    <li><span>江苏省</span></li>
				    <li><span>浙江省</span></li>
				    <li><span>安徽省</span></li>
				    <li><span>福建省</span></li>
				    <li><span>江西省</span></li>
				    <li><span>山东省</span></li>
				    <li><span>河南省</span></li>
				    <li><span>湖北省</span></li>
				    <li><span>湖南省</span></li>
				    <li><span>广东省</span></li>
				    <li><span>广西壮族自治区</span></li>
				    <li><span>海南省</span></li>
				    <li><span>重庆</span></li>
				    <li><span>四川省</span></li>
				    <li><span>贵州省</span></li>
				    <li><span>云南省</span></li>
				    <li><span>西藏自治区</span></li>
				    <li><span>陕西省</span></li>
				    <li><span>甘肃省</span></li>
				    <li><span>青海省</span></li>
				    <li><span>宁夏回族自治区</span></li>
				    <li><span>新疆维吾尔自治区</span></li>
				    <li><span>台湾省</span></li>
				    <li><span>香港特别行政区</span></li>
				    <li><span>澳门特别行政区</span></li>
				</ul>
      		</div>
      		<div class="filter-footer bdt">
				<button class="cancelBtn"><i></i>取消</button><button class="confirmBtn"><i></i>确定</button>
			</div>
      	</div>
      	<div class="filter-pop" :class="{'show':popShow}" v-if="filterList ==2">
			<div class="filter-body">
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
		</div> -->
	</div>
</template>
<script type="text/javascript">
	import areaSelector from './common/areaSelector'
	import Goods from './FindGoods/Goods'
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
				showSelector: false,
				selectType: 'simple'
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
			selectArea(type) {
				this.showSelector = true
				this.selectType = type
			}
		},
		components: {
			areaSelector,
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