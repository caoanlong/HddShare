<template>
	<div>
		<div class="cells bdtb" style="margin-top:0">
			<div class="cell">
				<div class="cell__bd">
					官方微信
				</div>
				<div class="cell__ft">
					QHvfu56
				</div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">官方网站</div>
				<div class="cell__ft">www.we-service.net</div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">客服电话</div>
				<div class="cell__ft">400-666-5566</div>
			</div>
			<div class="cell bdt">
				<div class="cell__bd">公司邮箱</div>
				<div class="cell__ft">zhujj@vfu56.com</div>
			</div>
		</div>
		<div class="appCode">
			<img src="../assets/img/appCode.png" alt=""/>
			<p class="title">货多多APP</p>
			<p>版本V2.0.3</p>
		</div>
		<div class="copyright">
			<p>深圳前海微服大数据科技有限公司 版权所有</p>
			<p>Copyright 2017-2027 VFU. All Rights Reserved</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created () {
			document.title = '关于货多多'
		}
	}
</script>
<style lang="stylus" scoped>
	.appCode
		text-align center
		font-size 12px
		line-height 20px
		margin-top 40px
		color #999
		img
			background #fff
			border-radius 4px
			padding 4px
			width 114px
			height 114px
		.title
			color #6cc
			font-weight bold
			font-size 14px
	.copyright
		position fixed
		background #f8f8f8
		z-index 10
		width 100%
		bottom 10px
		color #999
		text-align center
		font-size 12px
		line-height 20px
</style>