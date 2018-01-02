<template>
	<div class="FaqDetail">
		<div v-if="this.$route.query.id==1">
			<div class="title bdb">
				什么是钱包余额
			</div>
			<div class="cells bdt">
				<div class="cell bdb">
					<div class="cell__hd"></div>
					<div class="cell__bd">
						余额是用户在货多多平台里的预付资金、支持充值、再现、支付等功能
					</div>
				</div>
				<div class="cell bdb">
					<div class="cell__hd"></div>
					<div class="cell__bd">
						充值：使用本人储蓄卡向余额充值
					</div>
				</div>
				<div class="cell bdb">
					<div class="cell__hd"></div>
					<div class="cell__bd">
						提现：将余额里的资金转到本人储蓄卡
					</div>
				</div>
				<div class="cell bdb">
					<div class="cell__hd"></div>
					<div class="cell__bd">
						支付：用户可以通过平台支付信息费、保证金、运费、保险费用
					</div>
				</div>
			</div>
		</div>
		<div v-else-if="this.$route.query.id==2">2</div>
		<div v-else-if="this.$route.query.id==3">3</div>
		<div v-else-if="this.$route.query.id==4">4</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '常见问题详情'
		}
	}
</script>
<style lang="stylus" scoped>
	.FaqDetail
		.title
			background #fff
			text-align center
			padding 20px 0
			color #585657
		.cell
			&.bdb:not(:last-child)
				&:after
					left 15px
		.cell__hd
			width 16px
			position relative
			margin 0
			&:before
				content ''
				width 8px
				height 8px
				border-radius 4px
				background #6cc
				display block
				position absolute
				left 0
				top 8px
		.cell__bd
			color #878787
			font-size 14px
</style>