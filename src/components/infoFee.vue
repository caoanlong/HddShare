<template>
	<div class="container">
		<!-- <div class="titleBar">信息费服务协议</div> -->
		<div class="padd">
			<div class="item">
				<img class="icon" src="../assets/img/position_icon.svg">
				<div class="lineInfo">
					<span class="start">{{infoData.areaFromName}}</span>
					<span class="arrow"></span>
					<span class="end">{{infoData.areaToName}}</span>
				</div>
			</div>
			<div class="item">
				<img class="icon" src="../assets/img/detail_icon2.svg">
				<div class="goodInfo">{{infoData.cargoName?infoData.cargoName+'/':''}}{{infoData.cargoWeight?infoData.cargoWeight+'吨':''}}{{infoData.cargoVolume?'/'+infoData.cargoVolume+'方':''}}{{infoData.cargoNum?'/'+infoData.cargoNum+'件':''}}</div>
			</div>
			<img class="success_icon" src="../assets/img/success_icon.png"/>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_item">
				<div class="panel_box">
					<label>流水单号</label>{{infoData.agreementCode}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>付款时间</label>{{infoData.orderTime}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>协商信息费</label><b class="c2">{{infoData.infoFee?infoData.infoFee+'元':''}}</b>
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
					<label>身份证号码</label>{{infoData.shipperIDCardNum?(infoData.shipperIDCardNum.substring(0,5)+'********'+infoData.shipperIDCardNum.substr(14)):''}}
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
					<label>身份证号码</label>{{infoData.driverIDCardNum?(infoData.driverIDCardNum.substring(0,5)+'********'+infoData.driverIDCardNum.substr(14)):''}}
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
			<!-- <div class="pannel_item">
				<div class="panel_box">
					<label>车牌号码</label>{{infoData.plateNo}}
				</div>
			</div> -->
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
			document.title = '信息费协议'
			this.getInfoFee()
			this.getAgreement()
		},
		methods: {
			getInfoFee() {
				let URL = this.__WEBSERVER__ + 'agentOrder/agreement/detail'
				let params = {
					agentAgreementID: this.$route.query.agentAgreementID,
					// agentAgreementID: '401438223244460032',
					// Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0MDAyMzUzMzY0OTgwMzY3MzYiLCJzdWIiOiI0MDAyMzUzMzY0OTgwMzY3MzYiLCJuYmYiOjE1MTYxNTk5OTMsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTY3NjQ3OTMsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNjE1OTk5Mywic2VxIjo0MDMxNDk3NjMwMTg4OTk0NTZ9.m7U6Ielsez_9hMi2ojZKjgzXHgq83AzQ5o4PcpvrjK0'
					Authorization: this.$route.query.Authorization
				}
				this.$http.get(URL, {params: params}).then((res) => {
					if (res.body.code == 200) {
						console.log(JSON.stringify(res.body.data))
						this.infoData = res.body.data
					}
				})
			},
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: 'InformationFees',
					Authorization: this.$route.query.Authorization
					// Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0MDAyMzUzMzY0OTgwMzY3MzYiLCJzdWIiOiI0MDAyMzUzMzY0OTgwMzY3MzYiLCJuYmYiOjE1MTYxNTk5OTMsImlzcyI6IndlLXNlcnZpY2UuY24iLCJleHAiOjE1MTY3NjQ3OTMsImRldmljZSI6IkFQUCIsImlhdCI6MTUxNjE1OTk5Mywic2VxIjo0MDMxNDk3NjMwMTg4OTk0NTZ9.m7U6Ielsez_9hMi2ojZKjgzXHgq83AzQ5o4PcpvrjK0'
				}
				this.$http.get(URL, {params: params}).then((res) => {
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