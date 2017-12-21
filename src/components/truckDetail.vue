<template>
	<div class="container">
		<!-- <div class="titleBar">车源详情</div> -->
		<div class="baseInfo bdb">
			<img  :src='__IMGWEBSERVER__ + "/" + truckDetail.headPicture' class="pic" @error="errorImg"/>
		    <p><b class="name">{{truckDetail.realName}} {{truckDetail.plateNo}}</b></p>
		    <p>{{truckDetail.truckTypeName}}/{{truckDetail.truckLengthName}}/{{truckDetail.loads}}吨</p>
			<router-link tag="div" :to="{name: 'AppDownload'}" class="tel icon-bddh"></router-link>
		</div>
		<div class="otherInfo bdb">
		    	<div class="item">
		    		<p class="tit"><i class="icon-ljlc"></i>累计里程</p>
		    		<p class="c1">{{truckDetail.mileage ? truckDetail.mileage : '0'}}km</p>
		    	</div>
		    	<div class="item bdl">
		    		<p class="tit"><i class="icon-ptcy"></i>平台承运</p>
		    		<p class="c1">{{truckDetail.waybillNum}}笔</p>
		    	</div>
		    	<div class="item bdl">
		    		<p class="tit"><i class="icon-hpl"></i>好评率</p>
		    		<p class="c2">{{truckDetail.feedbackRate}}%</p>
		    	</div>
		    </div>
		<router-link tag="div" :to="{name: 'truckLocation', query: {lng: truckDetail.lng, lat: truckDetail.lat}}" class="truckPosition bdtb"><p>{{truckDetail.posAreaName ? truckDetail.posAreaName.split(',').join('') : ''}}</p>
		</router-link>
		<div class="tab bdtb">
			<ul class="hd bdb">
				<li :class="{'cur':tab==1}" @click="tab = 1"><i class="icon-zjcp"></i>最近常跑</li>
				<li class="bdl" :class="{'cur':tab==2}" @click="tab = 2"><i class="icon-grrz"></i>个人认证</li>
			</ul>
			<div class="bd">
				<div class="con" v-show="tab==1">
					<div v-if="truckDetail.recentlineList.length==0" class="empty">
						<img src="../../static/img/empty.jpg" />
						<p>暂无数据</p>
					</div>
					<ul v-else>
						<li v-for="item in truckDetail.recentlineList">
							
						</li>
					</ul>
				</div>
				<div class="con" v-show="tab==2">
					<ul>
						<li>
							<label class="labels">身份证</label>
							<span class="attention icon-wrz" v-if="truckDetail.certifyStatus=='N' || truckDetail.certifyStatus==''">未认证</span>
							<span class="attentioned icon-yrz" v-else>已认证</span>
						</li>
						<li>
							<label class="labels">驾驶证</label>
							<span class="attention icon-wrz" v-if="truckDetail.certifyStatus=='N' ||truckDetail.certifyStatus== ''">未认证</span>
							<span class="attentioned icon-yrz" v-else>已认证</span>
						</li>
						<li>
							<label class="labels">行驶证</label>
							<span class="attention icon-wrz" v-if="truckDetail.certifyStatus=='N' || truckDetail.certifyStatus== ''">未认证</span>
							<span class="attentioned icon-yrz" v-else>已认证</span>
						</li>
						<li>
							<label class="labels">从业资格证</label>
							<span class="attention icon-wrz" v-if="truckDetail.certifyStatus=='N' || truckDetail.certifyStatus==''">未认证</span>
							<span class="attentioned icon-yrz" v-else>已认证</span>
						</li>
						<li>
							<label class="labels">道路运输许可证</label>
							<span class="attention icon-wrz" v-if="truckDetail.certifyStatus=='N' || truckDetail.certifyStatus==''">未认证</span>
							<span class="attentioned icon-yrz" v-else>已认证</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="padd">
			<router-link tag="div" :to="{name: 'AppDownload'}" class="btn"><i class="icon-tshy"></i>推送货源</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {defaultImg} from '../assets/data/icons'
	export default {
		data () {
			return {
				truckDetail: {},
				AuthenticationInfo:'',
				tab:1
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
		padding 10px 60px 10px 85px
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
			font-size 48px
			color #6cc
			-webkit-transform translateY(-50%)
			transform translateY(-50%)
	.otherInfo
		display flex
		height 60px
		padding 10px 0
		background #fff
		.item
			flex 1
			text-align center
			p
				font-size 14px
				color #868686
				height 20px
				line-height 20px
				i
					font-size 20px
					vertical-align middle
	.truckPosition
		background url('../../static/img/map.jpg') no-repeat center
		background-size 100% 100%
		margin-top 10px
		position relative
		min-height 40px
		color #666
		font-weight bold
		font-size 14px
		position relative
		p
			height 20px
			line-height 20px
			position absolute
			top 50%
			margin-top -10px
			left 10px
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
		i
			height 20px
			font-size 24px
			vertical-align middle
			margin-right 5px
			
	.tab
		background #fff
		margin-top 10px
		.hd
			height 40px
			li
				width 50%
				height 40px
				line-height 36px
				border-bottom 4px solid #fff
				float left
				text-align center
				color #999
				&.cur
					border-bottom-color #6cc
					color #6cc
				i
					vertical-align text-top
					font-size 18px
					margin-right 5px
		.bd
			.empty
				text-align center
				padding 20px 0 40px
				color #999
				img
					width 50%
			li
				padding 0 10px
				height 40px
				line-height 40px
				position relative
				font-size 14px
				&:after
					content ''
					position absolute
					height 1px
					background #ddd
					transform scaleY(0.5)
					left -10px
					right -10px
					bottom 0
				.labels
					float left
					color #999
				span
					float right
					height 40px
					line-height 40px
					display block
					&:before
						font-size 16px
						vertical-align top
					&.attention
						color #d4d4d4
					&.attentioned
						color #6cc
</style>