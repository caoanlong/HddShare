<template>
	<div>
		<div class="container">
			<!-- <div class="titleBar">货源详情</div> -->
			<div class="baseInfo bdb">
				<img  :src='__IMGWEBSERVER__ + "/" + goodsDetail.headPicture' class="pic" @error="errorImg"/>
			    <p>
			    	<b class="name">{{goodsDetail.realName}}</b>
			    	<span class="user_sort user_sort1">物流公司</span>
			   	<!-- <span class="user_sort user_sort1" v-if="data.memberType=='3PL'">物流公司</span>
				<span class="user_sort user_sort2" v-else-if="data.memberType=='InfoDept'">物流信息部</span>
				<span class="user_sort user_sort3" v-else-if="data.memberType=='IndShipper'">个人</span>
				<span class="user_sort user_sort4" v-else-if="data.memberType=='NoTruck'">无车承运人</span> -->
			    	<span class="attention">
						<img src="../assets/img/attention.svg"/>
					</span>
			    </p>
			    <p class="company">云南微服物流</p>
			    <p class="history">历史发货<span class="c1">995</span>条</p>
			    <router-link tag="div" :to="{name: 'AppDownload'}" class="tel"><img src="../assets/img/ic_call_phone_image.png"/></router-link>
			</div>
			</div>
			<div class="cells bdtb">
				<div class="cell">
					<div class="cell__hd">
						<img class="icon" src="../assets/img/position_icon.svg">
					</div>
					<div class="cell__bd lineInfo">
						<span class="start">{{goodsDetail.areaFromName}}</span>
						<span class="arrow"></span>
						<span class="end">{{goodsDetail.areaToName}}</span>
					</div>
				</div>
			</div>
			<div class="viewMap bdb">最短里程<b>{{goodsDetail.estimateMileage}}公里</b>
				<router-link tag="div" :to="{name: 'goodsLine', query: {areaFromLat: goodsDetail.areaFromLat, areaFromLng: goodsDetail.areaFromLng, areaToLat: goodsDetail.areaToLat, areaToLng: goodsDetail.areaToLng}}" class="viewBtn"><img src="../../static/img/viewBtn.png" /></router-link>
			</div>
			<div class="cells bdtb">
				<div class="cell">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon1.svg"></div>
					<div class="cell__bd"><label class="labels">装车时间</label><span>{{goodsDetail.loadingTime}}</span></div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon2.svg"></div>
					<div class="cell__bd"><label class="labels">货物信息</label><span class="c1">{{goodsDetail.cargoTypeConstant ? goodsDetail.cargoTypeConstant.name : ''}}/{{goodsDetail.cargoWeight}}吨/{{goodsDetail.cargoVolume}}方/{{goodsDetail.cargoPackageName}}</span></div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon3.svg"></div>
					<div class="cell__bd"><label class="labels">需求车辆</label><span class="c1">{{goodsDetail.truckLengthList ? goodsDetail.truckLengthList.map(item => item.name).join(','):''}}/{{goodsDetail.truckTypeConstant ? goodsDetail.truckTypeConstant.name : ''}}/需{{goodsDetail.truckNum}}车/剩<b>{{goodsDetail.surplusTruckNum}}</b>车</span></div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon5.svg"></div>
					<div class="cell__bd"><label class="labels">货主留言</label><span>{{goodsDetail.remark}}</span></div>
				</div>
			</div>
			<div class="padd">
				<router-link tag="div" :to="{name: 'AppDownload'}" class="btn"><img src="../assets/img/rmb.svg"/>支付信息费</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {defaultImg} from '../assets/data/icons'
	export default {
		data () {
			return {
				goodsDetail: {}
			}
		},
		created () {
			document.title = '货源详情'
			this.getGoodsDetail()
		},
		methods: {
			getGoodsDetail() {
				let URL = this.__WEBSERVER__ + 'adv/cargoSource/detail'
				let params = {
					"cargoSourceID": this.$route.query.id
				}
				this.$http.get(URL, {params: params}).then(res => {
					console.log(JSON.stringify(res.body.data))
					this.goodsDetail = res.body.data
				})
			},
			errorImg (e) {
                e.target.src = defaultImg
                e.target.onerror = null
            }
		}
	}
</script>
<style lang="stylus" scoped>
	.titleBar
		background #6cc
		height 44px
		line-height 44px
		text-align center
		color #fff
	.baseInfo
		background #fff
		padding 10px 15px 10px 85px
		position relative
		height 80px
		color #999
		font-size 14px
		.pic
			position absolute
			left 15px
			top 10px
			border-radius 4px
			width 60px
			height 60px
		.name
			font-size 16px
			color #666
			font-weight bold
		.history
			span
				padding 0 5px
		.attention
		.user_sort
		.name
			display inline-block
			vertical-align top
			margin-right 5px
			img
				width 20px
				height 20px
		.user_sort
			text-align center
			border-radius 8px
			padding:1px 8px
			color #fff
			&.user_sort1
				background #6cc
			&.user_sort2
				background #5182e5
			&.user_sort3
				background #fcab20
			&.user_sort4
				background #fcab20
		.tel
			position absolute
			right 15px
			top 50%
			width 40px
			height 40px
			transform translateY(-50%)
			-webkit-transform translateY(-50%)
			img
				width 100%
	.viewMap
		background url('../../static/img/map.jpg') no-repeat  center
		height 60px
		background-size cover
		padding 15px
		line-height 30px
		color #708cb0
		position relative
		overflow hidden
		b
			color #666
			margin-left 10px
		.viewBtn
			float right
			img
				height 30px
	.cell__hd
		.icon
			vertical-align middle
	.cell__bd
		color #666
		&.lineInfo
			font-weight bold
			color #666
		span
			display inline-block
			vertical-align middle
			height 24px
			line-height 24px
			b
				color #f60
				padding 0 5px
			&.arrow
				background url('../assets/img/arrow.svg') no-repeat center
				width 30px
				height 24px
				background-size cover
		.labels
			width 80px
			color #999
			display inline-block
			vertical-align middle
	.btn
		color #fff
		height 44px
		line-height 44px
		border-radius 4px
		background #f60
		text-align center
		img
			height 20px
			vertical-align middle
			margin -2px 5px 0 0					
</style>