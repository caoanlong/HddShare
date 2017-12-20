<template>
	<div>
		<div class="container">
			<!-- <div class="titleBar">货源详情</div> -->
			<div class="baseInfo bdb">
				<img  :src='__IMGWEBSERVER__ + "/" + goodsDetail.headPicture' class="pic" @error="errorImg"/>
			    <p>
			    	<b class="name">{{goodsDetail.realName}}</b>
			    	<span class="attention">
						<img src="../assets/img/attention.svg" v-if="goodsDetail.certifyStatus == 'Success'"/>
					</span>
			    </p>
			    <!-- <p class="company">云南微服物流</p> -->
			    <p class="history">历史发货<span class="c1">{{goodsDetail.cargoSourceNum}}</span>条</p>
			    <router-link tag="div" :to="{name: 'AppDownload'}" class="tel"><img src="../assets/img/ic_call_phone_image.png"/></router-link>
			</div>
			</div>
			<div class="cells bdtb">
				<div class="cell">
					<div class="cell__hd">
						<img class="icon" src="../assets/img/position_icon.svg">
					</div>
					<div class="cell__bd lineInfo">
						<span class="start" ref="autoW1">{{goodsDetail.areaFromName}}</span>
						<span class="arrow"></span>
						<span class="end" ref="autoW2">{{goodsDetail.areaToName}}</span>
					</div>
				</div>
			</div>
			<div class="viewMap bdb">最短里程<b>{{goodsDetail.estimateMileage}}公里</b>
				<router-link tag="div" :to="{name: 'goodsLine', query: {areaFromLat: goodsDetail.areaFromLat, areaFromLng: goodsDetail.areaFromLng, areaToLat: goodsDetail.areaToLat, areaToLng: goodsDetail.areaToLng}}" class="viewBtn"><img src="../../static/img/viewBtn.png" /></router-link>
			</div>
			<div class="cells bdtb">
				<div class="cell">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon1.svg"></div>
					<div class="cell__bd"><label class="labels">装车时间</label><span>{{goodsDetail.loadingDate||'随时装车'}}</span></div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon2.svg"></div>
					<div class="cell__bd">
						<label class="labels">货物信息</label>
						<span class="c1">{{goodsDetail.cargoName}}/{{goodsDetail.cargoWeight||0}}吨/{{goodsDetail.cargoVolume||0}}方/{{goodsDetail.cargoNum||0}}件</span>
					</div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/detail_icon3.svg"></div>
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
					<span v-if="goodsDetail.cargoFreightType == 'Agent'"><img src="../assets/img/rmb.svg"/>支付信息费</span>
					<span v-if="goodsDetail.cargoFreightType == 'Fix'"><img src="../assets/img/truck.svg"/>我要承运</span>
					<span v-if="goodsDetail.cargoFreightType == 'Talk'"><img src="../assets/img/rmb.svg"/>我要报价</span>
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
		mounted() {
			var w = (document.body.clientWidth - 83)/2
			this.$refs.autoW1.style.width = w +'px'
			this.$refs.autoW2.style.width = w +'px'
		},
		created () {
			document.title = '货源详情'
			this.getGoodsDetail()
			wx.onMenuShareAppMessage({
				title: '货源详情', // 分享标题
				desc: '货源详情描述', // 分享描述
				link: 'http://cdh.hdd56.com/hdd/hddWxShare/#/goodsDetail?id=' + this.$route.query.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: "http://develop.we-service.cn/hdd/image/" + this.goodsDetail.headPicture, // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function () {
				// 用户确认分享后执行的回调函数
				},
				cancel: function () {
				// 用户取消分享后执行的回调函数
				}
			});
		},
		methods: {
			getGoodsDetail() {
				let URL = this.__WEBSERVER__ + 'adv/cargoSource/detail'
				let params = {
					"id": this.$route.query.id
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
		span
			display inline-block
			vertical-align middle
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