<template>
	<div class="container">
		<!-- <div class="titleBar">运输协议</div> -->
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
				<div class="goodInfo">{{infoData.cargoName?infoData.cargoName+'/':''}}{{infoData.cargoWeight?infoData.cargoWeight+'吨/':''}}{{infoData.cargoVolume?infoData.cargoVolume+'方/':''}}{{infoData.truckType}}</div>
			</div>
			<img class="success_icon" src="../assets/img/cancel_icon.png" v-show="infoData.statusAll==1">
			<img class="success_icon" src="../assets/img/success_icon.png" v-show="infoData.statusAll==2">
		</div>
		<div class="pannel bdtb">
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>协议编号</label>{{infoData.waybillCode}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>运输单号</label>{{infoData.waybillCode}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>达成合作时间</label>{{infoData.createTime}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>协议运费</label><b class="c2">{{infoData.feeSum}}元</b>
				</div>
			</div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c2">发货方</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>发货单位</label>{{infoData.companyName}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>单位地址</label>{{infoData.shipperAddress}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>发货人</label>{{infoData.shipper}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>{{infoData.companyIDCardNum}}
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
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>车牌号码</label>{{infoData.plateNo}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>承运人</label>{{infoData.carrierRealName}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>{{infoData.carrierIDCardNum}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>{{infoData.carrierMobile}}
				</div>
			</div>
			<div class="section section2"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c3">装车条款</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>装车地址</label>{{infoData.shipperAddress}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>联系人</label>{{infoData.shipper}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>联系电话</label>{{infoData.shipperMobile}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>最晚装车时间</label>{{infoData.shipperDate}}
				</div>
			</div>
			<div class="section section3"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c2">送达条款</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>送达地址</label>{{infoData.consigneeAddress}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>联系人</label>{{infoData.consignee}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>联系电话</label>{{infoData.consigneeMobile}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>最晚到达时间</label>{{infoData.consigneeDate}}
				</div>
			</div>
			<div class="section section1"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c1">运费条款</div>
            <div class="pannel_item" v-if="infoData.isPayOnline=='N'" >
                <div class="panel_box">
                    <label>支付方式</label>线下支付
                </div>
            </div>
            <div class="pannel_item bdt">
                <div class="panel_box">
                    <label>承运运价</label>{{infoData.prepayOilCardFee}}
                </div>
            </div>
            <div class="pannel_item bdt">
                <div class="panel_box">
                    <label>确认装车</label>{{infoData.cargoVolume?infoData.cargoVolume+'方/':''}}{{infoData.cargoNum?infoData.cargoNum+'件/':''}}{{infoData.cargoWeight?infoData.cargoWeight+'吨':''}}
                </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
                <div class="panel_box">
                    <label>现付油卡</label>{{infoData.prepayOilCardFee}}
                </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
                <div class="panel_box">
                    <label>预付金额</label>{{infoData.prepayFee}}元
                </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
                <div class="panel_box">
                    <label>到付金额</label>{{infoData.codFee}}
                </div>
            </div>
            <div class="pannel_item bdt">
                <div class="panel_box">
                    <label>协议运费</label>{{infoData.feeSum}}元
                </div>
            </div>
			<div class="section section2"></div>
		</div>
		<div class="pannel bdtb" v-if="infoData.returnInvoiceFlag == 'Y' || infoData.returnWaybillFlag == 'Y'">
			<div class="pannel_title c3">回单条款</div>
			<div class="pannel_item">
				<div class="panel_box">
					<label>回单要求</label>{{infoData.returnInvoiceFlag == 'N' ? '' : '发货单'}} {{infoData.returnWaybillFlag == 'N' ? '' : '托运单'}}
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
			document.title = '运输费协议'
			this.getTransFee()
			this.getAgreement()
		},
		methods: {
			getTransFee() {
				let URL = this.__WEBSERVER__ + 'transOrder/agreement/detail'
				let params = {
                    transWaybillID: this.$route.query.transWaybillID,
					// transWaybillID: '380119854763474944',
					Authorization: this.$route.query.Authorization
				}
				this.$http.get(URL, {params: params}).then((res) => {
					if (res.body.code == 200) {
						this.infoData = res.body.data
						console.log(res.body.data)
					} 
				})
			},
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findContentListByTopicCode'
				let params = {
					code: 'InformationFees',
					Authorization: this.$route.query.Authorization
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
				.start
				.end
					width 110px
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
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
			transform translateY(-50%)
	.pannel
		position relative
		overflow hidden
		margin-top 10px
		background #fff
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