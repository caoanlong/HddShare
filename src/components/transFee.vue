<template>
	<div id="container" class="container" >
		<!-- <div class="titleBar">运输协议</div> -->
		<div id="top" class="padd">
			<div class="item transLine" >
				<img class="icon" src="../assets/img/position_icon.svg">
				<div class="lineInfo">
					<span class="start">
						{{infoData.areaFromName && (infoData.areaFromName.split('').length > 6 ? infoData.areaFromName.substr(0,6) + '...' : infoData.areaFromName)}}
					</span>
					<img class="arrow" src="../assets/img/arrow.svg">
					<span class="end">
						{{infoData.areaToName && (infoData.areaToName.split('').length > 6 ? infoData.areaToName.substr(0,6) + '...' : infoData.areaToName)}}
					</span>
				</div>
			</div>
			<div class="item">
				<img class="icon" src="../assets/img/detail_icon2.svg">
				<div class="goodInfo" >{{infoData.cargoName?infoData.cargoName+'/':''}}{{infoData.cargoWeight?infoData.cargoWeight+'吨':''}}{{infoData.cargoVolume?'/'+infoData.cargoVolume+'方':''}}{{infoData.cargoNum?'/'+infoData.cargoNum+'件':''}}</div>
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
					<label>协议运费</label><b class="c2">{{infoData.feeSum?infoData.feeSum+'元':''}}</b>
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
					<label>单位地址</label>{{infoData.companyGpsAddress && (infoData.companyGpsAddress+'')}}{{infoData.companyAddress}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>发货人</label>{{infoData.companyRealName}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>身份证号码</label>{{infoData.companyIDCardNum}}
				</div>
			</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>电话号码</label>{{infoData.companyMobile}}
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
					<label>装车地址</label>{{infoData.shipperAddressPos}}{{infoData.shipperAddress && (','+infoData.shipperAddress)}}
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
			<div class="section section3"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c2">送达条款</div>
			<div class="pannel_item bdt">
				<div class="panel_box">
					<label>送达地址</label>{{infoData.consigneeAddressPos}}{{infoData.consigneeAddress && (','+infoData.consigneeAddress)}}
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
			<div class="section section1"></div>
		</div>
		<div class="pannel bdtb">
			<div class="pannel_title c1">运费条款</div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='N'" >
                <div class="panel_box">
                    <label>支付方式</label>线下支付
                </div>
            </div>
            <div class="pannel_item bdt">
                <div class="panel_box">
                    <label>承运运价</label>
                    <!-- 定价 -->
					<span v-if="infoData.cargoFreightType=='fix'">{{infoData.cargoFreightPrice}}{{infoData.cargoFreightUnit}}</span>
					<!-- 司机报价，议价 -->
					<span v-else="infoData.cargoFreightType=='Talk'">{{infoData.offerPrice}}{{infoData.cargoFreightUnit}}</span>
                    
                </div>
            </div>
            <div class="pannel_item bdt">
                <div class="panel_box">
                    <label>确认装车</label>
					<span v-if="unit=='方'">{{infoData.cargoVolume && (infoData.cargoVolume+'方')}}</span>
					<span v-else-if="unit=='件'">{{infoData.cargoNum && (infoData.cargoNum+'件')}}</span>
					<span v-else-if="unit=='吨'">{{infoData.cargoWeight && (infoData.cargoWeight+'吨')}}</span>
                    <span v-else>1车</span>
                </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
                <div class="panel_box">
                    <label>预付油卡</label>{{infoData.prepayOilCardFee?infoData.prepayOilCardFee+'元':''}}
                </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
                <div class="panel_box">
                    <label>预付金额</label>{{infoData.prepayFee?infoData.prepayFee+'元':''}}
                </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
            	<!-- 以实际装车结算 -->
                 <div v-if="infoData.codChargeWay=='ByPractice'">
	                <div class="panel_box" v-if="infoData.isCheckLoad=='Y'">
	                    <label>到付金额</label>{{infoData.codFee || infoData.codFee == 0 ?infoData.codFee+'元':''}}
	                </div>
	                <div class="panel_box" v-else>
	                    <label>到付金额</label>以实际装车结算
	                </div>
	             </div>
	             <!-- 按约定金额 -->
	             <div v-if="infoData.codChargeWay=='ByAppointment'">
	             	<div class="panel_box">
	                    <label>到付金额</label>{{infoData.codFee || infoData.codFee == 0 ?infoData.codFee+'元':''}}
	                </div>
	             </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='Y'">
            	<!-- 以实际装车结算 -->
                 <div v-if="infoData.codChargeWay=='ByPractice'">
	                <div class="panel_box" v-if="infoData.isCheckLoad=='Y'">
	                    <label>协议运费</label>{{infoData.feeSum?infoData.feeSum+'元':''}}
	                </div>
	                <div class="panel_box" v-else>
	                    <label>协议运费</label>以实际装车结算
	                </div>
	             </div>
	             <!-- 按约定金额 -->
	             <div v-if="infoData.codChargeWay=='ByAppointment'">
	             	<div class="panel_box">
	                    <label>协议运费</label>{{infoData.feeSum?infoData.feeSum+'元':''}}
	                </div>
	             </div>
            </div>
            <div class="pannel_item bdt" v-if="infoData.isPayOnline=='N'">
            	<div class="panel_box">
                    <label>协议运费</label>{{infoData.feeSum?infoData.feeSum+'元':''}}
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
			<div class="pannel_title text-center" @click="isContent=!isContent">货多多运输协议<img :class="{'active': isContent}" src="../assets/img/arrow_down.svg"></div>
			<div class="agreement" v-show="isContent" v-html="content"></div>
		</div>
		<div class="upBtn" @click="scrollTop"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				infoData: {},
				content: '',
				isContent: false,
				autoWidth:'',
				unit:''
			}
		},
		created() {
			document.title = '运输费协议'
			// this.autoWidth=(window.outerWidth-92)/2
			this.getTransFee()
			this.getAgreement()
		},
		methods: {
			getTransFee() {
				let URL = this.__WEBSERVER__ + 'transOrder/agreement/detail'
				let params = {
					transWaybillID: this.$route.query.transWaybillID,
					Authorization: this.$route.query.Authorization
				}
				this.$http.get(URL, {params: params}).then((res) => {
					if (res.body.code == 200) {
						this.infoData = res.body.data
						let len = res.body.data.cargoFreightUnit.length
						this.unit =  res.body.data.cargoFreightUnit.substr(len-1)
						console.log(res.body.data)
					} 
				})
			},
			getAgreement() {
				let URL = this.__WEBSERVER__ + 'content/findFreeContentListByTopicCode'
				let params = {
					code: 'Statement',
					Authorization: this.$route.query.Authorization
				}
				this.$http.get(URL, {params: params}).then((res) => {
					if (res.body.code == 200) {
						this.content = res.body.data[0].content
					}
				})
			},
			scrollTop () {
				document.body.scrollTop = 0
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.upBtn
		display block
		position fixed
		right 20px
		bottom 30px
		width 44px
		height 44px
		border-radius 22px
		box-shadow 0 2px 12px rgba(0,0,0,.3)
		background-color #fff
		background-image url('../assets/img/arr_up.svg')
		background-repeat no-repeat
		background-position center
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
			padding 5px 0
			color #666
			padding-left 20px
			position relative
			height 34px
			.icon
				position absolute
				left 0
				top 8px
			.lineInfo
				font-weight bold
				color #333
				.arrow
					width 30px
					height 24px
					display inline-block
					vertical-align top

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
			.active
				transform rotate(180deg)
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