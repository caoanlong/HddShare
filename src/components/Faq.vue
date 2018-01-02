<template>
	<div class="Faq">
		<router-link tag="div" class="item bdb" :to="{name:'FaqDetail',query:{id:1}}">
			<p>什么是余额</p>
		</router-link>
		<router-link tag="div" class="item bdb" :to="{name:'FaqDetail',query:{id:2}}">
			<p>充值限额</p>
		</router-link>
		<router-link tag="div" class="item bdb" :to="{name:'FaqDetail',query:{id:3}}">
			<p>添加银行卡</p>
		</router-link>
		<router-link tag="div" class="item bdb" :to="{name: 'chargeRules'}">
			<p>提现规则</p>
		</router-link>
		<router-link tag="div" class="item bdb" :to="{name: 'charge'}">
			<p>提现手续费</p>
		</router-link>
		<router-link tag="div" class="item bdb" :to="{name:'FaqDetail',query:{id:4}}">
			<p>提现到账时间</p>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '常见问题'
		}
	}
</script>
<style lang="stylus" scoped>
	.Faq
		.item
			position relative
			padding 10px
			p
				position relative
				padding 0 20px
				height 30px
				line-height 30px
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
				&:before
					content ''
					background url('../assets/img/wtzn.png') no-repeat
					width 14px
					height 14px
					display block
					position absolute
					left 0
					top 8px
					background-size 100%
				&:after
					content ''
					background url('../assets/img/arrow-r.svg') no-repeat
					width 14px
					height 14px
					display block
					position absolute
					right 0
					top 8px
					background-size 100%
					
				
</style>