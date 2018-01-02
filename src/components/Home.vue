<template>
	<div class="container">
		<div class="titleBar" v-show="!isWx">单页</div>
		<div class="grids">
			<router-link tag="div" class="grid" :to="{name: 'AppDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">App下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'ConsignorDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">货主下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'DriverDownload'}">
				<div class="grid_icon"><img src="../assets/img/download.svg"></div>
				<div class="grid_label">司机下载</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'aboutHdd'}">
				<div class="grid_icon"><img src="../assets/img/about.svg"></div>
				<div class="grid_label">关于货多多</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'agreement'}">
				<div class="grid_icon"><img src="../assets/img/agreement.svg"></div>
				<div class="grid_label">注册协议</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'infoFee'}">
				<div class="grid_icon"><img src="../assets/img/agreement.svg"></div>
				<div class="grid_label">信息费协议</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'transFee'}">
				<div class="grid_icon"><img src="../assets/img/agreement.svg"></div>
				<div class="grid_label">运输费协议</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name:'PaymentProtocal'}">
				<div class="grid_icon"><img src="../assets/img/protocal.svg"></div>
				<div class="grid_label">支付协议</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'goodsDetail'}">
				<div class="grid_icon"><img src="../assets/img/detail.svg"></div>
				<div class="grid_label">货源详情</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'truckDetail'}">
				<div class="grid_icon"><img src="../assets/img/detail.svg"></div>
				<div class="grid_label">车辆详情</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'findGoods'}">
				<div class="grid_icon"><img src="../assets/img/goods_icon.svg"></div>
				<div class="grid_label">寻找货源</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'findTruck'}">
				<div class="grid_icon"><img src="../assets/img/truck_icon.svg"></div>
				<div class="grid_label">寻找车源</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'bankList'}">
				<div class="grid_icon"><img src="../assets/img/bank.svg"></div>
				<div class="grid_label">银行列表</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'charge'}">
				<div class="grid_icon"><img src="../assets/img/charge.svg"></div>
				<div class="grid_label">提现手续费</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'chargeRules'}">
				<div class="grid_icon"><img src="../assets/img/rules.svg"></div>
				<div class="grid_label">提现规则</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'Faq'}">
				<div class="grid_icon"><img src="../assets/img/help.svg"></div>
				<div class="grid_label">常见问题</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'statement'}">
				<div class="grid_icon"><img src="../assets/img/statement.svg"></div>
				<div class="grid_label">交易申明</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'updata'}">
				<div class="grid_icon"><img src="../assets/img/updata_icon.svg" class="rotate"></div>
				<div class="grid_label">版本更新</div>
			</router-link>
			<router-link tag="div" class="grid" :to="{name: 'error'}">
				<div class="grid_icon"><img src="../assets/img/404.svg"></div>
				<div class="grid_label">404页面</div>
			</router-link>
			<router-link tag="div" class="grid" to="">
				<div class="grid_icon"><img src="../assets/img/more.svg"></div>
				<div class="grid_label">敬请期待</div>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				isWx: false
			}
		},
		created () {
			this.isWx = (window.navigator.userAgent.indexOf('MicroMessenger') > -1) ? true : false
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
	.grid
		width 25%
		.grid_label
			font-size 12px
			color #999
</style>