<template>
	<div class="chargeRules">
	<div class="cells bdb" style="margin-top:0">
		<div class="cell">
			<div class="cell__bd">
				提现时间
			</div>
			<div class="cell__ft">
				随时可提
			</div>
		</div>
		<div class="cell">
			<div class="cell__bd">
				可提额度
			</div>
			<div class="cell__ft">
				全部余额
			</div>
		</div>
		<div class="cell">
			<div class="cell__bd">
				单日提现限额
			</div>
			<div class="cell__ft">
				50000.00元
			</div>
		</div>
		<div class="cell">
			<div class="cell__bd">
				单日提现次数
			</div>
			<div class="cell__ft">
				最多3次
			</div>
		</div>
		<div class="cell">
			<div class="cell__bd">
				到账时间
			</div>
			<div class="cell__ft">
				24小时内
			</div>
		</div>
		
	</div>
	<div class="tips">
		<img src="../assets/img/zjtsy.png" alt="" />
		<p>仅支持提现到储蓄卡</p>
		<p>出现提示提现失败的用户，请核查银行卡的预留信息是否更改，并向银行咨询银行卡状态是否正常</p>
	</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '提现规则'
		}
	}
</script>
<style lang="stylus" scoped>
	.chargeRules
		.cell__bd
			color #878787
		.cell__ft
			color #585858
	.tips
		color #7990a5
		position relative
		padding 10px 10px 10px 40px
		img
			width 24px
			height 24px
			position absolute
			left 10px
			top 14px
		p
			line-height 30px
			font-size 14px
</style>