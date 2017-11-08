<template>
	<div class="container">
		<!-- <div class="titleBar">信息费服务协议</div> -->
		<div class="padd">
			<div class="item">
				<img class="icon" src="../assets/img/position_icon.svg">
				<div class="lineInfo">
					<span class="start">{{infoData.AreaFromName}}</span>
					<span class="arrow"></span>
					<span class="end">{{infoData.AreaToName}}</span>
				</div>
			</div>
			<div class="item">
				<img class="icon" src="../assets/img/detail_icon2.svg">
				<div class="goodInfo">{{infoData.cargoName}}/{{infoData.cargoWeight}}吨/{{infoData.cargoVolume}}方/{{infoData.cargoPackageName}}</div>
			</div>
			<img class="success_icon" src="../assets/img/success_icon.png" v-if="infoData.AreaFromName">
		</div>
		<div class="pannel bdtb">
			<div class="pannel_item">
				<div class="panel_box">
					<label>装车时间</label>{{infoData.orderTime}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>付款时间</label>{{infoData.paymentTime}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>协商信息费</label><b class="c2">{{infoData.infoFee}}元</b>
				</div>
			</div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c2">托运方</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>托运单位</label>{{infoData.companyName}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>单位地址</label>{{infoData.companyAddress}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>托运人</label>{{infoData.shipperRealName}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>{{infoData.shipperIDCardNum}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>{{infoData.shipperMobile}}
				</div>
			</div>
			<div class="section section1"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c1">承运方</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>车牌号码</label>{{infoData.plateNo}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>承运人</label>{{infoData.driverRealName}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>{{infoData.driverIDCardNum}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>{{infoData.driverMobile}}
				</div>
			</div>
			<div class="section section2"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c3">装车信息</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>车牌号码</label>{{infoData.plateNo}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>装车地址</label>{{infoData.LoadingAddress}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>联系人</label>{{infoData.LoadingMan}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>{{infoData.LoadingMobile}}
				</div>
			</div>
			<div class="section section3"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title text-center" @click="isContent=!isContent">货多多信息费服务协议<img class="" src="../assets/img/arrow_down.svg"></div>
			<div class="agreement" v-show="isContent" v-html="content"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				infoData: {},
				content: '',
				isContent: false
			}
		},
		created() {
			this.getInfoFee()
			this.getAgreement()
		},
		methods: {
			getInfoFee() {
				let URL = this.__WEBSERVER__ + 'agentOrder/agreement/detail?agentAgreementID='+ this.$route.query.agentAgreementID
				this.$http.get(URL).then(
					(res) => {
						this.infoData = res.body.data
					},
					(res) => {
						// this.$router.push({name: 'error'})
					}
				)
			},
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode?code=InformationFees';
				this.$http.get(URL).then((res) => {
					if (res.body.code == 200) {
						this.content = res.body.data[0].content
					}
				})
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
	.c3
		color #69f
	.padd
		position relative
		.item
			padding 10px 0
			color #666
			img
			.goodInfo
			.lineInfo
				display inline-block
				vertical-align middle
			.lineInfo
				font-weight bold
				color #333
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
		.success_icon
			height 80%
			position absolute
			top 50%
			right 15px
			transform:translateY(-50%)
	.pannel
		position: relative;
		overflow: hidden;
		margin-top: 10px;
		background: #fff;
		color #666
		.agreement
			padding 10px 15px
			background-color #fff
		.pannel_title
			padding 10px 15px
			font-size 16px
		.pannel_item
			position relative
			padding 10px 15px
			font-size 14px
			.panel_box
				padding-left 90px
				text-align right
				position relative
				line-height 24px
				min-height 24px
				label
					width 90px
					position absolute
					left 0
					text-align left
		.text-center
			text-align center
			img
				display inline-block
				vertical-align middle
				margin-left 5px
		.section
			width 5px
			height 100%
			position absolute
			top 0
			left 0
			&.section1 
				background #f3be40
			&.section2 
				background #6cc
			&.section3 
				background #69f

						
</style>