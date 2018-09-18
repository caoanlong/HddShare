<template>
	<div>
		<div class="container">
			<!-- <div class="titleBar">货源详情</div> -->
			<div class="baseInfo bdb">
				<img v-if="goodsDetail.headPicture" :src='__IMGWEBSERVER__ + goodsDetail.headPicture' class="pic" @error="errorImg"/>
			    <p>
			    	<b class="name">{{goodsDetail.realName}}</b>
			    	<span class="attention">
						<img src="../assets/img/attention.svg" v-if="goodsDetail.certifyStatus == 'Success'"/>
					</span>
			    </p>
			    <!-- <p class="company">云南微服物流</p> -->
			    <p class="history">历史发货<span class="c1">{{goodsDetail.cargoSourceNum}}</span>条</p>
			    <!-- <router-link tag="div" :to="{name: 'AppDownload'}" class="tel"><img src="../assets/img/ic_call_phone_image.png"/></router-link> -->
			    <a class="tel" :href="'tel:' + goodsDetail.mobile"><img src="../assets/img/ic_call_phone_image.png"/></a>
			</div>
			</div>
			<div class="cells bdtb">
				<div class="cell">
					<div class="cell__hd">
						<img class="icon" src="../assets/img/local_icon.svg">
					</div>
					<div class="cell__bd lineInfo">
						<span class="start">{{goodsDetail.areaFromName?(goodsDetail.areaFromName.split(',').length == 4 ? goodsDetail.areaFromName.split(',')[1] + goodsDetail.areaFromName.split(',')[2] : goodsDetail.areaFromName.split(',')[0] + goodsDetail.areaFromName.split(',')[1]):''}}</span>
						<span class="arrow"></span>
						<span class="end">{{goodsDetail.areaToName?(goodsDetail.areaToName.split(',').length == 4 ? goodsDetail.areaToName.split(',')[1]+goodsDetail.areaToName.split(',')[2] :goodsDetail.areaToName.split(',')[0] + goodsDetail.areaToName.split(',')[1]):''}}</span>
					</div>
				</div>
			</div>
			<router-link tag="div" class="viewMap bdtb" :to="{name: 'goodsLine', query: {areaFromLat: goodsDetail.areaFromLat, areaFromLng: goodsDetail.areaFromLng, areaToLat: goodsDetail.areaToLat, areaToLng: goodsDetail.areaToLng}}">
				<img src="../../static/img/line.jpg" width="100%" />
				<p>最短里程<b>{{goodsDetail.estimateMileage + '公里'}}</b></p>
			</router-link>
			<div class="cells bdtb">
				<div class="cell">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon1.svg"></div>
					<div class="cell__bd"><label class="labels">装车时间</label><span>{{goodsDetail.loadingDateStr?goodsDetail.loadingDateStr:''}}</span></div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/package.svg"></div>
					<div class="cell__bd">
						<label class="labels">货物信息</label>
						<span class="c1">{{goodsDetail.cargoName}}{{(goodsDetail.cargoWeight !='' && goodsDetail.cargoWeight !='0')?'/'+goodsDetail.cargoWeight+'吨':''}}{{(goodsDetail.cargoVolume !='' && goodsDetail.cargoVolume !='0')?'/'+goodsDetail.cargoVolume+'方':''}}{{(goodsDetail.cargoNum !='' && goodsDetail.cargoNum != '0')?'/'+goodsDetail.cargoNum+'件':''}}</span>
					</div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/truckDesc_icon.svg"></div>
					<div class="cell__bd">
						<label class="labels">需求车辆</label>
						<span class="c1">{{goodsDetail.truckLengthName||0}}/{{goodsDetail.truckTypeName}}/剩<b>{{goodsDetail.surplusTruckNum}}</b>车</span>
					</div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon5.svg"></div>
					<div class="cell__bd"><label class="labels">货主留言</label><span>{{goodsDetail.remarkName}}</span></div>
				</div>
			</div>
			<div class="padd">
				<router-link tag="div" :to="{name: 'AppDownload'}" class="btn">
					<span v-if="goodsDetail.cargoFreightType == 'Fix'"><img src="../assets/img/truck.svg"/>我要承运</span>
					<span v-else-if="goodsDetail.cargoFreightType == 'Talk'"><img src="../assets/img/rmb.svg"/>我要报价</span>
					<span v-else><img src="../assets/img/rmb.svg"/>支付信息费</span>
				</router-link>
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
				const URL = this.__WEBSERVER__ + 'adv/cargoSource/detail'
				const params = {
					"id": this.$route.query.id,
					AppId: this.$route.query.AppId || '',
				}
				this.$http.get(URL, {params: params}).then(res => {
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
			margin-top 15px
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
		background #fff
		margin-top 10px
		position relative
		color #666
		font-weight bold
		font-size 14px
		position relative
		img
			vertical-align top
		p
			height 20px
			line-height 20px
			position absolute
			top 50%
			margin-top -10px
			left 10px
	.cell__hd
		.icon
			vertical-align top
			width 14px
			height 14px
			margin-top 5px
	.cell__bd
		color #666
		position relative
		padding-left 80px
		&.lineInfo
			font-weight bold
			color #666
			position relative
			padding-left 0
			span
				text-overflow ellipsis
				overflow hidden
				white-space nowrap
				display block
				float left
				font-size 14px
		span
			display inline-block
			vertical-align top
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
			position absolute
			left 0
			top 0
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