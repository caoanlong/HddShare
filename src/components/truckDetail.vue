<template>
	<div class="container">
		<!-- <div class="titleBar">车源详情</div> -->
		<div class="baseInfo bdb">
			<img  :src='__IMGWEBSERVER__ + "/" + truckDetail.headPicture' class="pic" @error="errorImg"/>
		    <p>
		    	<b class="name">{{truckDetail.realName}}</b>
		    	<span class="attention attentioned" v-if="truckDetail.certifyStatus == 'Y'"><img src="../assets/img/attention.svg"/>已认证</span>
		    	<span class="attention" v-else><img src="../assets/img/unverified.svg"/>未认证</span>
		    </p>
		    <!-- <p class="history">平台承运<span class="c1">{{truckDetail.loads}}</span>笔</p> -->
		    <p>好评率 <span class="c2">{{truckDetail.feedbackRate}}%</span></p>
			<router-link tag="div" :to="{name: 'AppDownload'}" class="tel">
				<img src="../assets/img/ic_call_phone_image.png"/>
			</router-link>
		</div>
		<div class="truckInfo bdtb">
			<p><b class="truckNum">{{truckDetail.plateNo}}</b></p>
		    	<p>{{truckDetail.truckLengthName}}/{{truckDetail.truckTypeName}}</p>
		    	<p>{{truckDetail.posAreaName}}</p>
		    	<router-link tag="div" :to="{name: 'truckLocation', query: {lng: truckDetail.lng, lat: truckDetail.lat}}" class="viewMap"><img src="../../static/img/viewMap.png"/></router-link>
		</div>
		<div class="cells bdtb">
			<div class="cell" v-if="truckDetail.recentlineList ? truckDetail.recentlineList.length : false">
				<div class="cell__hd"><img class="icon" src="../assets/img/position_icon.svg"></div>
				<div class="cell__bd"><label class="labels">常跑路线</label><span class="fr f12 c9">{{truckDetail.updateTime}}发布 {{truckDetail.drivingLicenseFirstTime}} 可装货</span></div>
			</div>
			<div v-for="truckLine in truckDetail.recentlineList" :key="truckLine.areaToName">
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/start_icon.svg" width="22"></div>
					<div class="cell__bd">{{truckLine.areaFromName}}</div>
				</div>
				<div class="cell bdt">
					<div class="cell__hd"><img class="icon" src="../assets/img/end_icon.svg" width="22"></div>
					<div class="cell__bd">{{truckLine.areaToName}}</div>
				</div>
			</div>
		</div>
		<div class="padd">
			<router-link tag="div" :to="{name: 'AppDownload'}" class="btn"><img src="../assets/img/push.svg"/>推送货源</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {defaultImg} from '../assets/data/icons'
	export default {
		data () {
			return {
				truckDetail: {}
			}
		},
		created () {
			document.title = '车源详情'
			this.getTruckDetail()
			wx.onMenuShareAppMessage({
				title: '车源详情', // 分享标题
				desc: '车源详情描述', // 分享描述
				link: 'http://cdh.hdd56.com/hdd/hddWxShare/#/truckDetail?id=' + this.$route.query.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: "http://develop.we-service.cn/hdd/image/" + this.truckDetail.headPicture, // 分享图标
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
			getTruckDetail () {
				let URL = this.__WEBSERVER__ + 'adv/truck/detail'
				let params = {
					"memID": this.$route.query.id
				}
				this.$http.get(URL, {params: params}).then(res => {
					console.log(JSON.stringify(res.body.data))
					this.truckDetail = res.body.data
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
		.name
			display inline-block
			vertical-align top
			margin-right 5px
		.attention
			border 1px solid #ddd
			padding 1px 8px
			border-radius 10px
			font-size 12px
			color #ddd
			img
				width 12px
				height 12px
				vertical-align top
				margin-top 2px
				&.attentioned
					color #6cc
					border-color #6cc
		.tel
			position absolute
			right 15px
			top 50%
			width 40px
			height 40px
			-webkit-transform translateY(-50%)
			transform translateY(-50%)
			img
				width 100%
	.truckInfo
		background #fff
		margin-top 10px
		padding 10px 15px
		position relative
		height 80px
		color #999
		font-size 14px
		.truckNum
			font-size 16px
			color #666
			font-weight bold
		.pic
			position absolute
			left 15px
			top 10px
			border-radius 4px
			width 60px
			height 60px
		.viewMap
			position absolute
			right 15px
			top 50%
			width 40px
			height 40px
			-webkit-transform translateY(-50%)
			transform translateY(-50%)
			img
				width 100%
	.cell__hd
		.icon
			vertical-align middle
	.cell__bd
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
		background #ffc426
		text-align center
		img
			height 20px
			vertical-align middle
			margin -2px 5px 0 0
			
				
</style>